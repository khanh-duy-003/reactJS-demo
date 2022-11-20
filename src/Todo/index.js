import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './actions'
import logger from './logger'

const TestUseReducerContin = () => {
  const [state, dispatch] = useReducer(logger(reducer), initState)

  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }
   
  return (
    <div style={{ padding: '0px 20px' }}>
        <h3>Todo</h3>
        <input 
          ref={inputRef}
          placeholder="Enter todo..." 
          value={job} 
          onChange={e => {
            dispatch(setJob(e.target.value))
          }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
             <li key={index}>
              {job}
              <span onClick={() => dispatch(deleteJob(index))}>
                &times;
              </span>
             </li>
          ))}
        </ul>
    </div>
  )
}

export default TestUseReducerContin