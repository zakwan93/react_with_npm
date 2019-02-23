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

  mySwitchHandler = (newName) => {
    // console.log("Was Clicked!");
    this.setState ({
      persons: [
        {name: newName, age: 25},
        {name: 'Shehjad Bhaiyat', age: 26},
        {name: 'Yahya Bhaiyat', age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1> Hi, I'm a React App </h1>
       <p> This is awesome </p>
       <button onClick = {() => this.mySwitchHandler('Zakwan!!!')}> My Switch! </button>
       <Person 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.mySwitchHandler.bind(this, 'Zakku!!')}>I'm getting better at React </Person>
       <Person 
          name = {this.state.persons[1].name} 
          age ={this.state.persons[1].age} />
       <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age} > 
          I'm learning !</Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


export default App;


// const app = props => {
//   const [personsState, setPersonState] = useState({
//     persons: [
//       {name: 'Zakwan', age: 25},
//       {name: 'Shehjad', age: 26},
//       {name: 'Yahya', age: 27}
//     ]
//   });

//   const [otherState, setOtherState] = useState('Some other value');

//   const mySwitchHandler = () => {
//     // console.log("Was Clicked!");
//     setPersonState ({
//       persons: [
//         {name: 'Zakwan Bhaiyat', age: 25},
//         {name: 'Shehjad Bhaiyat', age: 26},
//         {name: 'Yahya Bhaiyat', age: 27}
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1> Hi, I'm a React App </h1>
//       <p> This is awesome </p>
//       <button onClick = {mySwitchHandler}> My Switch! </button>
//       <Person name = {personsState.persons[1].name} age={personsState.persons[1].age}> I'm getting better at React </Person>
//       <Person name = {personsState.persons[0].name} age ={personsState.persons[0].age} />
//       <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age} > I'm learning !</Person>
//     </div>
//   );
// }
