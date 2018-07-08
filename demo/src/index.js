import React from 'react';
import ReactDOM from 'react-dom';
import { ContextFormProvider } from '../../src/index';
import BootstrapTheme from './themes/BootstrapTheme';
import ExampleApp from './ExampleApp';
import './index.css';
import getScriptParams from "./utils/getScriptParams";

const params = getScriptParams();
const renderId = params?.example ? 'context-form-example-' + params?.example : 'root';

ReactDOM.render(
  <ContextFormProvider theme={BootstrapTheme}>
    <ExampleApp/>
  </ContextFormProvider>,
  document.getElementById(renderId),
);
