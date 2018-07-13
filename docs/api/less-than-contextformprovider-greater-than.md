# &lt;ContextFormProvider /&gt;

> ContextFormProvider allows to set default Theme and Validator for all nested Forms and its Fields and Field Arrays.

Used to provide a configuration for all the nested `Forms` and its `Fields` and `Field Arrays`. Usually you would initialize it at the very top of your components hirerarchy in either `index.js` or `App.js` file:

```jsx
// ...
<ContextFormProvider theme={MaterialUI} validator={MyValidator}>
  <App />
</ContextFormProvider>
// ...
```

You can later override it for a specific scope inside your app if you need to change the look or behaviour of nested components on the deeper level of hierarchy of your application.

| Property | Definition | Default |
| --- | --- |
| theme | Defines the current theme | `SimpleTheme` |

