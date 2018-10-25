import { humanizeName } from "../utils";

class ContextFormValidator {
  rules  = {};
  errors = {};
  fields = {}; // depricated

  addValidationRule = (fieldName, rule) => {
    if (!this.rules[fieldName]) {
      this.rules[fieldName] = [];
    }
    this.rules[fieldName].push(rule);
    // depricated
    this.fields[fieldName] = {
      isArray : rule.isArray,
      path : fieldName.split('.'),
    };
  };

  clearValidationRules = (fieldName) => {
    this.rules[fieldName] = [];
  };

  setRequired = (fieldName, isRequired) => {
    this.rules[fieldName] = this.rules[fieldName]?.filter(item => !item.__required) || [];

    if (isRequired) {
      this.addValidationRule(fieldName, { required : true, __required : true });
    }
  };

  getValue = (fieldName, values) => {
    let path = fieldName.split('.');
    let value = values[path[0]];
    path = path.slice(1);
    while(path.length && value) {
      value = value[path[0]];
      path = path.slice(1);
    }
    return value;
  };

  getArrayValues = (fieldName, values) => {
    let path = this.fields[fieldName].path;
    const field = path.slice(-1);
    path = path.slice(0, path.length - 1);
    let arrayValue = values;
    while(path.length) {
      arrayValue = values[path[0]];
      path = path.slice(1);
    }
    return arrayValue.map(item => item[field]);
  };

  validateValues = (values) => {
    const errors   = {};
    const addError = (name, error) => {
      if (!errors[name]) errors[name] = [];
      errors[name].push(error);
    };

    return new Promise((resolve) => {
      for (const fieldName of Object.keys(this.rules)) {
        this.rules[fieldName].forEach(rule => {
          const value = this.getValue(fieldName, values);
          const error = this.checkFieldValue(rule, value, fieldName);
          error && addError(fieldName, error);
        });
      }
      resolve({ values, errors });
    });
  };

  checkFieldValue = (rule, value, fieldName) => {
    let error = undefined;
    if (rule.required && !value) {
      const message = rule.message || (typeof rule.required === "string"
        ? rule.required
        : `${humanizeName(fieldName.split('.').slice(-1))} is required.`);
      error         = { required : true, message };
    } else if (typeof rule === "function") {
      const result = rule(value);
      if (result !== true) {
        error = { rule : rule.name, message : result || "Value is invalid" };
      }
    } else {
      // clear error
    }
    return error;
  };
}

export default ContextFormValidator;
