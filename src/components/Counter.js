import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count :  0
        }
    }
    
    increment(){
        this.setState({
            count : this.state.count + 1
            },
            () => {
            console.log('Callback value ', this.state.count) // Solves the problem and execute the methode after setState
                }
         )
        console.log(this.state.count) //  Executed before the setState
    }
    incrementfive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        // All setState Methodes are executed in one go
    }

    incrementFive()
    {
        for (var i =0 ; i<5 ; i++)
        {
            this.setState((prevState , props) => ({
                count : prevState.count + 1
            }))
        }
    }
    
    render() {
        return (
            <div>
                Count : {this.state.count}
                <button onClick={ () => this.increment()}>Increment</button>
                <button onClick={ () => this.incrementfive()}>Increment Five Times</button>
                <button onClick={ () => this.incrementFive()}>Increment Five Times Works</button> 
            </div>
        )
    }
}

export default Counter
