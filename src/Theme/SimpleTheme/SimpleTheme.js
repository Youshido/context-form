import React from 'react';
import cn from 'classnames';

const Input = (props) => {
  const { required, ...extra } = props;
  return <input {...extra} value={extra.value || ''}/>;
};

const FieldContainer = (props) =>
  <div className={cn('form-field', {
    'has-error' : props.form.errors[props.name],
    'required'  : props.required,
  })}>
    {props.children}
  </div>;

const FieldLabel = (props) =>
  <div className={'form-field__label-holder'}><label htmlFor={props.fieldName} className={'form-field__label'}>{props.children}:</label></div>;

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

const SimpleTheme = {
  name         : 'Simple',
  Field        : {
    Container      : FieldContainer,
    Label          : FieldLabel,
    InputContainer : FieldInputContainer,
    Description    : FieldDescription,
    Errors         : FieldErrors,
  },
  Footer       : FormFooter,
  defaultInput : (props) => <input {...props} />,
  types        : {
    text : {
      component : Input,
    },
  },
};

export default SimpleTheme;
