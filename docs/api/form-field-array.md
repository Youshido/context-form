# form-field-array

Form Field Array comes handy when you need to have an array value in your form, e.g. list of countires you've traveled to, or a list of previous job experience. It can handle arrays of objects, so if you want to have a list of countries you've visited and the year in which that has happened — you can:

```jsx
<Form>
    <Field name="firstName" />
    <Field name="lastName" />
    <FieldArray name="travel_experience">
        <Field name="country" />
        <Field name="year" />
    </FieldArray>
</Form>
```

Now, of course you need controls to Add or Remove items from your list, for that you can use helper components `FieldArray.Add` and `FieldArray.Remove`:

```jsx
<Form>
    <Field name="firstName" />
    <Field name="lastName" />
    <FieldArray.Add name="travel_experience">+Add Entry</FieldArray.Add>
    <FieldArray name="travel_experience">
        <Field name="country" />
        <Field name="year" />
        <FieldArray.Remove>Remove</FieldArray.Remove>
    </FieldArray>
</Form>
```

