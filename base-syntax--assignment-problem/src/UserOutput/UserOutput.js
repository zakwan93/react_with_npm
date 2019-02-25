import React from 'react';

const output = (props) => {
    return(
        <div>
            <p onClick = {props.click}> I am {props.username} </p>
            <p> I'm getting better at {props.programinglanguage} </p>
        </div>
    )
}

export default output;