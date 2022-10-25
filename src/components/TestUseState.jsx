import { useState } from 'react';


const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

const TestUseState = () => {
  const [checked, setChecked] = useState([])

  console.log(checked)

  const handleSubmit = () => {
    console.log({ id: checked })
  }

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked){
        return checked.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
  }

  return (
    <div>
      {courses.map(courses => (
        <div key ={ courses.id }>
          <input type="checkbox" checked = {checked.includes(courses.id)} onChange={() => handleCheck(courses.id)}/> {courses.name}
        </div>
      ))}


      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}


/* radio button
function App() {
  const [checked, setChecked] = useState(2)

  const handleSubmit = () => {
    console.log({ id: checked })
  }

  return (
    <div className="App">
      {courses.map(courses => (
        <div key ={ courses.id }>
          <input type="radio" checked = {checked === courses.id} onChange={() => setChecked(courses.id)}/> {courses.name}
        </div>
      ))}


      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
*/


/* Two-way binding String
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    //CALL API
    console.log({
      name,
      email
    })
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
      /><br></br>
    <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
*/

/*  randoom
const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard'
]

function App() {
  const [gift, setGift] = useState()

  const randomGift =() => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index])
  }

  return (
    <div className="App">
      <h1>{gift || 'Chưa có phân thưởng'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}*/





/*
//   Increase
const orders = [100, 200, 300]


function App() {
  // chuỗi
  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 12,
    address: 'Ha Noi, VN'
  })

    const handleUpdate = () => {
    setInfo(prev => ({
      ...prev,
      bio : 'Yeu mau hong ^^'
    }))
  }

  // const handleUpdate = () => {
  //   setInfo({
  //     ...info,
  //     bio : 'Yeu mau hong ^^'
  //   })
  // }

  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );

  /*   Increase
  const [counter, setCouter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    return total
  })

  const handleIncrease = () => {
    setCouter(counter + 1)
  }

  // const handleIncrease = () => {
  //   setCouter(prevState => prevState + 1)
  // }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
  
}
*/
export default TestUseState;
