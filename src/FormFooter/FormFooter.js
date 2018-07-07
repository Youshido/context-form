import React, { Component } from 'react';
import { withContextFormInstanceConsumer } from '../Context/ContextFormInstanceContext';

class FormFooter extends Component {
  render() {
    const { Footer } = this.props.form.getTheme();

    return (
      <Footer>
        {this.props.children}
      </Footer>
    );
  }
}

FormFooter.propTypes = {};

FormFooter = withContextFormInstanceConsumer(FormFooter);

export default FormFooter;
