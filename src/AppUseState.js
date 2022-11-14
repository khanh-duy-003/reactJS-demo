
import './App.css';
// import TestMemo from './components/TestMemo';
// import TestUseMemo from './components/TestUseMemo';
// import TestUseReducer from './components/TestUseReducer';
import TestUseReducerContin from './components/TestUseReducerContin';
// import TestUseEffect from './components/TestUseEffect';
// import TestUseRef from './components/TestUseRef';
// import TestUseState from './components/TestUseState';
// import TestUseStateTodolist from './components/TestUseStateTodolist';

function AppUseState() {

  return (
    <div className="App">
{/* ** userState */}
      {/* <TestUseState /> */}
{/* ** Two- way binding */}
      {/* <TestUseEffect /> */}
{/* ** Todo list */}
      {/* <TestUseStateTodolist /> */}

      {/* <TestUseRef /> */}
      {/* <TestMemo /> */}
      {/* <TestUseMemo /> */}
      {/* <TestUseReducer /> */}
      <TestUseReducerContin />
    </div>
  );
}

export default AppUseState;



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
