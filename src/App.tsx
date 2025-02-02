import './App.css'
import React, { useState } from 'react'
import Login from './pages/login/login'
import Register from './pages/register/register'

function App() {
const [loginOrRegister, setIsLoginPage] = useState(true)
    if(loginOrRegister === true){
      return (
      <>
        <Login></Login>
      </>
      )
    }
    if(loginOrRegister === false){
      return (
      <>
        <Register></Register>
      </>
      )
    }
}

export default App
