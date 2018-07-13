# Basic Form

> A basic form with a `required` field validation:

Import the Form and Field components and watch out for the console to see the values:

```jsx
import React, { Component } form 'react';
import Form, { Field } from 'context-form';

class BasicForm extends Component {
    onSubmit = ({ values }) => {
        console.log('Submitting Values', values);
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Field name="firstName" />
                <Field name="lastName" />
                <button type="submit">Submit</button>
            </Form>
        )
    }
}
```

```jsx
===example-basic===
```

