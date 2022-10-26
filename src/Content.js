import { useEffect, useState } from 'react';



function Content () {
    const [title, setTitle] = useState('')

    // useEffect(() => {
    //     document.title = title
    // })

    fetch('http://localhost:8089/useEffect')
        .then(res => res.json())
        .then(posts => {
            console.log(posts);
        })

  return (
    <div>
        <input 
            value={title}
            onChange = {e => setTitle(e.target.value)}
        />
    </div>
  )
}

export default Content