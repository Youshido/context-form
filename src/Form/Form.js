import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContext from '../Context/FormContext';
import { withContextFormThemeConsumer } from '../Theme/ContextFormThemeContext';
import SimpleTheme from '../Theme/SimpleTheme/SimpleTheme';
import { humanizeName } from '../utils';
import ContextFormValidator from '../Validator/ContextFormValidator';

const innulable = values => values === null ? {} : values;

class Form extends Component {
  validationRules = {};
  fieldArrays     = {};

  state = {
    values   : this.props.values || innulable(this.props.initialValues) || {},
    errors   : {},
    pristine : true,
  };

  getValues = () => this.isControlled() ? this.props.values : this.state.values;
  getValue  = name => this.getValues()[name];

  isControlled = () => this.props.values !== undefined;

  setValue = (name, value) => {
    const updateValue = { [name] : value };
    if (this.isControlled()) {
      this.props.onChange(updateValue)
    } else {
      this.setState({
        pristine : false,
        values   : {
          ...this.state.values,
          ...updateValue
        }
      });
    }
    this.clearErrors(name);
  };

  addError = (name, error) => {
    console.log('[ADD ERROR]', name, error);
    const errors = this.state.errors[name] || [];
    this.setState({
      errors : {
        ...this.state.errors,
        [name] : [
          ...errors,
          error
        ]
      }
    });
  };

  clearErrors = name => this.setState({ errors : { ...this.state.errors, [name] : undefined } });

  validateFields = () => {
    const errors = {};
    return new Promise((resolve) => {
      const values = this.getValues();
      for (let fieldName in this.validationRules) {

        // noinspection JSUnfilteredForInLoop
        this.validationRules[fieldName].forEach(rule => {
          if (rule.required && !values[fieldName]) {
            if (!errors[fieldName]) errors[fieldName] = [];

            errors[fieldName].push({ required : true, message : `${humanizeName(fieldName)} is required.` });
          } else {
            this.clearErrors(fieldName);
          }
        });
      }
      resolve({ values, errors });
    });
  };

  addValidationRule = (fieldName, rule) => {
    if (!this.validationRules[fieldName]) {
      this.validationRules[fieldName] = [];
    }
    this.validationRules[fieldName].push(rule);
  };

  registerFieldArray = (name, reference) => {
    this.fieldArrays[name] = reference;
  };

  addFieldArray = (name) => {
    this.fieldArrays[name].addGroup();
  };

  removeFieldArray = (name, index) => {
    this.fieldArrays[name].removeGroup(index);
  };

  componentDidUpdate(prevProps) {
    // console.log("this.props.initialValues", this.props.initialValues, prevProps.initialValues);
    // todo: REVISE comparision
    if (JSON.stringify(this.props.initialValues) !== JSON.stringify(prevProps.initialValues)) {
      this.setState({
        values : innulable(this.props.initialValues)
      })
    }
  }

  onSubmit = e => {
    e && e.preventDefault();
    if (this.props.validateOnSubmit) {
      this.validateFields().then(({ values, errors }) => {
        if (!Object.keys(errors).length) {
          this.props.onSubmit({ values });
        } else {
          this.setState({
            errors
          })
        }
      });
    } else {
      this.props.onSubmit({ values : this.getValues() })
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}
            className={`context-form context-form-theme-${this.props.contextFormTheme?.name?.toLowerCase()} ${this.props.layout} with-labels`}
            style={this.props.style}>
        <FormContext.Provider value={{
          ...this.state,
          getValue           : this.getValue,
          setValue           : this.setValue,
          validateFields     : this.validateFields,
          addValidationRule  : this.addValidationRule,
          getName            : () => this.props.name,
          getTheme           : () => this.props.contextFormTheme,
          registerFieldArray : this.registerFieldArray,
          addFieldArray      : this.addFieldArray,
          removeFieldArray   : this.removeFieldArray,
          submit             : this.onSubmit,
        }}>
          {this.props.children}
        </FormContext.Provider>
      </form>
    );
  }
}

Form.propTypes = {
  name             : PropTypes.string,
  validator        : PropTypes.func,
  validateOnSubmit : PropTypes.bool,
  layout           : PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  onSubmit         : PropTypes.func,
  onChange         : PropTypes.func,
  contextFormTheme : PropTypes.any,
  values           : PropTypes.object,
  initialValues    : PropTypes.object,
};

Form.defaultProps = {
  name             : 'form_' + Date.now(),
  validator        : ContextFormValidator,
  contextFormTheme : SimpleTheme,
  validateOnSubmit : true,
  layout           : 'horizontal',
  onChange         : () => null,
  onSubmit         : () => null,
};


export default withContextFormThemeConsumer(Form);
