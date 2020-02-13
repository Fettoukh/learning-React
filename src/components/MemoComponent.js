import React from 'react'

function MemoComponent({name}) { // Distructuring props
    console.log("****************Memo Render****************")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)
