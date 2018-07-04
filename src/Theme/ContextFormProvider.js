import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContextFormThemeContext from './ContextFormThemeContext';
import SimpleTheme from './SimpleTheme/SimpleTheme';

const defaultThemesMap = {
  'Simple': SimpleTheme
};

class ContextFormProvider extends Component {
  render() {
    let { theme } = this.props;
    if (typeof theme === 'string') {
      if (defaultThemesMap[theme]) {
        theme = defaultThemesMap[theme]
      } else {
        theme = {
          name: theme
        };
      }
    }

    return (
      <ContextFormThemeContext.Provider value={theme}>
        {this.props.children}
      </ContextFormThemeContext.Provider>
    );
  }
}

ContextFormProvider.propTypes    = {
  theme : PropTypes.any
};
ContextFormProvider.defaultProps = {
  theme : 'simple'
};

export default ContextFormProvider;
