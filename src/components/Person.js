import React from 'react'

function Person(props) {
    return (
        <div>
            <h2>{props.person.name} is a {props.person.nature}</h2>
        </div>
    )
}

export default Person
