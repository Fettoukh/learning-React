import React from 'react'

const Hello = () => {
    /*return (
        <div id='hello' class = 'hello'>
            <h1>Hello Amine</h1>
        </div>
    )*/

    return React.createElement(
        'div' ,
        {id : "hello" , className : "hello"} , // attribute
        React.createElement   ('h1' , null , 'Hello World'))

}

export default Hello 