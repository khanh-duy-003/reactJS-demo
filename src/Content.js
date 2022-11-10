import { useEffect, useState } from 'react';



function Content () {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview =URL.createObjectURL(file)

        setAvatar(file)
    }
 
     return (
         <div>
             <input
                type="file"
                onChange={handlePreviewAvatar}
             />

             {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
             )}
         </div>
     )
 }

/*
function Content () {
   const [count, setCount] = useState(1)

    useEffect(() => {
        console.log(`Mount`);

        return () => {
            console.log(`Cleanup`);
        }
    },[count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count +1)}>Click me!</button>
        </div>
    )
}*/


/*
function Content () {
    const[countdown, setCountdown] = useState(180)

    // setInterval
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000);

        return () => clearInterval(timerId)
    },[])

    //setTimeout
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown - 1)
    //     }, 1000);
    // },[countdown])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}*/


/*
function Content () {
    const[width, setWdith] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWdith(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}*/



/*
const tabs = ['posts', 'comments', 'albums']

function Content () {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    // console.log(type);
    // useEffect(() => {
    //     document.title = title
    // })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            // console.log(posts);
            setPosts(posts)
        })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY >= 200){
                setShowGoToTop(true)
            }
            else{
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        console.log('a')

        //cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('b')
        }

    }, [])


  return (
    <div>
        {tabs.map(tab => (
            <button key={tab} 
                style = {type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333',
                } : {}}
                onClick={() => setType(tab)}>
                    {tab}
            </button>
        ))}


        <input 
            value={title}
            onChange = {e => setTitle(e.target.value)}
        />
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </ul>
        {showGoToTop && (
            <button style={{position: 'fixed', right: 20, bottom: 20}}>
                Go to top
            </button>
        )}
    </div>
  )
}*/

export default Content