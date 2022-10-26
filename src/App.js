
import './App.css';
import TestUseEffect from './components/TestUseEffect';
import TestUseState from './components/TestUseState';
import TestUseStateTodolist from './components/TestUseStateTodolist';

function App() {

  return (
    <div className="App">
{/* ** userState */}
      {/* <TestUseState /> */}
{/* ** Two- way binding */}
      {/* <TestUseEffect /> */}
{/* ** Todo list */}
      <TestUseStateTodolist />
    </div>
  );
}

export default App;



/*  Mounted / Unmounted
import { useState } from 'react';
import Content from './Content';


function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
*/
