import { DatePicker } from 'antd/lib/index';
import React from 'react';
import cn from 'classnames';
import { Row, Col, Input, Select } from 'antd'
import 'antd/dist/antd.css'

const FieldContainer = (props) =>
  <Row className={cn({
    'has-error' : props.form?.errors[props.name],
    'required'  : props.required
  })} style={{ marginTop : 7 }}>
    {props.children}
  </Row>;

const FieldLabel = (props) =>
  <Col span={6} className={'ant-form-item-label'}>
    <label htmlFor={props.fieldName}
           className={cn('form-field__label', { 'ant-form-item-required' : props.required })}>{props.children}</label>
  </Col>;

const FieldInputContainer = (props) =>
  <Col span={17} className={'ant-form-item-control-wrapper'} style={{ paddingTop : 3 }}>{props.children}</Col>;

const FieldDescription = (props) => props.children
  ? <p className={'form-field__description'}>{props.children}</p>
  : null;

const FieldErrors = (props) => props.errors
  ? <span className={'ant-form-explain'}>
      {props.errors.map(({ message }, i) =>
        <p key={i} className={'form-field__errors-message'}>{message || 'Error occurred.'}</p>
      )}
    </span>
  : null;

const FormFooter = props => <Col offset={8} style={{ marginTop : 10 }}>{props.children}</Col>;
const ViewType   = props => <span className="ant-form-text">{props.children}</span>;

const AntTheme = {
  name         : 'Ant',
  Field        : {
    Container      : FieldContainer,
    Label          : FieldLabel,
    InputContainer : FieldInputContainer,
    Description    : FieldDescription,
    Errors         : FieldErrors,
  },
  Footer       : FormFooter,
  types        : {
    text         : {
      component : Input,
    },
    date         : {
      component : DatePicker,
    },
    select       : {
      component : Select,
    },
    view         : {
      component : ViewType
    }
  },
  defaultInput : Input
};

export default AntTheme;
