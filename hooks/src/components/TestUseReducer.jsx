import { useReducer } from 'react'

//init State
const initState = 0

//Actions
const UP_ACTION = 'up'
const DOWN_ACITON = 'down'

//Reducer
const reducer = (state, action) => {
  console.log('reducer running ...');
  switch (action) {
    case UP_ACTION:
        return state + 1
      case DOWN_ACITON:
        return state - 1
    default:
      throw new Error('Invalid action');
  }
}

const TestUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style={{ padding: '0px 20px' }}>
        <h1>{count}</h1>
        <button onClick={() => dispatch(DOWN_ACITON)}>Down</button>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>

    </div>
  )
}

export default TestUseReducer