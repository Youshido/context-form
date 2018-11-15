import React from 'react';
import './SimpleTheme.sass';
import cn from 'classnames';

const Input = (props) => {
  const { required, hasError, ...extra } = props;
  return <input {...extra} value={extra.value || ''} className={(props.hasError ? 'has-error ' : ' ') + props.className}/>;
};
const Checkbox = (props) => {
  const { required, hasError, value, ...extra } = props;
  return <input {...extra} checked={!!value} onChange={(e) => { props.onChange(e.currentTarget.checked)}}/>;
};
const Select = (props) => {
  const { required, hasError, value, ...extra } = props;
  return <select {...extra} value={value}></select>;
};

const Form = ({horizontal, ...props}) => <form {...props} />;

const FieldContainer = (props) =>
  <div className={cn('form-field', {
    'has-error' : props.hasErrors,
    'required'  : props.required,
  })}>
    {props.children}
  </div>;

const FieldLabel = (props) =>
  <div className={'form-field__label-holder'}>
    <label htmlFor={props.fieldName} className={'form-field__label'}>{props.children}:</label>
  </div>;

const FieldInputContainer = (props) =>
  <div className={'form-field__input-container'}>{props.children}</div>;

const FieldDescription = (props) => props.children && !props.errors
  ? <p className={'form-field__description'}>{props.children}</p>
  : null;

const FieldErrors = (props) => props.errors
  ? <div className={'form-field__errors-holder'}>
    {props.errors.map(({ message }, i) =>
      <div key={i} className={'form-field__errors-message'}>{message || 'Error occurred.'}</div>,
    )}
  </div>
  : null;

const FormFooter = props => <div className={'form-footer__holder'}>{props.children}</div>;

const SimpleTheme = {
  name  : 'Simple',
  Form,
  Field : {
    Container      : FieldContainer,
    Label          : FieldLabel,
    InputContainer : FieldInputContainer,
    Description    : FieldDescription,
    Errors         : FieldErrors,
  },
  Footer       : FormFooter,
  defaultInput : Input,
  types        : {
    text : {
      component : Input,
    },
    password : {
      component : Input,
    },
    checkbox : {
      component : Checkbox,
    },
    select : {
      component : Select,
    },
  },
};

export default SimpleTheme;
