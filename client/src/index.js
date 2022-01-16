import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from "redux"; 
import { Provider } from "react-redux";
import rootReducer from "./context/"
import { composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools()); //make store 
console.log(store.getState()); //store state pring to console
ReactDOM.render(
<Provider store ={store} >
  {/* // <React.StrictMode> */}
    <App />
  {/* //</React.StrictMode> */}
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

