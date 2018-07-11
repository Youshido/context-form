# Basic Form

> A basic form with a `required` field validation:

Import the Form and FormField components and watch out for the console to see the values:

```jsx
import React, { Component } form 'react';
import { Form, FormField } from 'context-form';

class BasicForm extends Component {
    onSubmit = ({ values }) => {
        console.log('Submitting Values', values);
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormField name="firstName" />
                <FormField name="lastName" />
                <button type="submit">Submit</button>
            </Form>
        )
    }
}
```

```jsx
===example-basic===
```

