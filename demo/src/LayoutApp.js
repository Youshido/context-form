import React, { Component } from 'react';
import { EXAMPLE } from './constants';
import ExampleApp from './ExampleApp';

class LayoutApp extends Component {
  state = {
    active : 'fieldArray',
  };

  render() {
    const { active } = this.state;

    return (
      <div className="wrapper">
        <div className='header'>
          <img src="" className='logo'/>
          <h1>Context Form Demo</h1>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ul className="nav nav-pills nav-stacked">
              {Object.keys(EXAMPLE).map(key =>
                <li key={key} role="presentation" className={active === key ? 'active' : ''}>
                  <a role="presentation"
                     onClick={() => this.setState({ active : key })}
                  >{EXAMPLE[key].title}</a>
                </li>,
              )}
            </ul>
          </div>
          <div className="col-md-9">
            <ExampleApp example={active}/>
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutApp;
