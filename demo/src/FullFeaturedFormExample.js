import React, { Component, Fragment } from 'react';
import RemoveGroupButton from '../../src/FormField/RemoveGroupButton';
import {
  Form, FormField, FormFooter, FormFieldArray, AddGroupButton,
} from '../../src/index';
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


  render() {
    const { loading, initialValues } = this.state;

    return (
      <Fragment>
        <h2>Full Featured Form</h2>
        <p className='app-description'>This example demonstrates most of the possibilities of the Context Form</p>
        <Form onSubmit={this.onSubmit}
              loading={loading}
              initialValues={initialValues}>
          <FormField name={'firstName'} placeholder={'e.g. Alex'}/>
          <FormField name={'lastName'}
                     placeholder={'e.g. Malcovich'}
                     description={'Please, enter your real name'}
                     required={true}
          />
          <div className='content-column'>
            <FormFieldArray name={'education'}>
              <div className={'education-group'}>
                <FormField name={'university'} placeholder={'University'} label={false}/>
                <FormField name={'year'} placeholder={'Year'} label={false}/>
                <RemoveGroupButton>X</RemoveGroupButton>
              </div>
            </FormFieldArray>
            <AddGroupButton name={'education'}>Add Another</AddGroupButton>
          </div>
          <FormFooter>
            <button>Submit</button>
          </FormFooter>
        </Form>
      </Fragment>
    );
  }
}

FullFeaturedFormExample.propTypes = {};

export default FullFeaturedFormExample;
