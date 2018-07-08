# Basic Form Example

This is the most simple and straight forward example of the form.

## Creating Component
Import the Form and FormField components:
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