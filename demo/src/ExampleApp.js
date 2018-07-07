import React, { Component } from 'react';
import AntdThemeExample from './AntdThemeExample';
import FullFeaturedFormExample from './FullFeaturedFormExample';
import logo from './../cf-logo.jpg';

class ExampleApp extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <div className='header'>
          <img src={logo} className='logo'/>
          <h1>Context Form Demo</h1>
        </div>
        <AntdThemeExample/>
        {/*<FullFeaturedFormExample/>*/}
      </div>
    );
  }
}

export default ExampleApp;
