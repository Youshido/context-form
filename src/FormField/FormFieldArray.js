import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withContextFormConsumer } from '../Context/FormContext';
import FormFieldArrayContext from '../Context/FormFieldArrayContext';

class FormFieldArray extends Component {

  state = {
    values : Array.from({ length : this.props.initialCount }, () => ({}))
  };

  constructor(props) {
    super(props);
    props.form.registerFieldArray(props.name, this);
  }

  updateValues = values => {
    this.setState({
      values
    }, this.props.form?.setValue(this.props.name, values));
  };

  setValue = (name, value, index) => {
    let values = this.state.values;
    if (!values[index]) {
      values[index] = {};
    }
    values[index][name] = value;
    this.updateValues(values);
  };

  getValue = (name, index) => {
    const groupValue = this.state.values[index];
    return groupValue ? groupValue[name] : undefined;
  };

  removeGroup = (index) => {
    const { values } = this.state;
    this.updateValues([...values.slice(0, index), ...values.slice(index + 1)]);
  };

  addGroup = () => {
    this.setState({
      values : [
        ...this.state.values,
        {}
      ]
    })
  };

  render() {

    const items = Array.from({ length : this.state.values.length }, (v, k) => k);
    return (
      <Fragment>
        {items.map(index => (
          <FormFieldArrayContext.Provider key={index} value={{
            getValue    : this.getValue,
            setValue    : this.setValue,
            removeGroup : this.removeGroup,
            index,
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
};

FormFieldArray.defaultProps = {
  initialCount : 1,
};

FormFieldArray = withContextFormConsumer(FormFieldArray);

export default FormFieldArray;
