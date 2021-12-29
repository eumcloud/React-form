import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import './index.css';
import App from './App';


import reportWebVitals from './reportWebVitals';
import Home from './containers/main/Home';
// import Board from "./containers/Board";
// import Product from "./containers/Product";
import Mypage from "./containers/Mypage";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={Home} />

        {/* <Route path="Board" component={Board} /> */}
        {/* <Route path="Product" component={Product} /> */}
        <Route path="Mypage" component={Mypage} />
        
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
