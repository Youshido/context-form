import React, { Component } from 'react';
import { EXAMPLE } from './constants';
import AntdThemeExample from './examples/AntdThemeExample';
import BasicFormExample from './examples/BasicFormExample';
import FullFeaturedFormExample from './examples/FullFeaturedFormExample';
import getScriptParams from './utils/getScriptParams';

class ExampleApp extends Component {
  render() {
    const { example } = this.props;
    const Example = EXAMPLE[example]
      ? EXAMPLE[example].component
      : <h3>Invalid Example {example}</h3>;

    return (
      <div style={{ padding: 40 }}>
        <Example/>
      </div>
    );
  }
}

export default ExampleApp;
