import React, { Component } from 'react';

const initialState = {
  state: {
    name: "No One",
    age: 0
  }
}

const MyContext = React.createContext(initialState);

class App extends Component {
  state = {
    name: "Andy",
    age: 27
  }
  render() {
    return (
      <MyContext.Provider value={
        {
          state: this.state,
          itsMyBirthday: () => {
            this.setState({
              age: this.state.age + 1
            })
            console.log(this.state);
          }
        }
      }>
        <Family />
      </MyContext.Provider>
    );
  }
} ins: [
  '@babe

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
                <p>React Context API Demo</p>
                <div>{"Name: " + context.state.name}</div>
                <div>{"Age: " + context.state.age}</div>
                <button onClick={context.itsMyBirthday}>Get Older</button>
              </React.Fragment>

            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }

export default App;
