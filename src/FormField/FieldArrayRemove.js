import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormFieldArrayContext from '../Context/FormFieldArrayContext';

class RemoveGroupButton extends Component {
  render() {
    const { component : Button, ...restProps } = this.props;

    return (
      <FormFieldArrayContext.Consumer>
        {arrayField => arrayField.count > arrayField.minCount && (
          <Button type={'button'} onClick={() => arrayField.removeGroup(arrayField.index)} {...restProps}>
            {this.props.children}
          </Button>
        )}
      </FormFieldArrayContext.Consumer>
    );
  }
}

RemoveGroupButton.propTypes = {
  component : PropTypes.func
};

RemoveGroupButton.defaultProps = {
  component : props => <button {...props} />
};

export default RemoveGroupButton;
