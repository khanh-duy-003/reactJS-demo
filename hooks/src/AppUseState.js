
import './App.css';
// import TestMemo from './components/TestMemo';
// import TestUseMemo from './components/TestUseMemo';
// import TestUseReducer from './components/TestUseReducer';
// import TestUseReducerContin from './components/TestUseReducerContin';
// import TestUseEffect from './components/TestUseEffect';
// import TestUseRef from './components/TestUseRef';
// import TestUseState from './components/TestUseState';
// import TestUseStateTodolist from './components/TestUseStateTodolist';
// import ToDoApp from './Todo';
// import TestReactContext from './components/TestReactContext';
// import { ThemeProvider } from './components/ThemeProvider'
import './App.css'
// import TestGlobalState from './components/TestGlobalState';
import TestUseImperativeHandle from './components/TestUseImperativeHandle';
// import { StoreProvider } from './store';

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
      {/* <TestUseReducerContin /> */}
      {/* <ToDoApp /> */}
      {/* <ThemeProvider>
        <TestReactContext />
      </ThemeProvider> */}

      {/* <StoreProvider>
        <TestGlobalState />
      </StoreProvider> */}

      <TestUseImperativeHandle />

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
