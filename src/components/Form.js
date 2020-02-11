import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic : 'react'
        }
    }

    // event => is passed as a parameter to the handler
    // from this event we can extract the value of the input element using event.target.value
    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handlerCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange= (event) => {
        this.setState({
            topic : event.target.value
        })
    }


    
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handlerCommentsChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default Form
