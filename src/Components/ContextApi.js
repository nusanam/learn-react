import React, { Component } from 'react';

const initialState = {
  state: {
    name: "No One",
    age: 0,
    cake: []
  }
}

const MyContext = React.createContext(initialState);

class ContextApi extends Component {
  state = {
    name: "Andy",
    age: 27,
    cake: []
  }
  render() {

    const cakeArray = [];

    function cakePusher(currentCakeState) {
      const newCakeState = currentCakeState;
      const cakeGif = document.createElement('img');
      cakeGif.width = 150;
      cakeGif.src = 'https://www.meme-arsenal.com/memes/34996c8b3d6d35bc9a08bb20a95df8e0.jpg';
      return newCakeState.push(cakeGif)
    }

    return (
      <MyContext.Provider value={
        {
          state: this.state,
          itsMyBirthday: () => {
            this.setState({
              age: this.state.age + 1,
              cake: cakePusher(this.state.cake),
            })
            console.log(this.state);
          }
        }
      }>
        <Family />
      </MyContext.Provider >
    );
  }
}

function Family(props) {
  return (
    <div>
      <Person />
    </div>
  )
}

class Person extends Component {

  static contextType = MyContext;

  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <strong>React Context API Demo</strong>
              <div>{"Name: " + context.state.name}</div>
              <div>{"Age: " + context.state.age}</div>
              <button onClick={context.itsMyBirthday}>Get Older</button>
              <div>{context.state.cake}</div>
            </React.Fragment>

          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

export default ContextApi;
