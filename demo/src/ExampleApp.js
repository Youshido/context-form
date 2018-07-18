import React, { Component } from 'react';
import { ContextFormProvider } from '../../src/index';
import { EXAMPLE } from './constants';

class ExampleApp extends Component {
  render() {
    const { example } = this.props;
    const exampleItem = EXAMPLE[example];
    const Example = exampleItem
      ? EXAMPLE[example].component
      : <h3>Invalid Example {example}</h3>;

    return (
      <div>
        <ContextFormProvider theme={exampleItem?.theme}>
          <Example/>
        </ContextFormProvider>
      </div>
    );
  }
}

export default ExampleApp;
