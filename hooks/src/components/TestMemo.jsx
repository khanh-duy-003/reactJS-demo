import { useState, memo, useCallback } from 'react'
import ContentComponents from './ContentComponents'

const TestMemo = () => {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount +1)
    }, [])

  return (
    <div style={{ padding: '10px 32px'}}>
        <ContentComponents onIncrease = {handleIncrease} />
        <h1>{count}</h1>
    </div>
  )
}

export default TestMemo