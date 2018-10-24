import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContextFormInstanceConsumer } from '../Context/ContextFormInstanceContext';
import { withFormFieldArrayConsumer } from '../Context/FieldArrayContext';
import { withContextForm } from '../Context/ContextFormContext';

class FieldInput extends Component {

  componentDidMount() {
    console.log('Mount',this.props.name,  this.props);
  };

  componentWillUnmount() {
    console.log('UnMount', this.props.name, this.props.fieldArray);

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
    const { name, component, form, contextForm, fieldArray, ...extraProps } = this.props;

    const Component = component || contextForm?.theme?.types[this.props.type]?.component;
    if (!Component) {
      console.error('[context-form]: Invalid type', this.props.type);
      return null;
    }

    let value     = this.props.value;
    const id = this.props.id || form?.getName() + '-' + name;
    if (form) {
      if (fieldArray) {
        value = fieldArray.getValue(name, fieldArray.index);
      } else {
        value = form.getValue(name);
      }
    }
    return (
      <Component id={id} name={name} {...extraProps} onChange={this.onChange} value={value}>
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
