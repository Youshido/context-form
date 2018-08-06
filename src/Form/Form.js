import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withContextForm } from '../Context/ContextFormContext';
import ContextFormInstanceContext from '../Context/ContextFormInstanceContext';
import SimpleTheme from '../Theme/SimpleTheme/SimpleTheme';
import ContextFormValidator from '../Validator/ContextFormValidator';

const innulable   = values => (values === null ? {} : values);
const defaultForm = props => <form {...props} />;

class Form extends Component {
  validationRules = {};
  fieldArrays     = {};
  validator       = undefined;
  theme           = undefined;
  FormComponent   = defaultForm;

  state = {
    values   : this.props.values || innulable(this.props.initialValues) || {},
    errors   : {},
    pristine : true,
  };

  constructor(props) {
    super(props);
    const Validator = this.props.contextForm?.validator || ContextFormValidator;
    this.validator  = new Validator();
    this.theme      = this.props.contextForm?.theme || SimpleTheme;
    if (this.theme.Form) {
      this.FormComponent = this.theme.Form;
    }
    if (this.props.contextForm?.registerForm) {
      this.props.contextForm.registerForm(props.name, this);
    }
  }

  getValues = () => (this.isControlled() ? this.props.values : this.state.values);

  getValue = name => this.getValues()[name];

  isControlled = () => this.props.values !== undefined;

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
    const { errors }  = this.state;
    const fieldErrors = errors[name] || [];
    this.setState({
      errors : {
        ...this.state.errors,
        [name] : [...fieldErrors, error],
      },
    });
  };

  validateFields = () => {
    const rawValues = this.getValues();
    return this.validator
      .validateValues(rawValues)
      .then(({ values, errors }) => {
        if (this.props.validate) {
          const { values : formValues, errors : formErrors } = this.props.validate(rawValues, errors);
          if (formErrors) {
            errors = { ...errors, ...formErrors };
          }
          if (formValues) {
            values = { ...values, ...formValues };
          }
        }
        this.setState({ errors });
        return { values, errors };
      });
  };

  clearErrors = name => this.setState({ errors : { ...this.state.errors, [name] : undefined } });

  registerFieldArray = (name, reference, props) => {
    this.fieldArrays[name] = reference;
    this.initializeArrayValue(name, props);
  };

  addFieldArray = (name) => {
    this.fieldArrays[name].addGroup();
  };

  removeFieldArray = (name, index) => {
    this.fieldArrays[name].removeGroup(index);
  };

  initializeArrayValue = (name, { initialCount }) => {
    const value = this.state.values[name] || [];
    while (value.length < initialCount) {
      value.push({});
    }
    if (value !== this.state.values[name]) {
      this.setValue(name, value);
    }
  };

  componentDidUpdate(prevProps) {
    // todo: REVISE comparision
    const prevInitialValues = JSON.stringify(prevProps.initialValues);
    const initialValues     = JSON.stringify(this.props.initialValues);
    if (initialValues !== prevInitialValues) {
      this.setState({
        values : {...innulable(this.props.initialValues)},
      });
    }
  }

  submit = () => this.onSubmit();

  onSubmit = (e) => {
    const { validateOnSubmit, onSubmit } = this.props;

    e && e.preventDefault();
    if (validateOnSubmit) {
      this.validateFields().then(({ values, errors }) => {
        if (!Object.keys(errors).length) {
          onSubmit({ values });
        } else {
          this.setState({
            errors,
          });
        }
      });
    } else {
      onSubmit({ values : this.getValues() });
    }
  };

  onReset = (e) => {
    e && e.preventDefault();
    this.setState({
      values : this.props.initialValues,
    });
  };

  render() {
    const FormComponent = this.FormComponent;

    return (
      <FormComponent
        onSubmit={this.onSubmit}
        onReset={this.onReset}
        horizontal={this.props.horizontal}
        className={cn(
          'context-form',
          `context-form-theme-${this.theme.name?.toLowerCase()}`,
          this.props.layout,
          this.props.className || '',
          'with-labels')}
        style={this.props.style}
        noValidate
      >
        <ContextFormInstanceContext.Provider
          value={{
            ...this.state,
            getValue           : this.getValue,
            setValue           : this.setValue,
            validateFields     : this.validator.validateFields,
            addValidationRule  : this.validator.addValidationRule,
            getName            : () => this.props.name,
            getTheme           : () => this.theme,
            registerFieldArray : this.registerFieldArray,
            addFieldArray      : this.addFieldArray,
            removeFieldArray   : this.removeFieldArray,
            submit             : this.onSubmit,
            layout             : this.props.layout,
          }}
        >
          {this.props.children}
        </ContextFormInstanceContext.Provider>
      </FormComponent>
    );
  }
}

Form.propTypes = {
  name             : PropTypes.string,
  validate         : PropTypes.func,
  validateOnSubmit : PropTypes.bool,
  layout           : PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  onSubmit         : PropTypes.func,
  onChange         : PropTypes.func,
  contextForm      : PropTypes.object,
  values           : PropTypes.object,
  initialValues    : PropTypes.object,
  className        : PropTypes.string,
  style            : PropTypes.any,
};

Form.defaultProps = {
  name             : `form_${Date.now()}_${Math.random()}`,
  validator        : ContextFormValidator,
  validateOnSubmit : true,
  layout           : 'vertical',
  onChange         : () => null,
  onSubmit         : () => null,
};

export default withContextForm(Form);
