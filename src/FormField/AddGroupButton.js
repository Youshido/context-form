import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormContext from '../Context/FormContext';

// import PropTypes from 'prop-types';

class AddGroupButton extends Component {
  render() {
    const { component: Button, ...restProps } = this.props;
    return (
      <FormContext.Consumer>
        {form => <Button type={'button'}
                         onClick={() => form.addFieldArray(this.props.name)}
                         {...restProps}>
          {this.props.children}
        </Button>}
      </FormContext.Consumer>
    );
  }
}

AddGroupButton.propTypes = {
  name      : PropTypes.string.isRequired,
  component : PropTypes.func,
};

AddGroupButton.defaultProps = {
  component : props => <button {...props} />,
}
;

export default AddGroupButton;
