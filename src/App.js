import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Zakwan', age: 25},
      {name: 'Shehjad', age: 26},
      {name: 'Yahya', age: 27}
    ]
  }
  render() {
    return (
      <div className="App">
       <h1> Hi, I'm a React App </h1>
       <p> This is awesome </p>
       <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}> I'm getting better at React </Person>
       <Person name = {this.state.persons[1].name} age ={this.state.persons[1].age} />
       <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
