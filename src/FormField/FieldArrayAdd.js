import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextFormInstanceContext from '../Context/ContextFormInstanceContext';

class FieldArrayAdd extends Component {
  render() {
    const { component: Button, ...restProps } = this.props;
    return (
      <ContextFormInstanceContext.Consumer>
        {form => <Button type={'button'}
                         onClick={() => form.addFieldArray(this.props.name)}
                         {...restProps}>
          {this.props.children}
        </Button>}
      </ContextFormInstanceContext.Consumer>
    );
  }
}

FieldArrayAdd.propTypes = {
  name      : PropTypes.string.isRequired,
  component : PropTypes.func,
};

FieldArrayAdd.defaultProps = {
  component : props => <button {...props} />,
}
;

export default FieldArrayAdd;
