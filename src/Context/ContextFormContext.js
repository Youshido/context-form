import React, { Component, createContext } from 'react';

const ContextFormContext = createContext({});

export const withContextForm = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <ContextFormContext.Consumer>
          {contextForm => <WrappedComponent {...this.props} contextForm={contextForm}/>}
        </ContextFormContext.Consumer>
      );
    }
  };
};


export default ContextFormContext;
