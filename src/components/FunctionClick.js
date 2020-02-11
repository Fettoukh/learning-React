import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>Click me => Function Click</button> 
        </div>
    )
}

// if we add () : clickHandler() it becomes a function call executed even if we dont click.

export default FunctionClick
