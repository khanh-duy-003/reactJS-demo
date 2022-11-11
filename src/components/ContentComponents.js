import { memo } from 'react'

function ContentComponents ({onIncrease}){
    return (
        <>
            <h2>Hello</h2>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

export default memo(ContentComponents)