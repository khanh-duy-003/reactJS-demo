
import './App.css';
import { useState } from 'react';
import ContentChat from './ContentChat';


function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <ContentChat />}
    </div>
  );
}

export default App;
