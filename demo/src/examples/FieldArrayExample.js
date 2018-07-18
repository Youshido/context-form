import React, { Component } from 'react';
import Form, {
  Field,
  FieldInput,
  FieldArray,
  FieldArrayContext,
} from '../../../src/index';
import { DefaultFooter } from '../utils/helpers';

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
      <Form onSubmit={this.onSubmit} layout='horizontal'>
        <Field name={'name'} placeholder={'e.g. Alex'}/>
        <button type={'button'} onClick={() => this.setState({ initialCount : 3 })}>Change Initial Count</button>
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
        <DefaultFooter values={this.state.values} hideSubmission={this.hideSubmission}/>
      </Form>
    );
  }
}
