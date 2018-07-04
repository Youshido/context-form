import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContextFormConsumer } from '../Context/FormContext';
import { withFormFieldArrayConsumer } from '../Context/FormFieldArrayContext';
import { withContextFormThemeConsumer } from '../Theme/ContextFormThemeContext';
import { humanizeName } from '../utils';

class FormField extends Component {

  componentDidMount() {
    if (this.props.required && this.props.form) {
      this.props.form.addValidationRule(this.props.name, { required : true });
    }
  }

  onChange = e => {
    const value      = e?.target?.value !== undefined ? e?.target.value : e;
    const { name, fieldArray, form } = this.props;

    if (fieldArray) {
      fieldArray.setValue(name, value, fieldArray.index)
    } else if (form) {
      form.setValue(name, value);
      this.props.onChange && this.props.onChange(value);
    }
  };

  render() {
    const { name, label, component, form, contextFormTheme : theme, fieldArray, ...extraProps } = this.props;
    const { Field }                                                                             = theme;
    const { Container, Label, InputContainer, Description, Errors }                             = Field;

    const Component = component || theme.types[this.props.type].component;

    for (let p of ['placeholder']) {
      if (this.props[p] !== undefined) {
        extraProps[p] = this.props[p];
      }
    }
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
    return (
      <Container {...this.props}>
        {label !== false &&
        <Label fieldName={fieldName}
               required={this.props.required}>{label || humanizeName(name)}</Label>
        }
        <InputContainer>
          <Component id={fieldName} {...extraProps} onChange={this.onChange} value={value}>
            {this.props.children}
          </Component>
          <Description>{this.props.description}</Description>
          <Errors errors={errors}/>
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
