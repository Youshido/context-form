import React from 'react';
import ReactDOM from 'react-dom';
import { ContextFormProvider } from '../../src/index';
import BootstrapTheme from './BootstrapTheme';
import ExampleApp from './ExampleApp';
import './index.css';

ReactDOM.render(
  <ContextFormProvider theme={BootstrapTheme}>
    <ExampleApp/>
  </ContextFormProvider>,
  document.getElementById('root'),
);
