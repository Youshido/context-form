import React, { Component, createContext } from 'react';

const FormContext = createContext();

export const withContextFormConsumer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <FormContext.Consumer>
          {form => <WrappedComponent {...this.props} form={form}/>}
        </FormContext.Consumer>
      );
    }
  };
};

export default FormContext;
