import React                   from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar           from './components/main/NavigationBar';
import GridLayout              from './containers/main/GridLayout';
import Discover from './containers/main/Discover';

const Router = () => {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<GridLayout />} />
          <Route path="/page2" element={<Discover />} />
        </Routes>
      </BrowserRouter>
    );
  };
  


  export default Router;
