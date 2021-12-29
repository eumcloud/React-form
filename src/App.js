import React         from 'react';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import CssBaseline   from '@material-ui/core/CssBaseline';
import NavigationBar from './components/main/NavigationBar';
import GridLayout    from './containers/main/GridLayout';
import Container     from '@material-ui/core/Container';
import Footer        from './components/main/Footer';
import Home from "./containers/main/Home";
import Board from "./containers/board/BoardContainer";
import Product from "./containers/product/ProductContainer";
import Mypage from "./containers/mypage/MypageContainer";

function App() {
  return (
     <div className="App">
       <CssBaseline />
         <NavigationBar />
          
           <Router> {/* = BrowseRouter as Router */}
            
              <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/board" element={<Board />} />
                <Route exact path="/product" element={<Product />} />
                <Route exact path="/mypage" element={<Mypage />} />
                <Route component={<div>Page Not Found</div>} />
              </Routes>
            {/* <Route path="/" component={Home} >
              <Route exact path="/" componeht={Board} />
              <Route exact path="/" componeht={Product} />
              <Route exact path="/" componeht={Mypage} />

              <Route path="/board" component={Board} />
              <Route path="/product" component={Product} />
              <Route path="/mypage" component={Mypage} />
              
            </Route> */}
          </Router> 
        <Footer />
      </div>
  );
}

export default App;
