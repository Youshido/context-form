import React from 'react';
import ReactDOM from 'react-dom';
import { ContextFormProvider } from '../../src/index';
import LayoutApp from './LayoutApp';
import BootstrapTheme from './themes/BootstrapTheme';
import ExampleApp from './ExampleApp';
import './index.css';

const renderExample = (example, renderId) => {
  ReactDOM.render(
    <ContextFormProvider theme={BootstrapTheme}>
      <ExampleApp example={example}/>
    </ContextFormProvider>,
    document.getElementById(renderId),
  );
};
window.renderExample = renderExample;

const renderLayout = ReactDOM.render(
  <ContextFormProvider theme={BootstrapTheme}>
    <LayoutApp />
  </ContextFormProvider>,
  document.getElementById('root'),
);
