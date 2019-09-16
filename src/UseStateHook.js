import React, { useState } from 'react';

// Example using the standard class components

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

// useState is a Hook that lets you add React state to function components.

function App() {
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

export default App;
// export default Example;