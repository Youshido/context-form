# Form Level Validation

Form Level validation might be useful when you have a complex validation logic, for example if the validity of one field depends on the value of another one, etc. 

In order to enable Form validation you have to provide a `validate` prop on the `Form` component.  
Here's the same example we have in the [Field Validation](field-validation.md) guide re-writen to work on a Form level:

```jsx
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Field, FormFooter } from 'context-form';

class FormValidationExample extends Component {
  state = {
    values : null,
  };

  validateAge = (value) => {
    let error = undefined;
    if (!value) {
      error = 'You have to type in your age!';
    } else if (value < 18) {
      error = 'Sorry kid, you are too young!';
    } else if (value > 65) {
      error = 'Nah grandpa, you watch TV tonight';
    }
    return error;
  };

  validateTitle = (value) => value ? undefined : { message: 'Title is very important!' };
  validateName = (value) => value ? undefined : { message: 'Name is required!' };

  validateForm = (values) => {
    const errors = {
      age: this.validateAge(values.age),
      title: this.validateTitle(values.title),
      name: this.validateName(values.name),
    };

    return { errors };
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
      <Form onSubmit={this.onSubmit} horizontal validate={this.validateForm}>
        <Field name="name" />
        <Field name="title" />
        <Field name="age" description="You need to be between 18 and 65."/>
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

export default FormValidationExample;

```

```jsx
===example-formValidation===
```

