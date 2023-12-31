import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div class="Person">
            <p>Im a {props.name} ! and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
         </div>
     )
}

export default person;