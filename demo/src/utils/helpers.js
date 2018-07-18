import * as PropTypes from 'prop-types';
import React from 'react';
import { FormFooter } from '../../../src';

export function SubmissionResult(props) {
  return <>{!!props.values &&
  <pre style={{ marginTop : 20, marginBottom : 0, background: '#fafafa', padding: 20, borderRadius: 4 }}
       onClick={props.hideSubmission}>Submission:<br/>{JSON.stringify(props.values)}</pre>
           }</>;
}

SubmissionResult.propTypes = {
  values         : PropTypes.any,
  hideSubmission : PropTypes.func,
};

export function DefaultFooter(props) {
  return <FormFooter>
    <button type={'submit'}>Submit</button>
    <SubmissionResult values={props.values} hideSubmission={props.hideSubmission}/>
  </FormFooter>;
}

DefaultFooter.propTypes = {
  values         : PropTypes.any,
  hideSubmission : PropTypes.func,
};
