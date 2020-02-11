import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

        return (            
            this.state.isLoggedIn ?
            (<div>Welcome Amine</div>) 
            : 
            (<div>Welcome Guest</div>)
        )

    //______________________________________________________________
        /*let message
        if(this.state.isLoggedIn){
            message = <div>Welcome Amine</div>
        }
        else{
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>*/

    //____________________________________________________________
        /*if(this.state.isLoggedIn){
            return (
                <div>Welcome Amine</div>
            )
        }
        else{
            return (
                <div>
                    <div>Welcome Guest</div>
                </div>
                )
        }*/
        
        
    }
}

export default ConditionalRendering
