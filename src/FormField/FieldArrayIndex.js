import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FieldArrayContext from '../Context/FieldArrayContext';

class FieldArrayIndex extends Component {
  render() {
    return (
      <FieldArrayContext.Consumer>
        {fieldArray => fieldArray.index + this.props.startFrom}
      </FieldArrayContext.Consumer>
    );
  }
}

FieldArrayIndex.propTypes = {
  startFrom : PropTypes.number,
};

FieldArrayIndex.defaultProps = {
  startFrom : 1,
};

export default FieldArrayIndex;
