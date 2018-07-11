import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withContextFormInstanceConsumer } from '../Context/ContextFormInstanceContext';
import FormFieldArrayContext from '../Context/FormFieldArrayContext';

class FormFieldArray extends Component {

  constructor(props) {
    super(props);
    props.form.registerFieldArray(props.name, this);
  }

  getFieldValues = () => this.props.form.values[this.props.name];
  setFieldValues = values => this.props.form?.setValue(this.props.name, values);

  setValue = (name, value, index) => {
    let values = this.getFieldValues();
    if (!values[index]) {
      values[index] = {};
    }
    values[index][name] = value;
    this.setFieldValues(values);
  };

  getValue = (name, index) => {
    const groupValue = this.getFieldValues()[index];
    return groupValue ? groupValue[name] : undefined;
  };

  removeGroup = (index) => {
    const values = this.getFieldValues();
    this.setFieldValues([...values.slice(0, index), ...values.slice(index + 1)]);
  };

  addGroup = () => {
    this.setFieldValues([
      ...this.getFieldValues() || [],
      {}
    ]);
  };

  render() {

    const values                     = this.getFieldValues() || [];
    const { initialCount, minCount } = this.props;

    const items = Array.from({ length : values.length }, (v, k) => k);
    return (
      <Fragment>
        {items.map(index => (
          <FormFieldArrayContext.Provider key={index} value={{
            getValue    : this.getValue,
            setValue    : this.setValue,
            removeGroup : this.removeGroup,
            count       : values.length,
            minCount,
            initialCount,
            index
          }}>
            {this.props.children}
          </FormFieldArrayContext.Provider>
        ))}
      </Fragment>
    );
  }
}

FormFieldArray.propTypes = {
  name         : PropTypes.string.isRequired,
  initialCount : PropTypes.number.isRequired,
  minCount     : PropTypes.number
};

FormFieldArray.defaultProps = {
  initialCount : 1,
  minCount     : 0
};

FormFieldArray = withContextFormInstanceConsumer(FormFieldArray);

export default FormFieldArray;
