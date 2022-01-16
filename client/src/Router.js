<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/main/NavigationBar";
import Home from "./containers/main/Home";
import Discover from "./containers/main/Discover";
import Gallery from "./containers/main/Gallery";
import Signup from "./containers/main/Signup";
import NoPage from "./components/Nopage";
import Product from "./containers/product/Product"
import ProductDetail from "./containers/product/ProductDetail"
import Mypage from  "./containers/mypage/MypageContainer"
import BoardLayout from "./components/board/BoardLayout";
import BoardPage from "./components/board/BoardPage";
import BoardDetail from "./components/board/BoardDetail";
import BoardWrite from "./components/board/BoardWrite";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardSearch from "./components/board/BoardSearch";
import Buylist from "./containers/mypage/Buylist";
import CartLst from "./components/mypage/cart/CartLst";
import ChPassword from "./components/mypage/passchange/ChPassword";
import Payinfo from "./components/mypage/payinfo/Payinfo";
import QForm from "./components/mypage/ques/QForm";
import Qlist from "./components/mypage/ques/Qlist";
import Secession from "./components/mypage/secession/Secession";
import ShpAddr from "./components/mypage/shpaddr/ShpAddr";
=======
import React                   from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar           from './components/main/NavigationBar';
import GridLayout              from './containers/main/GridLayout';
import Discover from './containers/main/Discover';
import Gallery from './containers/main/Gallery';
>>>>>>> baa8dabcfb04fefdef0f38d4bdac1299b30092e7


const Router = () => {
    return (
      <BrowserRouter>
        <NavigationBar />
          <Routes>
             <Route exact path="/" element={<GridLayout />} />
             <Route exact path="/discover" element={<Discover />} />
             <Route exact path="/gallery" element={<Gallery />} />
             <Route exact path="/" element={<GridLayout />} />
         </Routes>
      </BrowserRouter>
    );
  };
  

<<<<<<< HEAD
        <Route path="/board" element={<BoardLayout />}>
          <Route path="page/:page" element={<BoardPage />} />
          <Route path="search" element={<BoardSearch />} />
          <Route path="write" element={<BoardWrite />} />
          <Route path="update/:update" element={<BoardUpdate />} />
          <Route path="detail" element={<BoardDetail />} />
          <Route path="detail/:detail" element={<BoardDetail />} />
         
        </Route>

        <Route path="/product" element={<Product />} />
          <Route exact path="list" element={<Product />} />
          <Route exact path="product/productdetail/:id" element={<ProductDetail />} />
          

          <Route path="/mypage" element={<Mypage />} /> 
          <Route path="mypage/buylist" element={<Buylist />} />
          <Route path="mypage/cart" element={<CartLst />} />
          <Route path="mypage/queslist" element={<Qlist />} />
		      <Route path="mypage/quesform" element={<QForm />} />
          <Route path="/mypage/delete" /*element={}*/ />
          <Route path="/mypage/passchange" element={<ChPassword />} />
          <Route path="/mypage/shipaddr"  element={<ShpAddr />} />
          <Route path="/mypage/payinfo" element={<Payinfo />} />
          <Route path="/mypage/secession" element={<Secession />}  />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
=======

  export default Router;
>>>>>>> baa8dabcfb04fefdef0f38d4bdac1299b30092e7
