import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
        this.AnotherGreetParent = this.AnotherGreetParent.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }

    AnotherGreetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)

    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}  AnotherGreetHandler={this.AnotherGreetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
