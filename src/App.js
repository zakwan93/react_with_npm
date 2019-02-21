import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> Hi, I'm a React App </h1>
       <p> This is awesome </p>
       <Person name = "Zakwan" age="25" />
       <Person name = "Shehjad" age = "26" />
       <Person name = "Yahya" age = "27" />
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
