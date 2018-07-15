import React, { Component } from 'react';
import Form, {
  FormFooter,
} from '../../../src/index';
import { Button } from 'react-bootstrap';

// class Handle extends Component {
//
//   lastX = 0;
//   lastY = 0;
//
//   state = {
//     angle: 0,
//   };
//
//   onMouseMove = (e) => {
//     let delta = 5;
//     if (e.screenX < this.lastX) {
//       delta = -delta;
//     }
//     this.lastX = e.screenX;
//     this.setState({
//       angle: (this.state.angle + delta) % 360
//     });
//   };
//
//   onMouseDown = (e) => {
//     document.addEventListener('mousemove', this.onMouseMove);
//     document.addEventListener('mouseup', this.onMouseUp);
//     this.lastX = e.screenX;
//     this.lastY = e.screenY;
//   };
//
//   onMouseUp = (e) => {
//     document.removeEventListener('mousemove', this.onMouseMove)
//     document.removeEventListener('mouseup', this.onMouseUp)
//   };
//
//   render() {
//
//     const angle  = this.state.angle * 0.0174533;
//     const radius = 80;
//     const origin = 0;
//
//     const dx       = origin + Math.cos(angle)*radius;
//     const dy       = origin + Math.sin(angle)*radius;
//     const position = {
//       transform : `translate(${dx}px, ${dy}px)`,
//     };
//     return <div
//       onMouseDown={this.onMouseDown}
//       style={{ position: 'absolute', left: 80, top: 80, width : 40, height : 40, borderRadius : 20, background : 'red', ...position }}
//     />;
//   }
// }

class BasicFormExample extends Component {

  state = {
    values : null,
  };

  onSubmit = ({ values }) => {
    console.log('Submitting Values', values);
    this.setState({
      values,
    });
  };

  hideSubmission = () => {
    this.setState({ values : null });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} horizontal>
        <Form.Field name={'firstName'} placeholder={'e.g. Alex'} required/>
        <Form.Field name={'lastName'} placeholder={'e.g. Malcovich'}/>
        <FormFooter>
          <Button bsStyle="primary" type={'submit'} style={{ marginLeft : 10 }}>Submit</Button>
          {!!this.state.values &&
          <pre style={{ marginTop : 20, marginBottom : 0 }}
               onClick={this.hideSubmission}>Submission:{JSON.stringify(this.state.values)}</pre>
          }
        </FormFooter>
        {/*<div style={{ width : 200, height : 200, position : 'absolute', borderRadius : 100, background : 'darkred' }}>*/}
          {/*<Handle/>*/}
        {/*</div>*/}
      </Form>
    );
  }
}

BasicFormExample.propTypes = {};

export default BasicFormExample;
