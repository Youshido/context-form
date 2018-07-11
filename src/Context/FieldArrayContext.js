import React, { Component, createContext } from 'react';

const FormFieldArrayContext = createContext();

export const withFormFieldArrayConsumer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <FormFieldArrayContext.Consumer>
          {fieldArray => <WrappedComponent {...this.props} fieldArray={fieldArray}/>}
        </FormFieldArrayContext.Consumer>
      );
    }
  };
};

export default FormFieldArrayContext;
