import React, * as hooks from 'react';
import reactime, { testUseState } from '../../../reactime/package/index'

let useState = testUseState(hooks.useState);

function UseStateHook() {
  const [count, setCount] = useState(0);

  const incrementMe = () => setCount(count + 1);

  return (
    <div>
      <strong>useState Hook Demo</strong>
      <p>You clicked this {count} times</p>
      <button onClick={() => incrementMe()}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default UseStateHook;