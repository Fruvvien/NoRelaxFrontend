import './App.css'
import React, { useState } from 'react'
import Login from './pages/login/login'
import Register from './pages/register/register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from './util/privateRoute';
import Landing from './pages/landing/landing';
import { useAppDispatch } from './hooks/app.hooks';
import { getToken } from './redux/store/userReduxState/userSlice';
import RightSideBar from './components/navbar/motionRightSideNavbar/rightSideBar/rightSideBar';
import DrinksOrderList from './pages/drinksFoodsOrderList/drinksOrder/drinksOrderList';
import Variants from './components/navbar/moitonSideNavbar/variants/variant';
import OpeningHours from './pages/openingHours/openingHours';

function App() {
 const dispatch = useAppDispatch();
  dispatch(getToken());
  return(
      <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute childrenComp={<><Landing /><Variants/><RightSideBar /></>} />} />
            <Route path="/login" element={<><Login /><Variants/></>} />
            <Route path="/register" element={<><Register /><Variants/></>} />
            <Route path="/orderMenu/drinksOrderList" element={<PrivateRoute childrenComp={<><DrinksOrderList/><Variants/><RightSideBar /></>} />}/> 
            <Route path="/openingHours" element={<><OpeningHours/><Variants/><RightSideBar /></>} />
            <Route path="*" element={<PrivateRoute childrenComp={<><Landing/><Variants/><RightSideBar /></>} />} />
          </Routes>
      </Router>
  )
}

export default App
