import React, { Component } from 'react';
import {
  Form,
  FormField,
  FormFooter,
} from '../../../src/index';
import { Button } from 'react-bootstrap';

export default class FieldValidation extends Component {

  state = {
    values : null,
  };

  /**
   * Returns true or an error message or false/null to use standard error message
   */
  validateAge = (value) => {
    if (!value) {
      return 'You have to type in your age!';
    } else if (value < 18) {
      return 'Sorry kid, you are too young!';
    } else if (value > 65) {
      return 'Nah grandpa, you watch TV tonight';
    }
    return true;
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
        <FormField name="name" required="We need to know your name!"/>
        <FormField name="title" rules={[{ required : true, message: 'Title is very important!' }]}/>
        <FormField name="age"
                   rules={[this.validateAge]}
                   description="You need to be between 18 and 65."/>
        <FormFooter>
          <Button bsStyle="primary" type={'submit'} style={{ marginLeft : 10 }}>Submit</Button>
          {!!this.state.values &&
          <pre style={{ marginTop : 20, marginBottom : 0 }}
               onClick={this.hideSubmission}>Submission:{JSON.stringify(this.state.values)}</pre>
          }
        </FormFooter>
      </Form>
    );
  }
}
