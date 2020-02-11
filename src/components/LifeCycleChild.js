import React, { Component } from 'react'

class LifeCycleChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Amine'
        }
        console.log('LifeCycleChild Contructor')
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleChild getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleChild ComponentDidMount')
    }

    shouldComponentUpdate() {
        console.log('lifeCycleChild shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps , prevState)
    {
       console.log('LifeCycleChild getSnapShotBeforeUpdate') 
       return null ;
    }

    componentDidUpdate() {
        console.log("lifeCycleChild ComponentDidUpdate")
    }

    render() {
        console.log('LifeCycleChild Render')
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleChild

