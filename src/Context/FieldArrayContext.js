import React, { Component, createContext } from 'react';

const FieldArrayContext = createContext();

export const withFormFieldArrayConsumer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <FieldArrayContext.Consumer>
          {fieldArray => <WrappedComponent {...this.props} fieldArray={fieldArray}/>}
        </FieldArrayContext.Consumer>
      );
    }
  };
};

export default FieldArrayContext;
