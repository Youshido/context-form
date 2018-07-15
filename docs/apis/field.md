# field

`Field` is the main component you can use with the `Form`. It has a lot of default props so for the simple text field you just need to define the name, the rest will happen automatically.

Basically this shorthand code:

```jsx
<Field name="firstName"/>
```

is equvalent to:

```jsx
<Field name="firstName" label="First Name" type="text" />
```

| Name | Description | Default |
| --- | --- | --- | --- |
| name | Required. Name of the field in the form. It is also being used to detect the value from the `initialValues` props on the form. | - |
| label | Displayed next to the field \(based on the Theme\) and if not provided — automatically detected by inflection \(e.g. firstName -&gt; First Name, last-name -&gt; Last Name, etc.\)_Note: You can change this behaviour on the Form level or on the Theme level by providing autoLabels=false. You can also turn it off for a specific Field by providing_ `label={false}`_._ | - |
|  |  |  |

