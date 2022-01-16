import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

<<<<<<< HEAD
const store = createStore(rootReducer, composeWithDevTools()); //make store 
console.log(store.getState()); //store state pring to console
ReactDOM.render(
<Provider store ={store} >
  {/* // <React.StrictMode> */}
    <App />
  {/* //</React.StrictMode> */}
  </Provider>
  ,document.getElementById('root')
=======
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> baa8dabcfb04fefdef0f38d4bdac1299b30092e7
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
