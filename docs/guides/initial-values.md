# Initial Values

> How to provide initial values into your Form when it's beign rendered for the first time

In order to initialize a form with initial values you simply need to pass over the relevant `initialValues`prop to the `<Form/>` component:

```jsx
import React, { Component } form 'react';
import Form, { Field } from 'context-form';

class BasicForm extends Component {
    onSubmit = ({ values }) => {
        console.log('Submitting Values', values);
    };

    render() {
        const initialValues = {
            firstName: 'John',
            lastName: 'Doe',
            title: 'React Developer',
        };

        return (
            <Form
                onSubmit={this.onSubmit}
                initialValues={initialValues}
            >
                <Field name="firstName" />
                <Field name="lastName" />
                <Field name="title" />
                <button type="submit">Submit</button>
            </Form>
        )
    }
}
```

