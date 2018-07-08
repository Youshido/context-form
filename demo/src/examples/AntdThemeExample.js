import React, { Component } from 'react';
import { Input, Row, Col, Button } from 'antd';
import {
  Form,
  FormField,
  FormFooter,
  ContextFormProvider,
  AddGroupButton,
  FormFieldArray,
  RemoveGroupButton,
  FormControl,
} from '../../../src/index';
import AntTheme from '../themes/AntTheme';
import BootstrapTheme from '../themes/BootstrapTheme';

class AntdThemeExample extends Component {

  state = {
    controlledForm : {
      meal : {
        id : '2',
      },
    },
  };

  onControlledFormChange = (change) => {
    console.log('Controlled Change', change);
    this.setState({
      controlledForm : {
        ...this.state.controlledForm,
        ...change,
      },
    });
  };

  onControlledFormSubmit = ({ values }) => {
    console.log('Controlled Submit', values);
  };

  onSubmit = ({ values }) => {
    console.log('Page ON SUBMIT', values);
  };

  render() {

    const initialValues = {
      id    : '123',
      title : 'Bushmaster',
    };

    const options = [{
      id   : '1',
      name : 'Vegetarian',
    }, {
      id   : '2',
      name : 'Chicken',
    }];

    return (
      <div style={{ maxWidth : 400, paddingBottom : 100 }}>
        <ContextFormProvider theme={AntTheme}>
          <h2>Uncontrolled Form</h2>
          <Form onSubmit={this.onSubmit} initialValues={initialValues}>
            <FormField name={'title'} component={Input} label={'Title'} placeholder={'Enter Title'} required/>
            <FormField name={'message'} placeholder={'e.g. What is going on here?'}
                       description={'Let us know what you need to tell us.'}/>
            <FormField name={'age'} required description={'Please, do not try to fool us :)'}/>
            <FormFooter>
              <Button>Submit</Button>
            </FormFooter>
          </Form>
          <h2>Controlled Form</h2>
          <Form values={this.state.controlledForm}
                onChange={this.onControlledFormChange}
                onSubmit={this.onControlledFormSubmit}>
            <div>
              <FormField name={'title'} placeholder={'Enter Title'}/>
            </div>
            <AddGroupButton name={'items'}>+ Add Group</AddGroupButton>
            <FormFieldArray name={'items'}>
              <Row gutter={10}>
                <Col span={10}>
                  <FormControl name={'title'} type={'text'} placeholder={'Title'}/>
                </Col>
                <Col span={4}>
                  <FormControl name={'price'} type={'text'} placeholder={'Price'}/>
                </Col>
                <Col span={4}>
                  <RemoveGroupButton>remove</RemoveGroupButton>
                </Col>
              </Row>
            </FormFieldArray>
            <FormFooter>
              <Button htmlType={'submit'}>Submit</Button>
            </FormFooter>
          </Form>
        </ContextFormProvider>
      </div>
    );
  }
}

export default AntdThemeExample;
