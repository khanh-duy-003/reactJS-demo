import { memo } from 'react'

function ContentComponents ({count}){
    return (
        <h2>Hello {count}</h2>
    )
}

export default memo(ContentComponents)