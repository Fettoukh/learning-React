import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick= {props.greetHandler}>Greet Parent</button>
            <button onClick= {() => {props.AnotherGreetHandler('child')}}>Greet Parent with parameters</button>
        </div>
    )
}

export default ChildComponent

