# Remote Submit

Someitmes you might need to have a `Submit` button placed outside of the `Form` itself, like for custom steps forms or for a fixed static toolbars that are tied to the top or to the bottom to the page. Example below demonstrates how to access a specific `Form` instance throught the `Context API` using `withContextForm` HOC:

```jsx
import React, { Component } from 'react';
import { Form, Field, withContextForm } from 'context-form';
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
    // using contextForm props to get the form instance
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
        // specifying the name for the form to access this form later
        <Form onSubmit={this.onSubmit} name={'profile'}>
          <Field name={'firstName'} placeholder={'e.g. Alex'} required/>
          <Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
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

```

