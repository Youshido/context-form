import React, { Component, createContext } from 'react';

const ContextFormThemeContext = createContext({});

export const withContextFormThemeConsumer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <ContextFormThemeContext.Consumer>
          {theme => <WrappedComponent {...this.props} contextFormTheme={theme}/>}
        </ContextFormThemeContext.Consumer>
      );
    }
  };
};

export default ContextFormThemeContext;

