import React, { Component } from 'react';
import {
  Button, Col, ControlLabel, Glyphicon, Row,
} from 'react-bootstrap';
import Form, {
  Field,
  FieldInput,
  FieldArray,
  FormFooter,
} from '../../../src/index';

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
          education : [
            {
              university : 'Stanford',
              year       : '1986',
            },
          ],
        },
      });
    }, 1000);
  }

  validateAge = (val) => {
    if (!val || val < 10) {
      return 'You have to be at least 10';
    }
    return true;
  };

  render() {
    const { loading, initialValues } = this.state;
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          horizontal
          loading={loading}
          initialValues={initialValues}
          className="form-fullfeatured"
        >
          <Field name="title" required/>
          <Field name="firstName" placeholder="e.g. Alex"/>
          <Field
            name="lastName"
            placeholder="e.g. Malcovich"
            description="Please, enter your real name"
            required
          />
          <Field
            name="age"
            placeholder="e.g. 26"
            description="Please, enter only full years"
            rules={[this.validateAge]}
          />
          <Field
            name="occupation"
            placeholder="Select Title"
            type="select"
          >
            <option value="1">Software Engineer</option>
            <option value="2">Web Designer</option>
            <option value="3">QA Engineer</option>
          </Field>
          <hr/>
          <Row>
            <Col sm={3} componentClass={ControlLabel}>
              Education:
            </Col>
            <Col sm={9}>
              <FieldArray name="education">
                <div className="education-group">
                  <FieldInput name="university" placeholder="University"/>
                  <FieldInput name="year" placeholder="Year" style={{ width : 100, marginLeft : 10 }}/>
                  <FieldArray.Remove>
                    <Glyphicon glyph="trash" style={{ marginLeft : 10 }}/>
                  </FieldArray.Remove>
                </div>
              </FieldArray>
              <FieldArray.Add name="education" component={Button} bsStyle="link">
                Add Another
              </FieldArray.Add>
            </Col>
          </Row>
          <hr/>
          <FormFooter>
            <Button bsStyle="default" type="reset">
              Reset
            </Button>
            <Button bsStyle="primary" type="submit" style={{ marginLeft : 10 }}>
              Submit
            </Button>
          </FormFooter>
        </Form>
        <Form
          values={this.state.form2 || {}}
          onChange={change => this.setState({ form2 : { ...this.state.form2, ...change } })}
          onSubmit={({ values }) => console.log('Second Submit', values)}
        >
          <Field name="title"/>
          <Field name="age" required/>
          <FormFooter>
            <Button type="submit">
              Submit
            </Button>
          </FormFooter>
        </Form>
      </div>
    );
  }
}

FullFeaturedFormExample.propTypes = {};

export default FullFeaturedFormExample;
