# Controlled Form

> When you need to store the values of the form in some other place or in a parent component

Every Form can take a `values: PropTypes.object` prop and `onChange: function(change: Object)` prop which would receive the changes you can use to update the state:

_Note that in this case values will also work as initialValues for the form_

```jsx
import React, { Component } form 'react';
import Form, { Field } from 'context-form';

class BasicForm extends Component {

    const state = {
        values: {
            title: 'React Developer',
        }
    };

    onSubmit = ({ values }) => {
        console.log('Submitting Values', values);
    };

    onChange = (change) => {
        console.log('Form onChange', change);
        this.setState({
            ...this.state.values,
            ...change
        });
    };

    render() {
        const { values } = this.state;

        return (
            <Form
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={values}
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

