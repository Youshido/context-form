import React, { Component, createContext } from 'react';

const ContextFormInstanceContext = createContext();

export const withContextFormInstanceConsumer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <ContextFormInstanceContext.Consumer>
          {form => <WrappedComponent {...this.props} form={form}/>}
        </ContextFormInstanceContext.Consumer>
      );
    }
  };
};

export default ContextFormInstanceContext;
