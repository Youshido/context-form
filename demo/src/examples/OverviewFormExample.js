import React, { Component } from 'react';
import { Field, Form } from '../../../src/index';
import { DefaultFooter } from '../utils/helpers';

class OverviewFormExample extends Component {

  state = {
    values : null,
  };

  onSubmit = ({ values }) => {
    console.log('Submitting Values', values);
    this.setState({
      values,
    });
  };

  hideSubmission = () => {
    this.setState({ values : null });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} horizontal>
        <Field name={'firstName'} placeholder={'e.g. Paul'}/>
        <Field name={'lastName'} placeholder={'e.g. Smith'}/>
        <Field name={'title'} placeholder={'e.g. Web Developer'} required/>
        <DefaultFooter values={this.state.values} hideSubmission={this.hideSubmission}/>
      </Form>
    );
  }
}

export default OverviewFormExample;
