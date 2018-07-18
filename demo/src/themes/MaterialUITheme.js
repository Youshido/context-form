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
  <FormControl style={{ display: 'flex', marginTop: 10 }}>
    {props.children}
  </FormControl>;

const FieldLabel = (props) =>
  <InputLabel htmlFor={props.fieldName}>{props.children}</InputLabel>;

const FieldInputContainer = (props) => props.children;

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

const FormFooter = props => <div style={{ marginTop: 20 }}>{props.children}</div>;

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
