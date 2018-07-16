import React, { Component } from 'react';
import Form, {
  Field,
  FieldInput,
  FieldArray,
  FieldArrayContext,
  FormFooter,
} from '../../../src/index';
import { Button } from 'react-bootstrap';

export default class FieldArrayExample extends Component {

  state = {
    values       : null,
    initialCount : 2,
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
        <Field name={'name'} placeholder={'e.g. Alex'}/>
        <button type={'button'} onClick={() => this.setState({ initialCount: 3 })}>Change Initial Count</button>
        <div className="row">
          <div className="col-md-3">Favorite Movies:</div>
          <div className="col-md-9">
            <FieldArray name={'movies'} initialCount={this.state.initialCount}>
              <FieldArrayContext.Consumer>
                {fieldArray => (
                  <div style={{ display : 'flex' }}>
                    <span>{`Movie #${fieldArray.index + 1}`}:</span>
                    <FieldInput name={'name'} style={{ width : 200 }}/>
                    <FieldArray.Remove>Remove</FieldArray.Remove>
                  </div>
                )}
              </FieldArrayContext.Consumer>
            </FieldArray>
            <FieldArray.Add name={'movies'}>+ Add Movie</FieldArray.Add>
          </div>
        </div>
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
