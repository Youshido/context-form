import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContextFormConsumer } from '../Context/FormContext';
import { withFormFieldArrayConsumer } from '../Context/FormFieldArrayContext';
import { withContextFormThemeConsumer } from '../Theme/ContextFormThemeContext';

class FormControl extends Component {

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
    const { name, component, form, contextFormTheme : theme, fieldArray, ...extraProps } = this.props;
    const Component                                                                      = component || theme.types[this.props.type].component;

    for (let p of ['placeholder']) {
      if (this.props[p] !== undefined) {
        extraProps[p] = this.props[p];
      }
    }
    let value     = this.props.value;
    let fieldName = form?.getName() + '-' + name;
    if (form) {
      if (fieldArray) {
        value = fieldArray.getValue(name, fieldArray.index);
      } else {
        value = form.getValue(name);
      }
    }
    return (
      <Component id={fieldName} {...extraProps} onChange={this.onChange} value={value}>
        {this.props.children}
      </Component>
    );
  }
}

FormControl.propTypes    = {
  name        : PropTypes.string.isRequired,
  type        : PropTypes.string.isRequired,
  required    : PropTypes.bool,
  placeholder : PropTypes.string,
  description : PropTypes.any,
  component   : PropTypes.any,
  onChange    : PropTypes.func,
  fieldArray  : PropTypes.any,
};
FormControl.defaultProps = {
  type     : 'text',
  required : false,
};

FormControl = withContextFormConsumer(FormControl);
FormControl = withFormFieldArrayConsumer(FormControl);
FormControl = withContextFormThemeConsumer(FormControl);

export default FormControl;
