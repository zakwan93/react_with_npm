import React from 'react';
// import Radium from 'radium'
import './Person.css'

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '400px',
    //         backgroundColor: '#eee'
    //     }
    // }
    return (
        <div className="Person"  >
            <p onClick={props.click}> I'm {props.name}! and I'm {props.age} years old. </p>
            <p> {props.children} </p>
            <input type = "text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;

// export default Radium(person);