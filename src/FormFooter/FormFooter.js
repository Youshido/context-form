import React, { Component } from 'react';
import { withContextFormConsumer } from '../Context/FormContext';

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

FormFooter = withContextFormConsumer(FormFooter);

export default FormFooter;
