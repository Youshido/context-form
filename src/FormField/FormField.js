import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContextFormConsumer } from '../Context/FormContext';
import { withFormFieldArrayConsumer } from '../Context/FormFieldArrayContext';
import { withContextFormThemeConsumer } from '../Theme/ContextFormThemeContext';
import { humanizeName } from '../utils';
import FormControl from './FormControl';

class FormField extends Component {

  componentDidMount() {
    if (this.props.form) {
      if (this.props.required) {
        this.props.form.addValidationRule(this.props.name, { required : true });
      }
      if (this.props.rules) {
        this.props.rules.forEach(rule => this.props.form.addValidationRule(this.props.name, rule));
      }
    }
  }

  onChange = e => {
    const value                      = e?.target?.value !== undefined ? e?.target.value : e;
    const { name, fieldArray, form } = this.props;

    if (fieldArray) {
      fieldArray.setValue(name, value, fieldArray.index);
    } else if (form) {
      form.setValue(name, value);
      this.props.onChange && this.props.onChange(value);
    }
  };

  render() {
    const { name, label, form, contextFormTheme : theme, fieldArray } = this.props;
    const { Field }                                                   = theme;
    const { Container, Label, InputContainer, Description, Errors }   = Field;

    let errors    = null;
    let value     = this.props.value;
    let fieldName = form?.getName() + '-' + name;
    if (form) {
      if (form.errors && form.errors[name]) {
        errors = Array.isArray(form.errors[name]) ? form.errors[name] : [form.errors[name]];
      }
      if (fieldArray) {
        value = fieldArray.getValue(name, fieldArray.index);
      } else {
        value = form.getValue(name);
      }
    }
    const stateProps = { fieldName, errors };
    return (
      <Container {...this.props} {...stateProps}>
        {label !== false &&
        <Label fieldName={fieldName}
               required={this.props.required}>{label || humanizeName(name)}</Label>
        }
        <InputContainer>
          <FormControl
            id={fieldName}
            name={name}
            errors={errors}
            value={value}
            children={this.props.children}
            type={this.props.type}
          />
          <Description {...stateProps}>{this.props.description}</Description>
          <Errors {...stateProps}/>
        </InputContainer>
      </Container>
    );
  }
}

FormField.propTypes    = {
  name        : PropTypes.string.isRequired,
  type        : PropTypes.string.isRequired,
  required    : PropTypes.bool,
  placeholder : PropTypes.string,
  description : PropTypes.any,
  component   : PropTypes.any,
  onChange    : PropTypes.func,
  fieldArray  : PropTypes.any,
};
FormField.defaultProps = {
  type     : 'text',
  required : false,
};

FormField = withContextFormConsumer(FormField);
FormField = withFormFieldArrayConsumer(FormField);
FormField = withContextFormThemeConsumer(FormField);

export default FormField;
