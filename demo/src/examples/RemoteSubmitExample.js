import React, { Component } from 'react';
import Form, {
  FormFooter,
  withContextForm,
} from '../../../src/index';
import { Button } from 'react-bootstrap';

class RemoteSubmitExample extends Component {
  state = {
    values : null,
  };

  onSubmit = ({ values }) => {
    console.log('Submitting Values', values);
    this.setState({
      values,
    });
  };

  remoteSubmit = () => {
    this.props.contextForm.getForm('profile').submit();
  };

  hideSubmission = () => {
    this.setState({ values : null });
  };

  render() {
    return (
      <div>
        <h4>Submission outside of Form component</h4>
        <hr/>
        <div className='row'>
          <div className='col-md-9 col-md-offset-3'>
            <h4>Separate Component:</h4>
            <Button bsStyle="danger" onClick={this.remoteSubmit}>Remote Submit</Button>
          </div>
        </div>
        <hr/>
        <Form onSubmit={this.onSubmit} name={'profile'}>
          <Form.Field name={'firstName'} placeholder={'e.g. Alex'} required/>
          <Form.Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
          <FormFooter>
            <Button bsStyle="primary" type={'submit'} style={{ marginLeft : 10 }}>Submit</Button>
            {!!this.state.values &&
            <pre style={{ marginTop : 20, marginBottom : 0 }}
                 onClick={this.hideSubmission}>Submission:{JSON.stringify(this.state.values)}</pre>
            }
          </FormFooter>
        </Form>
      </div>
    );
  }
}

RemoteSubmitExample = withContextForm(RemoteSubmitExample);

export default RemoteSubmitExample;
