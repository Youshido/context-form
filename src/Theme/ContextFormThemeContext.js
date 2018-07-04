import React, { Component, createContext } from 'react';
import SimpleTheme from './SimpleTheme/SimpleTheme';

const ContextFormThemeContext = createContext({
  ...SimpleTheme
});

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

