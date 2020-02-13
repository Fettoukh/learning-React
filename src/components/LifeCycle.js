import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Amine'
        }
        console.log('LifeCycle Contructor')
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log('lifeCycle getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycle ComponentDidMount')
    }

    /*shouldComponentUpdate() {
        console.log('lifeCycle shouldComponentUpdate')
        return true
    }*/

    /*getSnapshotBeforeUpdate(prevProps , prevState)
    {
       console.log('LifeCycle getSnapShotBeforeUpdate') 
       return null ;
    }*/

    /*componentDidUpdate() {
        console.log("lifeCycle ComponentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name : 'Codevolution'
        })
    }*/

    render() {
        console.log('LifeCycle Render')
        return (
            <div>
                <LifeCycleChild></LifeCycleChild>
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}

export default LifeCycle

