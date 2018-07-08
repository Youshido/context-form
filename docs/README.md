# Context Form

> React Form management with no weird code.

## Features Support

* [x] Declarative API with no need for extra HOCs
* [x] InitialValues as a simple props to the &lt;Form&gt;
* [x] Controlled and Uncontrolled Form State
* [x] Dependend Field Values \(e.g. State, based on Country\)
* [x] Custom Controls
* [x] Support for the complex JSX structure inside the Form \(thanks to the Context API\)
* [x] Field Arrays and Groups with custom JSX/Fields structure
* [x] Themes support — implement project-wide styling in a single file
* [ ] Ready to go integrations with Bootstrap, Ant and Material UI

## Installation

Adding Context Form to your project is a fairly straight forward process:

```
$ yarn add context-form (or npm i context-form)
```


>If you just want to see a demo — look at https://context-form.github.io/demo/

Once you installed Context Form as a dependency you can start creating forms without any hussle of using extra props or HOCs.

Here's the most simple and minimalistic example of the form:

```jsx
import React, { Component } from 'react';
import { Form, FormField, FormFooter } from 'context-form';

class ProductPage extends Component {
    onSubmit = ({ values }) => {
        console.log('Form Values', values);
    };
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormField name="firstName" />
                <FormField name="lastName" />
                <FormField name="email" required={true} />
                <FormFooter>
                    <button>Submit</button>
                </FormFooter>
            </Form>
        )
    }
}
```


