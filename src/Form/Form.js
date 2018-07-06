import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContext from '../Context/FormContext';
import { withContextFormThemeConsumer } from '../Theme/ContextFormThemeContext';
import SimpleTheme from '../Theme/SimpleTheme/SimpleTheme';
import ContextFormValidator from '../Validator/ContextFormValidator';

const defaultValidator = new ContextFormValidator();
const innulable        = values => values === null ? {} : values;

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

  getValidator = () => this.props.contextFormTheme?.validator || defaultValidator;

  setValue = (name, value) => {
    const updateValue = { [name] : value };
    if (this.isControlled()) {
      this.props.onChange(updateValue);
    } else {
      this.setState({
        pristine : false,
        values   : {
          ...this.state.values,
          ...updateValue,
        },
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
          error,
        ],
      },
    });
  };

  validateFields = () => {
    const values = this.getValues();
    return this.getValidator().validateValues(values).then(({ values, errors }) => {
      this.setState({ errors });
      return { values, errors };
    });
  };

  clearErrors = name => this.setState({ errors : { ...this.state.errors, [name] : undefined } });

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
        values : innulable(this.props.initialValues),
      });
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
            errors,
          });
        }
      });
    } else {
      this.props.onSubmit({ values : this.getValues() });
    }
  };

  onReset = e => {
    e && e.preventDefault();
    this.setState({
      values : this.props.initialValues,
    });
  };

  render() {
    const defaultForm = (props) => <form {...props}/>;
    const Form        = this.props.contextFormTheme?.Form || defaultForm;
    const validator   = this.getValidator();
    return (
      <Form onSubmit={this.onSubmit} onReset={this.onReset}
            horizontal={this.props.horizontal}
            className={`context-form context-form-theme-${this.props.contextFormTheme?.name?.toLowerCase()} ${this.props.layout} ${this.props.className || ''} with-labels`}
            style={this.props.style}>
        <FormContext.Provider value={{
          ...this.state,
          getValue           : this.getValue,
          setValue           : this.setValue,
          validateFields     : validator.validateFields,
          addValidationRule  : validator.addValidationRule,
          getName            : () => this.props.name,
          getTheme           : () => this.props.contextFormTheme,
          registerFieldArray : this.registerFieldArray,
          addFieldArray      : this.addFieldArray,
          removeFieldArray   : this.removeFieldArray,
          submit             : this.onSubmit,
        }}>
          {this.props.children}
        </FormContext.Provider>
      </Form>
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
  className        : PropTypes.string,
  horizontal       : PropTypes.bool,
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
