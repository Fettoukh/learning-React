import React from 'react'

const Greet = (props) => { 
    return (
        <div>
            <h1>Hello {props.name} : Functional Component</h1>
            {props.children}
        </div>
    
    )
}

//export const Greet = () => <h1>Hello Amine</h1>;


export default Greet 