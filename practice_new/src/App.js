import React, { Component } from 'react';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'p1', name: 'Zakwan', age: 25},
      {id: 'p2', name: 'Shehjad', age: 26},
      {id: 'p3', name: 'Yahya', age: 27}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
    }); 

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // const person = Object.assign({}, this.state.persons[personIndex]);

    this.setState({ persons: persons })
    // this.setState ({
    //   persons: [
    //     {name: 'Zakwan Bhaiyat', age: 25},
    //     {name: event.target.value, age: 26},
    //     {name: 'Yahya Bhaiyat', age: 27}
    //   ]
    // })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) =>{
    // const newPersonsArray = this.state.persons.slice();
    const newPersonsArray = [...this.state.persons];
    newPersonsArray.splice(personIndex,1);
    this.setState({persons: newPersonsArray});
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover' :{
      //   backgroundColor: 'lightgreen'
      // }
    }

    let persons = null;

    if(this.state.showPersons){
        persons =(
        <div>
            {
              this.state.persons.map((person, index) => {
                  return <Person
                      click = {() => {this.deletePersonHandler(index)}}
                      name = {person.name} 
                      age = {person.age}
                      key = {person.id}
                      changed = {(event) => this.nameChangeHandler(event, person.id)}
                  />
              })
            }
        </div>
        );

        // buttonStyle.backgroundColor = "red";
        // buttonStyle[':hover'] = {
        //   backgroundColor: "salmon"
        // }
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push("red");
    }
    if(this.state.persons.length <=1){
      classes.push("bold");
    }

    return (
      // <StyleRoot>
         <div className="App">
       <h1> Hi, I'm a React App </h1>
       <p className= {classes.join(" ")} > React is fun </p>
       <button 
          style = {buttonStyle}
          onClick = {this.togglePersonHandler}> Toggle Persons 
       </button>
       {persons}
      </div>
      // </StyleRoot> 
     
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
// export default Radium(App);

// import React, { useState } from 'react';
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
