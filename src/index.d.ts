import * as React from 'react';

export type OnSubmitResult = {
  values: Record<string, any>[]
}

export interface ContextFormProps {
  name?: string
  className?: string
  values?: object,
  onChange?: (value: any) => void
  onSubmit?: (res: OnSubmitResult) => void
  initialValues?: any
  validateOnSubmit?: boolean
  autoComplete?: boolean
}

export interface FormFieldProps {
  name: string
  type?: string
  className?: string
  placeholder?: string
  required?: boolean
  autoComplete?: boolean
  label?: string | any
  description?: string | any
  component?: any
  onChange?: (value: any) => void
  [x: string]: any
}

export interface ContextFormProviderProps {
  theme?: ThemeInterface
}

export interface ContextFormContextInterface {
  submit: Function
  getValue: (name: string) => any
  getErrors: Function
  getValues: Function
  addError: Function
  getId: () => string
  getName: () => string
  errors: any[]
}

export interface ThemeFieldInterface {
  Container: any,
  Label: any,
  InputContainer: any,
  Description: any,
  Errors: any,
}

export interface ThemeFieldTypeInterface {
  component: any,
}

export interface ThemeInterface {
  name: string,
  Form: any,
  Field: ThemeFieldInterface,
  Footer: any,
  types: {[key: string] : ThemeFieldTypeInterface}
}

export interface WithContextFormProps {
  getForm: (name: string) => ContextFormContextInterface
}

declare function humanizeName(name: string): string;

declare function withContextForm<T>(component: React.Component): React.Component<T & WithContextFormProps>

declare function withContextFormInstanceConsumer<T>(component: React.Component): React.Component<T & WithContextFormProps>

declare class ContextFormProvider extends React.Component<ContextFormProviderProps, any> {
}

declare class Field extends React.Component<FormFieldProps, any> {
}

declare class FieldInput extends React.Component<FormFieldProps, any> {
}

declare class FormFooter extends React.Component<{}, any> {
}

declare var SimpleTheme: ThemeInterface;

declare class Form extends React.Component<ContextFormProps, any> {
  static Field: Field;
}

export default Form;
export {
  Field,
  FieldInput,
  FormFooter,
  ContextFormProvider,
  SimpleTheme,
  withContextFormInstanceConsumer,
  humanizeName,
  withContextForm,
}
