import React, { Component } from 'react';
import Form, {
  Field,
  FieldInput,
  FieldArray,
  FieldArrayContext,
} from '../../../src/index';
import { DefaultFooter } from '../utils/helpers';

const initialValues = {
  firstName: 'Johnny',
  movies : [{
    nameRequired : true,
    name         : ''
  }]
};

export default class FieldArrayDynamicExample extends Component {
  state = {
    values       : null,
    initialCount : 1,
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
      <Form onSubmit={this.onSubmit} initialValues={initialValues}>
        <h3>API Controls:</h3>
        <hr />
        <button type={'button'} onClick={() => this.setState({ initialCount : 3 })}>Set initialCount = 3</button>
        <hr />
        <h3>Form:</h3>
        <Field name={'firstName'} placeholder={'e.g. John'} required={true}/>
        <Field name={'name'} placeholder={'e.g. John Doe'} required={true}/>
        <div style={{ margin : '10px 0' }}>Favorite Movies:</div>
        <FieldArray name={'movies'} initialCount={this.state.initialCount}>
          <FieldArrayContext.Consumer>
            {fieldArray => <React.Fragment>
              <div style={{ display : 'flex', alignItems : 'center', marginTop : 5 }}>
                <span style={{
                  width : 100,
                  color: fieldArray.hasError('name') ? 'red' : 'black'
                }}>Movie #{fieldArray.index}:</span>
                <FieldInput name={'name'} style={{ width : 200 }} required={fieldArray.getValue('nameRequired')}/>
                <FieldArray.Remove>X</FieldArray.Remove>
              </div>
              <div style={{ display : 'flex', alignItems : 'center', marginTop : 5 }}>
                <span style={{ width : 100 }}>Required:</span>
                <FieldInput type={'checkbox'} name={'nameRequired'} />
              </div>
            </React.Fragment>}
          </FieldArrayContext.Consumer>
        </FieldArray>
        <FieldArray.Add name={'movies'} style={{ marginLeft : 100, marginTop : 10}}>+ Add Movie</FieldArray.Add>
        <DefaultFooter values={this.state.values} hideSubmission={this.hideSubmission}/>
      </Form>
    );
  }
}
