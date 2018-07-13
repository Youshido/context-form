import React, { Component } from 'react';
import {
  Form,
  Field,
  FormFooter,
} from '../../../src/index';
import { Button } from 'react-bootstrap';

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

export default OverviewFormExample;
