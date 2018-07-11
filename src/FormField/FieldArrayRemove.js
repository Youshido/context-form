import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FieldArrayContext from '../Context/FieldArrayContext';

class FieldArrayRemove extends Component {
  render() {
    const { component : Button, ...restProps } = this.props;

    return (
      <FieldArrayContext.Consumer>
        {arrayField => arrayField.count > arrayField.minCount && (
          <Button type={'button'} onClick={() => arrayField.removeGroup(arrayField.index)} {...restProps}>
            {this.props.children}
          </Button>
        )}
      </FieldArrayContext.Consumer>
    );
  }
}

FieldArrayRemove.propTypes = {
  component : PropTypes.func
};

FieldArrayRemove.defaultProps = {
  component : props => <button {...props} />
};

export default FieldArrayRemove;
