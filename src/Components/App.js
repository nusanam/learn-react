import React, * as hooks from 'react';
import Regular from './Regular';
import ContextApi from './ContextApi';
import UseStateHook from './UseStateHook';
import TreeGraph from './TreeGraph';
import UseReducerHook from './UseReducerHook';
// import reactime, { testUseState } from '../../reactime/package/index'

// const useState = testUseState(hooks.useState);

class App extends React.Component {

  render() {
    return (
      <div>
        <Regular />
        <hr />
        <ContextApi />
        <hr />
        <UseStateHook />
        <hr />
        <UseReducerHook />
        <hr />
        {/* <TreeGraph /> */}
      </div>
    )
  }
}

export default App;