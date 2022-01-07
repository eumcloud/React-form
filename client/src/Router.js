import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/main/NavigationBar";
import GridLayout from "./containers/main/GridLayout";
import Discover from "./containers/main/Discover";
import Gallery from "./containers/main/Gallery";
import Signup from "./containers/main/Signup";
import NoPage from "./components/Nopage";

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<GridLayout />} />
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

        <Route path="/product">
          <Route exact path="list" /*element={}*/ />
          <Route exact path="detail" /*element={}*/ />
          <Route exact path="payment" /*element={}*/ />
        </Route>
        <Route path="/mypage">
          <Route exact path="buylist" /*element={}*/ />
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
