import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/main/NavigationBar";
import Home from "./containers/main/Home";
import Discover from "./containers/main/Discover";
import Gallery from "./containers/main/Gallery";
import Signup from "./containers/main/Signup";
import NoPage from "./components/Nopage";
import Product from "./containers/product/Product"
import Mypage from  "./containers/mypage/MypageContainer"

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />

        <Route path="/board">
          <Route exact path="wirte" /*element={}*/ />
          <Route exact path="update" /*element={}*/ />
          <Route exact path="read" /*element={}*/ />
          <Route exact path="delete" /*element={}*/ />
        </Route>

        <Route path="/product" element={<Product />}>
          <Route exact path="list" element={<Product />} />
          <Route exact path="detail" /*element={}*/ />
          <Route exact path="payment" /*element={}*/ />
        </Route>
        <Route path="/mypage" element={<Mypage />}>
          <Route exact path="buylist" element={<Mypage />} />
          <Route exact path="cart" /*element={}*/ />
          <Route exact path="ques" /*element={}*/ />
          <Route exact path="delete" /*element={}*/ />
          <Route exact path="passchange" /*element={}*/ />
          <Route exact path="shipaddr" /*element={}*/ />
          <Route exact path="payinfo" /*element={}*/ />
          <Route exact path="exit" /*element={}*/ />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
