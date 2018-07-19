import React, { Component } from 'react';
import Form, {
  Field,
  FormFooter,
  ContextFormProvider,
} from '../../../src/index';
import { Button, Divider, Paper, Card, CardContent } from '@material-ui/core';
import MaterialUITheme, { withMaterialUITheme } from '../themes/MaterialUITheme';
import { SubmissionResult } from '../utils/helpers';

class MaterialUIExample extends Component {

  state = {
    valuesForm1 : null,
    valuesForm2 : null,
  };

  onSubmitForm1 = ({ values: valuesForm1 }) => {
    this.setState({
      valuesForm1,
    });
  };

  onSubmitForm2 = ({ values: valuesForm2 }) => {
    this.setState({
      valuesForm2,
    });
  };

  hideSubmission = () => {
    this.setState({ valuesForm2 : null, valuesForm1 : null });
  };

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

  render() {
    return (
      <ContextFormProvider theme={MaterialUITheme}>
        <h3 style={{ marginTop : 50 }}>Vertical Form Example</h3>
        <Card>
          <CardContent>
            <Form onSubmit={this.onSubmitForm1} name='form1'>
              <Field name={'firstName'} placeholder={'e.g. Alex'} required description='Enter your First Name'/>
              <Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
              <FormFooter>
                <Button color='primary' variant='contained' type='submit'>Submit</Button>
                <SubmissionResult values={this.state.valuesForm1} hideSubmission={this.hideSubmission} />
              </FormFooter>
            </Form>
          </CardContent>
        </Card>
        <h3 style={{ marginTop : 50 }}>Horizontal Form Example</h3>
        <Card>
          <CardContent>
            <Form onSubmit={this.onSubmitForm2} layout='horizontal' name='form2'>
              <Field name={'firstName'} placeholder={'e.g. Alex'} required/>
              <Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
              <Field name='age'
                rules={[this.validateAge]}
                description='You need to be between 18 and 65.'/>
              <FormFooter>
                <Button color='primary' variant='contained' type='submit'>Submit</Button>
              </FormFooter>
              <SubmissionResult values={this.state.valuesForm2} hideSubmission={this.hideSubmission}/>
            </Form>        
          </CardContent>
        </Card>
      </ContextFormProvider>
    );
  }
}

export default withMaterialUITheme(MaterialUIExample);
