import React, { Component } from 'react';
import { EXAMPLE } from './constants';
import ExampleApp from './ExampleApp';

class LayoutApp extends Component {
  state = {
    active : 'fieldArrayDynamic',
  };

  render() {
    const { active } = this.state;

    return (
      <div className='wrapper'>
        <div className='examples-layout'>
          <ul className='example-list'>
            {Object.keys(EXAMPLE).map(key =>
              <li key={key} role='presentation'
                className={active === key ? 'active' : ''}
                onClick={() => this.setState({ active : key })}
              >{EXAMPLE[key].title}
              </li>,
            )}
          </ul>
          <div className='example-content'>
            <div className='header'>
              <h1>Context Form Demo</h1>
            </div>
            <div className='example-canvas'>
              <h2>{EXAMPLE[active].title}</h2>
              <ExampleApp example={active}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutApp;
