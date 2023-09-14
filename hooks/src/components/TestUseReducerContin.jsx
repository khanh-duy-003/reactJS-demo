import { useReducer, useRef } from 'react'

//init State
const initState = {
  job: '',
  jobs: []
}

//Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

//Reducer
const reducer = (state, action) => {
  let newState

  switch (action.type) {
    case SET_JOB:
      newState =  {
        ...state,
        job: action.payload
      }  
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]

      newJobs.splice(action.payload, 1)

      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default:
      throw new Error('Invalid action')
  }

  return newState
}

const TestUseReducerContin = () => {
  const [state, dispatch] = useReducer(reducer, initState)

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