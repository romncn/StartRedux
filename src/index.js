// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import { createStore, combineReducers, applyMiddleware } from "redux";
//combineReducers เพื่อรวม reducer ที่ต่างกันลงใน 1 store
//applyMiddleware ใช้ในการดู action อะไรที่กำลังทำงานที่จะส่งไปที่ reducer

const initialStateEmployee = {
  result: 15000,
  value: []
}
const initialStateUser = {
  name: 'Rommy',
  age: 22
}
//reducer
const employeeReducer = (state = initialStateEmployee, action) => {
  switch (action.type) {
    case "ADD":
      // state += action.payload;
      state = {
        ...state,// result: state.result,
        // value: state.value

        result: state.result += action.payload,
        value: [...state.value, action.payload]
      }
      break;
    case "SUBTRACT":
      // state -= action.payload;
      state = {
        ...state,

        result: state.result -= action.payload,
        value: [...state.value, action.payload]
      }
      break;
    default:
  }
  return state;
}
const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,// result: state.result,
        // value: state.value
        name: action.payload
      }
      break;
    case "setAge":
      // state -= action.payload;
      state = {
        ...state,
        age: action.payload
      }
      break;
    default:
  }
  return state;
}

const mylogger = (store) => (next) => (action) =>{
  console.log("Log Action",action);
  next(action);
}

//store
const store = createStore(combineReducers({ employeeReducer, userReducer }),{},applyMiddleware(mylogger));
// const store = createStore(reducer, 15000);

//subscribe
store.subscribe(() => {
  console.log("Update Store:", store.getState());
})
//action
store.dispatch({
  type: "ADD",
  payload: 500
})
store.dispatch({
  type: "setName",
  payload: "Gunny"
})
store.dispatch({
  type: "setAge",
  payload: 23
})



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

