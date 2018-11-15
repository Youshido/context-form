import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContextFormInstanceConsumer } from '../Context/ContextFormInstanceContext';
import { withFormFieldArrayConsumer } from '../Context/FieldArrayContext';
import { withContextForm } from '../Context/ContextFormContext';

class FieldInput extends Component {
  get parentContext() {
    return this.props.fieldArray || this.props.form || {};
  };
  get fullName() {
    const prefix = this.props.fieldArray
      ? (this.props.fieldArray.getIndexedName() + '.')
      : '';
    return prefix + this.props.name;
  }
  get fieldId() {
    return this.props.id || (this.parentContext?.getId() + '-' + this.props.name);
  }

  componentDidMount() {
    this.props.form?.setRequired(this.fullName, this.props.required);
    if (this.props.rules) {
      this.registerRules(this.props.rules);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.required !== this.props.required) {
      this.props.form?.setRequired(this.fullName, this.props.required);
    }
  }

  registerRules = (rules) => {
    this.props.form?.clearValidationRules(this.fullName);
    rules.forEach(rule => this.props.form.addValidationRule(this.fullName, rule));
  };

  onChange = e => {
    const value    = e?.target?.value !== undefined ? e?.target.value : e;
    const { name } = this.props;

    this.parentContext.setValue(name, value);
    this.props.onChange && this.props.onChange(value);
  };

  render() {
    const { name, component, className, contextForm, fieldArray, form, ...extraProps } = this.props;

    const Component = component || contextForm?.theme?.types[this.props.type]?.component;
    if (!Component) {
      console.error('[context-form]: Invalid type', this.props.type);
      return null;
    }

    const value = this.parentContext ? this.parentContext.getValue(name) : this.props.value;
    return (
      <Component
        id={this.fieldId}
        name={name}
        className={className}
        onChange={this.onChange}
        value={value}
        hasError={this.props.form.hasError(this.fullName)}
        {...extraProps}
      >
        {this.props.children}
      </Component>
    );
  }
}

FieldInput.propTypes    = {
  name        : PropTypes.string.isRequired,
  type        : PropTypes.string.isRequired,
  required    : PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  placeholder : PropTypes.string,
  className   : PropTypes.string,
  description : PropTypes.any,
  component   : PropTypes.any,
  onChange    : PropTypes.func,
  fieldArray  : PropTypes.any,
};
FieldInput.defaultProps = {
  type     : 'text',
  required : false,
};

FieldInput = withContextFormInstanceConsumer(FieldInput);
FieldInput = withFormFieldArrayConsumer(FieldInput);
FieldInput = withContextForm(FieldInput);

export default FieldInput;
