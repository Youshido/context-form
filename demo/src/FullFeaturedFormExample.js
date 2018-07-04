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
        <Form onSubmit={this.onSubmit}
              loading={loading}
              initialValues={initialValues}>
          <FormField name={'firstName'}/>
          <FormField name={'lastName'} required={true}/>
          <FormFieldArray name={'education'}>
            <FormField name={'university'}/>
            <FormField name={'year'}/>
            <RemoveGroupButton>Remove</RemoveGroupButton>
          </FormFieldArray>
          <AddGroupButton name={'education'}>Add Another</AddGroupButton>
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
