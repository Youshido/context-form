import React from 'react';
import ReactDOM from 'react-dom';
import LayoutApp from './LayoutApp';
import ExampleApp from './ExampleApp';
import './index.sass';

const renderExample = (example, renderId) => {
  ReactDOM.render(
    <ExampleApp example={example}/>,
    document.getElementById(renderId),
  );
};
window.renderExample = renderExample;

const renderLayout = ReactDOM.render(
    <LayoutApp />,
    document.getElementById('root'),
  );
