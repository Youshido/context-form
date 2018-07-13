# Field Validation

> Validation rules for a signle field

Single Field's validations can be set right in the `rules` props

```jsx
import React, { Component } form 'react';
import Form, { Field } from 'context-form';

class BasicForm extends Component {

    /**
     * Returns true or an error message or false/null to use standard error message
     */
    validateAge = (value) => {
        if (value < 18) {
            return "Sorry kid, you are too young!";
        } else if (Value > 65) {
            return "Nah grandpa, you watch TV tonight";
        }
        return undefined;
    }

    onSubmit = ({ values }) => {
        console.log('Submitting Values', values);
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Field name="name" />
                <Field name="age" 
                    rules={[this.validateAge]}
                    description="You need to be between 18 and 65."/>
                <button type="submit">Submit</button>
            </Form>
        )
    }
}
```

```jsx
===example-fieldValidation===
```

