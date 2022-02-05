import './App.css';
import {BrowserRouter as Router ,Routes ,Route ,Link} from "react-router-dom"
import CreatePost from "./pages/createPost"
import Home from "./pages/home"
import Login from "./pages/login"
import { useState } from 'react';
import {signOut} from "firebase/auth"
import {auth} from "./fire"
import React from "react";

function App() {
  const [isAuth,setIsAuth] = useState(false)
  const signout = ()=>{
    signOut(auth).then((res)=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "./login"
    })
  }

  return(
  <Router>
    <nav>
      <Link className='link' to="">Home</Link>
      {!isAuth ? <Link className='link' to="login">Login</Link> :
      <>
      <Link className='link' to="createPost">Create</Link>
      <span onClick={signout} className='link'>Logout</span>
      </> 
      }
    </nav>
      <Routes>
          <Route path="/" element={<Home isAuth = {isAuth}/>}/>
          <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>}/>
          <Route path="/login" element={<Login setIsAuth ={setIsAuth}/>}/>
      </Routes>
  </Router>)
}

export default App;
