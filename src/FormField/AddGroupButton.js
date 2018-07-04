import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormContext from '../Context/FormContext';
// import PropTypes from 'prop-types';

class AddGroupButton extends Component {
  render() {
    return (
      <FormContext.Consumer>
        {form => <button type={'button'} onClick={() => form.addFieldArray(this.props.name)} {...this.props}>{this.props.children}</button>}
      </FormContext.Consumer>
    );
  }
}

AddGroupButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AddGroupButton;
