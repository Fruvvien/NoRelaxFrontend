import './App.css'
import React, { useState } from 'react'
import Login from './pages/login/login'
import Register from './pages/register/register'

function App() {
const [isLoginPage, setIsLoginPage] = useState(true)
const [isRegisterPage, setIsRegisterPage] = useState(false)
    if(isLoginPage === true){
      return (
      <>
        <Login></Login>
      </>
      )
    }
    if(isRegisterPage === true){
      return (
      <>
        <Register></Register>
      </>
      )
    }
}

export default App
