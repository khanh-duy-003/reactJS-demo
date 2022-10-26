import React, { useState } from 'react'

const TestUseStateTodolist = () => {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))

        return storageJobs ?? []
    })

    const handleSubmit = () => {
        setJobs(prev => {
            const newjobs = [...prev, job]
            
            //chuyển một Object sang JSON
            const jsonJobs = JSON.stringify(newjobs)
            //save vào localStorage trong Application
            localStorage.setItem('jobs', jsonJobs)

            console.log(jsonJobs);

            return newjobs
        })
        setJob('')


    }

  return (
    <div>
        <input value={job} onChange={e => setJob(e.target.value)} />
        <button onClick={handleSubmit}>add</button>

        <ul>
            {jobs.map((job, index) => (
                <li key={index}>{job}</li>
            ))}
        </ul>
    </div>
  )
}

export default TestUseStateTodolist