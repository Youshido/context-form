import React, { Component } from 'react';
import { withContextForm } from '../../../src';
import { Field, Form, FormFooter } from '../../../src/index';
import { SubmissionResult } from '../utils/helpers';

class MountableRequired extends Component {

  state = {
    values : null,
    lastNameShown: true,
  };

  onSubmit = () => {
    this.props.contextForm.getForm('mountForm').validateFields().then((result) => {
      console.log('res', result);
    });
  };

  hideSubmission = () => {
    this.setState({ values : null });
  };

  render() {
    const { lastNameShown } = this.state;

    return (
      <Form onSubmit={this.onSubmit} layout='vertical' name={'mountForm'}>
        <Field name={'hiddenName'} type={'checkbox'} onChange={(value) => {
          this.setState({ lastNameShown: !value })
        }}/>
        <Field name={'firstName'} placeholder={'e.g. Alex'} required autoComplete={true} />
        {lastNameShown && <Field name={'lastName'} placeholder={'e.g. Malcovich'} required/>}
        <FormFooter>
          <button type={'button'} onClick={this.onSubmit}>Submit</button>
          <SubmissionResult values={this.state.values} hideSubmission={this.hideSubmission} />
        </FormFooter>
      </Form>
    );
  }
}

export default withContextForm(MountableRequired);
