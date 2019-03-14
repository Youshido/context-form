import React, { Component } from 'react';
import Form from '../../../src';
import Field from '../../../src/FormField/Field';
import { DefaultFooter } from '../utils/helpers';

class FormValidationExample extends Component {

  state = {
    values : null,
  };

  validateAge = (value) => {
    let error = undefined;
    if (!value) {
      error = 'You have to type in your age!';
    } else if (value < 18) {
      error = 'Sorry kid, you are too young!';
    } else if (value > 65) {
      error = 'Nah grandpa, you watch TV tonight';
    }
    return error;
  };

  validateTitle = (value) => value ? undefined : { message: 'Title is very important!' };
  validateName = (value) => value ? undefined : { message: 'Name is required!' };

  validateForm = (values) => {
    const errors = {
      age: this.validateAge(values.age),
      title: this.validateTitle(values.title),
      name: this.validateName(values.name),
    };

    return { errors };
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
      <Form onSubmit={this.onSubmit} validate={this.validateForm} layout='horizontal'>
        <Field name='name' />
        <Field name='title' />
        <Field name='age' description='You need to be between 18 and 65.'/>
        <DefaultFooter values={this.state.values} hideSubmission={this.hideSubmission}/>
      </Form>
    );
  }
}

export default FormValidationExample;
