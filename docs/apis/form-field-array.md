# &lt;FormFieldArray /&gt;

Form Field Array comes handy when you need to have an array value in your form, e.g. list of countires you've traveled to, or a list of previous job experience. It can handle arrays of objects, so if you want to have a list of countries you've visited and the year in which that has happened — you can:

```jsx
<Form>
    <FormField name="firstName" />
    <FormField name="lastName" />
    <FormFieldArray name="travel_experience">
        <FormField name="country" />
        <FormField name="year" />
    </FormFieldArray>
</Form>
```

Now, of course you need controls to Add or Remove items from your list, for that you can use helper components `AddFieldGroup` and`RemoveFieldGroup`:

```jsx
<Form>
    <FormField name="firstName" />
    <FormField name="lastName" />
    <AddFieldGroup name="travel_experience">+Add Entry</AddFieldGroup>
    <FormFieldArray name="travel_experience">
        <FormField name="country" />
        <FormField name="year" />
        <RemoveFieldGroup>Remove</RemoveFieldGroup>
    </FormFieldArray>
</Form>
```

