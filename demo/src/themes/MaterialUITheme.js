import React from 'react';
import cn from 'classnames';
import { TextField, FormControl, Input, InputLabel, FormHelperText, FormLabel } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const theme                = createMuiTheme({
  palette : {
    primary   : {
      main : '#2196f3',
    },
    secondary : {
      main : '#f50057',
    },
  },
});
const horizontalLabelWidth = '25%';

const styles = theme => ({
  horizontalLabel  : {
    width       : horizontalLabelWidth,
    marginTop   : 9,
    marginRight : 20,
    textAlign   : 'right',
  },
  footer           : {
    marginTop : 15,
  },
  horizontalFooter : {
    marginTop   : 20,
    marginLeft  : horizontalLabelWidth,
    paddingLeft : 20,
  },
});

export const withMaterialUITheme = (WrappedComponent) => (props) => (
  <MuiThemeProvider theme={theme}>
    <WrappedComponent {...props}/>
  </MuiThemeProvider>
);

const TextInput           = ({ hasError, ...props }) => {
  return <Input {...props} value={props.value || ''} error={hasError}/>;
};
const HorizontalContainer = (props) => {
  return (
    <div style={{ display : 'flex', marginTop : 10 }}>{props.children}</div>
  );
};

const FieldContainer = (props) => {
  const extraProps       = {
    error     : !!props.errors,
    fullWidth : props.layout !== 'inline',
    margin    : 'dense',
  };
  const ControlComponent = props.layout === 'horizontal' ? HorizontalContainer : FormControl;
  return (
    <ControlComponent {...extraProps} >
      {props.children}
    </ControlComponent>
  );
};

const FieldLabel = withStyles(styles)((props) => {
  const extraProps     = {
    required  : props.required,
    error     : !!props.errors,
    className : props.classes[`${props.layout}Label`],
  };
  const LabelComponent = props.isHorizontal ? FormLabel : InputLabel;

  return <LabelComponent htmlFor={props.fieldName} {...extraProps} >{props.children}</LabelComponent>;
});

const FieldInputContainer = (props) => props.isHorizontal ? <div>{props.children}</div> : props.children;

const FieldDescription = (props) => props.children && !props.errors
  ? <FormHelperText className={'form-field__description'}>{props.children}</FormHelperText>
  : null;

const FieldErrors = (props) => props.errors
  ? <FormHelperText error>
    {props.errors.map(({ message }, i) => message || 'Error occured.')}
  </FormHelperText>
  : null;

const FormFooter = withStyles(styles)(props =>
  <div className={cn(props.classes.footer, props.layout === 'horizontal' ? props.classes.horizontalFooter : null)}>
    {props.children}
  </div>,
);

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
