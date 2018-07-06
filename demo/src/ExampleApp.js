import React, { Component } from 'react';
import { ContextFormProvider } from '../../src/index';
import BootstrapTheme from './BootstrapTheme';
import FullFeaturedFormExample from './FullFeaturedFormExample';
import logo from './../cf-logo.jpg';

class ExampleApp extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <ContextFormProvider theme={BootstrapTheme}>
          <div className='header'>
            <img src={logo} className='logo'/>
            <h1>Context Form Demo</h1>
          </div>
          <FullFeaturedFormExample/>
        </ContextFormProvider>
      </div>
    );
  }
}

export default ExampleApp;
