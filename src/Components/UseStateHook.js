import React, { useState } from 'react';

function UseStateHook() {
  const [count, setCount] = useState(0);

  const incrementMe = () => setCount(count + 1);

  return (
    <div>
      <p>You clicked this {count} times</p>
      <button onClick={() => incrementMe()}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default UseStateHook;