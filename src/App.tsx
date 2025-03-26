import './App.css'
import React, { useEffect, useState } from 'react'
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
import { useAppDispatch} from './hooks/app.hooks';
import { getToken } from './redux/store/userReduxState/userSlice';
import DrinksOrderList from './pages/drinksFoodsOrderList/drinksOrder/drinksOrderList';
import Variants from './components/navbar/moitonSideNavbar/variants/variant';
import OpeningHours from './pages/openingHours/openingHours';
import ShoppingCart from './pages/shoppingCart/shoppingCart';
import AboutUs from './pages/aboutUs/aboutUs';
import { MainLayout } from './util/mainLayout';
import Navbar from './components/navbar/navbar';
import FoodsOrderList from './pages/drinksFoodsOrderList/foodsOrder/foodsOrderList';
import { HttpClientRequests } from './services/http-client-requests';
import Reservation from './pages/reservation/reservation';

function App() {
  useEffect(() => {
    async function isUserLoggedIn() {
      const userId = localStorage.getItem("userId");
      if (userId) {
        await HttpClientRequests.getUser("user", userId);
      }
    }

    isUserLoggedIn();
  }, []);


  const dispatch = useAppDispatch();
  dispatch(getToken());
  return(
      <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute childrenComp={<MainLayout><Landing /></MainLayout>} />} />
            <Route path="/login" element={<><Login /><Variants/><Navbar/></>} />
            <Route path="/register" element={<><Register /><Variants/><Navbar/></>} />
            <Route path="/orderMenu/drinksOrderList" element={<PrivateRoute childrenComp={<MainLayout><DrinksOrderList/></MainLayout>} />}/> 
            <Route path="/orderMenu/foodsOrderList" element={<PrivateRoute childrenComp={<MainLayout><FoodsOrderList/></MainLayout>} />}/> 
            <Route path="/openingHours" element={<><OpeningHours/><Variants/><Navbar/></>} />
            <Route path="/openingHoursWithAccount" element={<PrivateRoute childrenComp={<MainLayout><OpeningHours/></MainLayout>} />}/> 
            <Route path="/shoppingCart" element={<PrivateRoute childrenComp ={<MainLayout><ShoppingCart/></MainLayout>}></PrivateRoute>} />
            <Route path="/reserve" element={<PrivateRoute childrenComp={<MainLayout><Reservation></Reservation></MainLayout>}></PrivateRoute>}/>
            <Route path="*" element={<PrivateRoute childrenComp={<MainLayout><Landing/></MainLayout>} />} />
          </Routes>
      </Router>
  )
}

export default App
