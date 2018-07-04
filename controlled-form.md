# Controlled Form

If you want to have a Controlled Form you simply need to pass `values props and the onChange props`

```jsx
// declare state
state = {
    values: {}
};

//implement onChange handler
onChange = (name, value) => {
    this.setState({
        ...this.state.values
    });
}

// render form with values and onChange handler
<Form values={this.state.values} onChange=(this.onChange)>
    <FormField name="firstName" />
</Form>
```

