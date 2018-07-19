import React, { Component } from 'react';
import { Field, Form, FormFooter } from '../../../src/index';
import { SubmissionResult } from '../utils/helpers';

class BasicFormExample extends Component {

  state = {
    values : null,
  };

  onSubmit = ({ values }) => {
    this.setState({
      values,
    });
  };

  hideSubmission = () => {
    this.setState({ values : null });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} layout='vertical'>
        <Field name={'firstName'} placeholder={'e.g. Alex'} required/>
        <Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
        <FormFooter>
          <button type={'submit'}>Submit</button>
          <SubmissionResult values={this.state.values} hideSubmission={this.hideSubmission} />
        </FormFooter>
      </Form>
    );
  }
}

export default BasicFormExample;
