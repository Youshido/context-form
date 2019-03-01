import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withContextFormInstanceConsumer } from '../Context/ContextFormInstanceContext';
import { withFormFieldArrayConsumer } from '../Context/FieldArrayContext';
import { humanizeName } from '../utils';
import FieldInput from './FieldInput';

class Field extends Component {
  get parentContext() {
    return this.props.fieldArray || this.props.form || null;
  };

  get fieldId() {
    return this.parentContext?.getId() + '-' + this.props.name;
  }

  get fullName() {
    const prefix = this.props.fieldArray
      ? (this.props.fieldArray.getIndexedName() + '.')
      : '';
    return prefix + this.props.name;
  }

  onChange = e => {
    const value = e?.target?.value !== undefined ? e?.target.value : e;
    this.parentContext?.setValue(this.props.name, value);
    this.props.onChange && this.props.onChange(value);
  };

  render() {
    const { name, label, form, fieldArray }                         = this.props;
    const { Field }                                                 = form.getTheme();
    const { Container, Label, InputContainer, Description, Errors } = Field;

    let errors    = null;
    let value     = this.parentContext ? this.parentContext?.getValue(name) : this.props.value;
    const autoComplete = this.props.autoComplete || form?.getProps()?.autoComplete || 'on';
    if (form) {
      if (form.errors && form.errors[this.fullName]) {
        errors = Array.isArray(form.errors[this.fullName]) ? form.errors[this.fullName] : [form.errors[this.fullName]];
      }
    }
    const labelText  = label || humanizeName(name);
    const stateProps = {
      errors,
      hasErrors: errors?.length,
      fieldName: this.fullName,
      layout : form?.layout,
      isHorizontal : form?.layout === 'horizontal'
    };
    return (
      <Container {...this.props} {...stateProps}>
        {label !== false &&
        <Label
          {...stateProps}
          required={this.props.required}>
          {label || humanizeName(name)}
        </Label>
        }
        <InputContainer {...stateProps}>
          <FieldInput
            id={this.fieldId}
            {...this.props}
            autoComplete={autoComplete}
            label={label !== false ? labelText : undefined}
            name={this.props.name}
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

Field.propTypes    = {
  name        : PropTypes.string.isRequired,
  type        : PropTypes.string.isRequired,
  required    : PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  placeholder : PropTypes.string,
  description : PropTypes.any,
  component   : PropTypes.any,
  onChange    : PropTypes.func,
  fieldArray  : PropTypes.any,
};
Field.defaultProps = {
  type     : 'text',
  required : false,
};

Field = withContextFormInstanceConsumer(Field);
Field = withFormFieldArrayConsumer(Field);

export default Field;
