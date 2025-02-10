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
import Navbar from './components/navbar/navbar';

function App() {
  return(
      <Router>
        <Navbar />
        <Routes>
                <Route path="/" element={<PrivateRoute childrenComp={<Landing />}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PrivateRoute childrenComp={<Landing />}/>} />
        </Routes>
      </Router>
  )
}

export default App
