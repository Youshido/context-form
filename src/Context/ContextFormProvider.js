import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContextFormValidator from '../Validator/ContextFormValidator';
import SimpleTheme from '../Theme/SimpleTheme/SimpleTheme';
import ContextFormContext from './ContextFormContext';

class ContextFormProvider extends Component {

  forms = {};

  registerForm = (name, instance) => {
    this.forms[name] = instance;
  };

  getForm = name => this.forms[name];

  render() {
    return (
      <ContextFormContext.Provider value={{
        theme: this.props.theme,
        validator: this.props.validator,
        registerForm: this.registerForm,
        getForm: this.getForm,
      }}>
        {this.props.children}
      </ContextFormContext.Provider>
    );
  }
}

ContextFormProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  validator: PropTypes.any,
};
ContextFormProvider.defaultProps = {
  theme: SimpleTheme,
  validator: ContextFormValidator,
};

export default ContextFormProvider;
