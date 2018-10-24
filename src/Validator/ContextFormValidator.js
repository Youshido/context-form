import { humanizeName } from "../utils";

class ContextFormValidator {
  rules  = {};
  errors = {};

  addValidationRule = (fieldName, rule) => {
    if (!this.rules[fieldName]) {
      this.rules[fieldName] = [];
    }
    this.rules[fieldName].push(rule);
  };

  setRequired = (fieldName, isRequired) => {
    if (!this.rules[fieldName]) {
      this.rules[fieldName] = [];
    }
    this.rules[fieldName] = this.rules[fieldName].filter(item => !item.__required);

    if (isRequired) {
      this.rules[fieldName].push({ required : true, __required : true });
    }
    
    console.log("%c this.rules", "background: rgba(255,255,0, .3);", this.rules);
  };

  validateValues = (values) => {
    const errors   = {};
    const addError = (name, error) => {
      if (!errors[name]) errors[name] = [];
      errors[name].push(error);
    };
    return new Promise((resolve) => {
      for (let fieldName in this.rules) {
        const value = values[fieldName];

        // noinspection JSUnfilteredForInLoop
        this.rules[fieldName].forEach(rule => {
          let error = undefined;
          if (rule.required && !value) {
            const message = rule.message || (typeof rule.required === "string"
              ? rule.required
              : `${humanizeName(fieldName)} is required.`);
            error         = { required : true, message };
          } else if (typeof rule === "function") {
            const result = rule(value);
            if (result !== true) {
              error = { rule : rule.name, message : result || "Value is invalid" };
            }
          } else {
            // clear error
          }
          error && addError(fieldName, error);
        });
      }
      resolve({ values, errors });
    });
  };
}

export default ContextFormValidator;
