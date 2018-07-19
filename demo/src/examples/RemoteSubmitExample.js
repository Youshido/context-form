import React, { Component } from 'react';
import Form, { withContextForm } from '../../../src/index';
import { DefaultFooter } from '../utils/helpers';

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
      <div className='context-form-theme-simple'>
        <h3>Separate Component:</h3>
        <button onClick={this.remoteSubmit}>Remote Submit</button>
        <hr/>
        <Form onSubmit={this.onSubmit} name={'profile'}>
          <Form.Field name={'firstName'} placeholder={'e.g. Alex'} required/>
          <Form.Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
          <DefaultFooter values={this.state.values} hideSubmission={this.hideSubmission}/>
        </Form>
      </div>
    );
  }
}

RemoteSubmitExample = withContextForm(RemoteSubmitExample);

export default RemoteSubmitExample;
