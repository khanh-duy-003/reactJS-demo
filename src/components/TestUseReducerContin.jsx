import { useReducer } from 'react'

//init State
const initState = {
  job: '',
  jobs: []
}

//Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

//Reducer
const reducer = (state, action) => {
  console.log('reducer running ...');
  
}

const TestUseReducerContin = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  const { job, jobs } = state
   
  return (
    <div style={{ padding: '0px 20px' }}>
        <h3>Todo</h3>
        <input placeholder="Enter todo..." value={job}/>
        <button>Add</button>
        <ul>
          {jobs.map((job, index) => (
             <li key={index}>{job} &times;</li>
          ))}
        </ul>
    </div>
  )
}

export default TestUseReducerContin