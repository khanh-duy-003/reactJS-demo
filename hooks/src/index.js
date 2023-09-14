import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppUseState from './AppUseState';

//Fake comments
function editComment(id) {

  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}

editComment(1)
editComment(2)
editComment(3)

ReactDOM.render(
  <React.StrictMode>
    <AppUseState />
  </React.StrictMode>,
  document.getElementById('root')
);
