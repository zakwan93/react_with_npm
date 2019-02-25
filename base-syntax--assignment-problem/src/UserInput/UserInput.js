import React from 'react';
// import UserOutput from './UserOutput/UserOutput'

const input = (props) => {
    return(
        <div>
            <input type="text" onChange={props.newUserName} value={props.currentName } />
        </div>
    )
}

export default input;