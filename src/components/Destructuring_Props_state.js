import React, { Component } from 'react'

//Methode 1 => function : 

const Destructuring_props_state = ({name , lastname}) => { 
    return (
        <div>
            <h1>Hello {name} {lastname}</h1>
        </div>
    
    )
}

//Methode 2 => function :

/*const Destructuring_props_state = (props) => { 
    const {name , lastname} = props
    return (
        <div>
            <h1>Hello {name} {lastname}</h1>
        </div>
    
    )
}*/

//Methode => Class
/*class Destructuring_props_state extends Component{
    render()
    {
        const {name , lastname} = this.props
        //const {state1 , state2} = this.state
        return (
            <h1>
                Welcome {name} {lastname}
            </h1>
        )
    }
}*/



export default Destructuring_props_state 