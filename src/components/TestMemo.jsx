import { useState, memo } from 'react'
import ContentComponents from './ContentComponents'

const TestMemo = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count +1)
    }

  return (
    <div style={{ padding: '10px 32px'}}>
        <ContentComponents count = {count} />
        <h1>{count}</h1>
        <button onClick={increase}>Click me!</button>
    </div>
  )
}

export default TestMemo