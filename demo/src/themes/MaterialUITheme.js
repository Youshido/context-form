import React from 'react';
import cn from 'classnames';
import { TextField, FormControl, Input, InputLabel } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export const withMaterialUITheme = (WrappedComponent) => (props) => (
  <MuiThemeProvider theme={theme}>
    <WrappedComponent {...props}/>
  </MuiThemeProvider>
);

const TextInput = (props) => {
  return <Input {...props} value={props.value || ''}/>;
};

const FieldContainer = (props) =>
  <FormControl className={cn('form-field', {
    'has-error' : props.form.errors[props.name],
    'required'  : props.required,
  })}>
    {props.children}
  </FormControl>;

const FieldLabel = (props) =>
  <InputLabel htmlFor={props.fieldName}>{props.children}</InputLabel>;

const FieldInputContainer = (props) =>
  <div className={'form-field__input-container'}>{props.children}</div>;

const FieldDescription = (props) => props.children
  ? <p className={'form-field__description'}>{props.children}</p>
  : null;

const FieldErrors = (props) => props.errors
  ? <span className={'form-field__errors-holder'}>
      {props.errors.map(({ message }, i) =>
        <div key={i} className={'form-field__errors-message'}>{message || 'Error occurred.'}</div>,
      )}
    </span>
  : null;

const FormFooter = props => <div className={'form-footer__holder'}>{props.children}</div>;

const MaterialUITheme = {
  name         : 'Material',
  Field        : {
    Container      : FieldContainer,
    Label          : FieldLabel,
    InputContainer : FieldInputContainer,
    Description    : FieldDescription,
    Errors         : FieldErrors,
  },
  Footer       : FormFooter,
  defaultInput : TextInput,
  types        : {
    text : {
      component : TextInput,
    },
  },
};

export default MaterialUITheme;
