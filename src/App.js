import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // state object will be an array

  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
  }

  switchNameHandler = (newName) => {

    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    })
  }

  changedNameHandler = (event) => {

    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    })
  }

  render() {

    // css style properties have JavaScript representations; use camel case not to confuse with css properties. Use strings as values since it is in JavaScript. 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working!</p >
        <button style={style} onClick={() => this.switchNameHandler("Maximilian!!")}>Switch Name</button>
        < Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.changedNameHandler}
        >My Hobbies: Racing</Person>
        < Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div >
    );
  }
}

export default App;