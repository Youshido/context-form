import React from 'react';
import cn from 'classnames';
import { Row, Col, FormControl, Form, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

const DefaultInput = (props) => {
  const { required, ...extra } = props;
  return <FormControl type='text' {...extra} value={extra.value || ''}/>;
};

const FieldContainer = (props) =>
  <FormGroup controlId={props.fieldName} className={cn('form-field', {
    'has-error' : props.form.errors[props.name],
    'required'  : props.required,
  })}>
    {props.children}
  </FormGroup>;

const FieldLabel = (props) =>
  <Col sm={3} componentClass={ControlLabel}>{props.required ? '*' : ''}{props.children}:</Col>;

const FieldInputContainer = (props) =>
  <Col sm={9} className={'form-field__input-container'}>{props.children}</Col>;

const FieldDescription = (props) => props.children && !props.errors
  ? <HelpBlock>
    {props.children}
  </HelpBlock>
  : null;

const FieldErrors = (props) => props.errors
  ? <span className={'form-field__errors-holder'}>
      {props.errors.map(({ message }, i) =>
        <HelpBlock key={i} className={'form-field__errors-message'}>{message || 'Error occurred.'}</HelpBlock>,
      )}
    </span>
  : null;

const FormFooter = props => <FormGroup>
  <Col smOffset={3} sm={9}>{props.children}</Col>
</FormGroup>;

export default {
  name         : 'Bootstrap',
  Form,
  Field        : {
    Container      : FieldContainer,
    Label          : FieldLabel,
    InputContainer : FieldInputContainer,
    Description    : FieldDescription,
    Errors         : FieldErrors,
  },
  Footer       : FormFooter,
  defaultInput : DefaultInput,
  types        : {
    text   : {
      component : DefaultInput,
    },
    select : {
      component : (props) => <FormControl componentClass="select" {...props} />,
    },
  },
};
