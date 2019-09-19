import React, * as hooks from 'react';
import reactime, { testUseReducer } from '../../../reactime/package/index'

let useReducer = testUseReducer(hooks.useReducer);

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const initialState = { count: 0 };

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <strong>useReducer Hook Demo</strong>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </React.Fragment>
  );
}

export default UseReducerHook;