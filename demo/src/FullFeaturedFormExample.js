import React, { Component } from 'react';
import RemoveGroupButton from '../../src/FormField/RemoveGroupButton';
import {
  Form,
  FormField, FormControl,
  FormFooter, FormFieldArray, AddGroupButton,
} from '../../src/index';
import { Button, Row, Col, Well, Glyphicon, ControlLabel, FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class FullFeaturedFormExample extends Component {

  state = {
    loading       : false,
    initialValues : {},
  };

  onSubmit = ({ values }) => {
    console.log('Submitting', values);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initialValues : {
          firstName : 'Alex',
        },
      });
    }, 1000);
  }

  validateAge = (val) => {
    if (!val || val < 10) {
      return 'You have to be at least 10';
    }
  };

  render() {
    const { loading, initialValues } = this.state;

    return (
      <div>
        <h2>Full Featured Form</h2>
        <p className='app-description'>This example demonstrates most of the possibilities of the Context Form</p>
        <Form onSubmit={this.onSubmit}
              horizontal
              loading={loading}
              initialValues={initialValues}
              className='form form-fullfeatured'
        >
          <FormField name={'firstName'} placeholder={'e.g. Alex'}/>
          <FormField name={'lastName'}
                     placeholder={'e.g. Malcovich'}
                     description={'Please, enter your real name'}
                     required
          />
          <FormField name={'age'}
                     placeholder={'e.g. 26'}
                     description={'Please, enter only full years'}
                     rules={[this.validateAge]}
          />
          <FormField name={'occupation'}
                     placeholder={'Select Title'}
                     type={'select'}
          >
            <option value={'1'}>Software Engineer</option>
            <option value={'2'}>Web Designer</option>
            <option value={'3'}>QA Engineer</option>
          </FormField>
          <hr/>
          <Row>
            <Col sm={3} componentClass={ControlLabel}>Education:</Col>
            <Col sm={9}>
              <FormFieldArray name={'education'}>
                <div className={'education-group'}>
                  <FormControl name={'university'} placeholder={'University'}/>
                  <FormControl name={'year'} placeholder={'Year'}/>
                  <RemoveGroupButton>
                    <Glyphicon glyph="trash" style={{ marginLeft : 7 }}/>
                  </RemoveGroupButton>
                </div>
              </FormFieldArray>
              <AddGroupButton name={'education'} component={Button} bsStyle={'link'}>Add Another</AddGroupButton>
            </Col>
          </Row>
          <hr/>
          <FormFooter>
            <Button bsStyle="default" type={'reset'}>Reset</Button>
            <Button bsStyle="primary" type={'submit'} style={{ marginLeft: 10}}>Submit</Button>
          </FormFooter>
        </Form>
      </div>
    );
  }
}

FullFeaturedFormExample.propTypes = {};

export default FullFeaturedFormExample;
