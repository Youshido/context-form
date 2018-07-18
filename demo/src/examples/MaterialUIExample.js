import React, { Component } from 'react';
import Form, {
  Field,
  FormFooter,
  ContextFormProvider,
} from '../../../src/index';
import { Button } from '@material-ui/core';
import MaterialUITheme, { withMaterialUITheme } from '../themes/MaterialUITheme';
import { SubmissionResult } from '../utils/helpers';

class MaterialUIExample extends Component {

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
      <ContextFormProvider theme={MaterialUITheme}>
        <Form onSubmit={this.onSubmit}>
          <Field name={'firstName'} placeholder={'e.g. Alex'} required/>
          <Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
          <FormFooter>
            <Button color="primary" variant="contained" type="submit">Submit</Button>
            <SubmissionResult values={this.state.values} />
          </FormFooter>
        </Form>
        <Form onSubmit={this.onSubmit} layout='horizontal'>
          <Field name={'firstName'} placeholder={'e.g. Alex'} required/>
          <Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
          <FormFooter>
            <Button color="primary" variant="contained" type="submit">Submit</Button>
            {!!this.state.values &&
            <pre style={{ marginTop : 20, marginBottom : 0 }}
                 onClick={this.hideSubmission}>Submission:{JSON.stringify(this.state.values)}</pre>
            }
          </FormFooter>
        </Form>        
      </ContextFormProvider>
    );
  }
}

export default withMaterialUITheme(MaterialUIExample);
