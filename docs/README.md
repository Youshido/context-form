# Context Form

> Form Management for React & React Native with a simple and flexible API. Demo: [https://youshido.github.io/context-form/demo/](https://youshido.github.io/context-form/demo/)

Thanks to the Context API \(as of [React 16.3](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)\) it is possible to write a library for the Form Management with a very clean and almost invisible API where you don't have to pass Form's `props` all over your project.

## Main Features

* Declarative API with no need for extra props passing
* InitialValues as a simple prop to the `<Form initialValues={} />`
* Controlled and Uncontrolled Form State
* Field Arrays and Groups with custom JSX/Fields structure
* Easy to implement Custom Controls
* Support for the complex JSX structure inside the Form
* Themes support — implement project-wide styling in a single file
* Ready to go integrations with Bootstrap, Ant and Material UI
* It's just fun to use :party:

## Installation

Add `context-form` package to your project using `yarn` or `npm`:

```bash
$ yarn add context-form (or npm i context-form)
```

Once you installed Context Form as a dependency you can try it out with this basic example of the uncontrolled form \(note, it uses `console` to log the values submitted and does automatic field validation for a `title` field \(`required` is just a shortcut for the more extensive `rules` props\):

```jsx
import React, { Component } from 'react';
import Form, { Field, FormFooter } from 'context-form';

class ProductPage extends Component {
    /**
     * By default `onSubmit` will be called only if validation
     */
    onSubmit = ({ values }) => {
        console.log('Form Values', values);
    };
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Field name="firstName" />
                <Field name="lastName" />
                <Field name="title" required />
                // FormFooter is used for styling purposes only
                <FormFooter>
                    <button>Submit</button>
                </FormFooter>
            </Form>
        )
    }
}
```

```jsx
===example-overview===
```

You can now take a look at the more advances usage in the next chapter

{% page-ref page="guides/basic-form.md" %}

