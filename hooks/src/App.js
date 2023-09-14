
import './App.css';
import { useState } from 'react';
import TestUseLayoutEffect from './TestUseLayoutEffect';


function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <TestUseLayoutEffect />}
    </div>
  );
}

export default App;
