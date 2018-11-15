import * as React from "react";

export interface ContextFormProps {
  name?: string
  className?: string
  onSubmit?: Function
}

export interface FormFieldProps {
  name: string
  type?: string
  className?: string
  placeholder?: string
  required?: boolean
  description?: string
  component?: any
  onChange?: (value: any) => void
}

export interface ContextFormProviderProps {
  theme?: any
}

export interface ContextFormContextInterface {
  submit: Function
}

export interface WithContextFormProps {
  contextForm: ContextFormContextInterface
  getValue: (name: string) => any
  getErrors: Function
  errors: any[]
}

declare function humanizeName(name: string): string;
declare function withContextForm<T>(component: React.Component): React.Component<T & WithContextFormProps>
declare function withContextFormInstanceConsumer<T>(component: React.Component): React.Component<T & WithContextFormProps>

declare class ContextFormProvider extends React.Component<ContextFormProviderProps, any> {}
declare class Field extends React.Component<FormFieldProps, any> {}
declare class FieldInput extends React.Component<FormFieldProps, any> {}
declare class FormFooter extends React.Component<{}, any> {}

declare class Form extends React.Component<ContextFormProps, any> {
  static Field: Field;
}

export default Form;
export {
  Field,
  FieldInput,
  FormFooter,
  ContextFormProvider,
  withContextFormInstanceConsumer,
  humanizeName,
  withContextForm
}