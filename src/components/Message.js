import React , {Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message :'Welcome Visitor',
            buttonMessage : 'logIn'
        }
    }

    changeMessage(){
        if(this.state.buttonMessage === 'logIn')
        {
            this.setState({
                message : 'Welcome Back',
                buttonMessage : 'Logout'
            })
        }
        else
        {
            this.setState({
                message : 'Welcome Visitor',
                buttonMessage : 'logIn'
            })
        }
    }

    render(){    
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.buttonMessage}</button>
            </div>
            
        )
    }
}

export default Message