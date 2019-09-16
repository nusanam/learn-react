import React, { Component } from 'react';
import Regular from './Regular';
import ContextApi from './ContextApi';
import UseStateHook from './UseStateHook';

class App extends Component {

  render() {
    return (
      <div>
        <Regular />
        <ContextApi />
        <UseStateHook />
      </div>
    )
  }
}

export default App;