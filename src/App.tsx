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
        <div style={{ marginTop: '10vh' }}>
          <Routes>
            <Route path="/" element={<PrivateRoute childrenComp={<Landing />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PrivateRoute childrenComp={<Landing />} />} />
          </Routes>
      </div>
      </Router>
  )
}

export default App
