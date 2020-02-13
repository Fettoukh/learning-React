import React, { Component } from 'react'
import {UserConsumer} from './UserContext'

export class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                   (value) => {
                        return <div>Hello {value} </div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC
