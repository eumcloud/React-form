import React                   from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar           from './components/main/NavigationBar';
import GridLayout              from './containers/main/GridLayout';
import Discover from './containers/main/Discover';
import Gallery from './containers/main/Gallery';
import Signup from './containers/main/Signup';


const Router = () => {
    return (
      <BrowserRouter>
        <NavigationBar />
          <Routes>
             <Route exact path="/" element={<GridLayout />} />
             <Route exact path="/discover" element={<Discover />} />
             <Route exact path="/gallery" element={<Gallery />} />
             <Route exact path="/signup" element={<Signup />} />
         </Routes>
      </BrowserRouter>
    );
  };
  


  export default Router;
