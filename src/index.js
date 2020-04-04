// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state += action.payload;
      break;
    case "SUBTRACT":
      state -= action.payload;
      break;
    default:
  }
  return state;
}
const store = createStore(reducer, 15000);

store.subscribe(()=>{
  console.log("Update Store:",store.getState());
})
store.dispatch({
  type: "ADD",
  payload: 500
// })
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 1000
 })
