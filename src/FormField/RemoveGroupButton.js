import React, { Component } from 'react';
import FormFieldArrayContext from '../Context/FormFieldArrayContext';

class RemoveGroupButton extends Component {
  render() {
    return (
      <FormFieldArrayContext.Consumer>
        {arrayField => <button type={'button'} onClick={() => arrayField.removeGroup(arrayField.index)} {...this.props}>{this.props.children}</button>}
      </FormFieldArrayContext.Consumer>
    );
  }
}

RemoveGroupButton.propTypes = {};

export default RemoveGroupButton;
