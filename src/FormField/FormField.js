import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContextFormInstanceConsumer } from '../Context/ContextFormInstanceContext';
import { withFormFieldArrayConsumer } from '../Context/FormFieldArrayContext';
import { humanizeName } from '../utils';
import FormControl from './FormControl';

class FormField extends Component {
  componentDidMount() {
    if (this.props.form) {
      if (this.props.required) {
        this.props.form.addValidationRule(this.props.name, { required : this.props.required });
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
    const { name, label, form, fieldArray }                         = this.props;
    const { Field }                                                 = form.getTheme();
    const { Container, Label, InputContainer, Description, Errors } = Field;

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
            {...this.props}
            name={name}
            errors={errors}
            value={value}
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
  required    : PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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

FormField = withContextFormInstanceConsumer(FormField);
FormField = withFormFieldArrayConsumer(FormField);

export default FormField;
