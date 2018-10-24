import React, { Component } from 'react';
import Form, {
  Field,
  FieldInput,
  FieldArray,
} from '../../../src/index';
import { DefaultFooter } from '../utils/helpers';

export default class FieldArrayDynamicExample extends Component {
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
      <Form onSubmit={this.onSubmit}>
        <h3>API Controls:</h3>
        <hr />
        <button type={'button'} onClick={() => this.setState({ initialCount : 3 })}>Set initialCount = 3</button>
        <hr />
        <h3>Form:</h3>
        <Field name={'name'} placeholder={'e.g. Alex'}/>
        <div style={{ margin : '10px 0' }}>Favorite Movies:</div>
        <FieldArray name={'movies'} initialCount={this.state.initialCount}>
          <div style={{ display : 'flex', alignItems : 'center', marginTop : 5 }}>
            <span style={{ width : 100 }}>Movie #<FieldArray.Index/>:</span>
            <FieldInput name={'name'} style={{ width : 200 }}/>
            <FieldArray.Remove>X</FieldArray.Remove>
          </div>
        </FieldArray>
        <FieldArray.Add name={'movies'} style={{ marginLeft : 100, marginTop : 10}}>+ Add Movie</FieldArray.Add>
        <DefaultFooter values={this.state.values} hideSubmission={this.hideSubmission}/>
      </Form>
    );
  }
}
