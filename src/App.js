import './App.css';
import {BrowserRouter as Router ,Routes ,Route ,Link} from "react-router-dom"
import CreatePost from "./pages/createPost"
import Home from "./pages/home"
import Login from "./pages/login"
import { useState } from 'react';
function App() {
  const [isAuth,setIsAuth] = useState(false)
  return(
  <Router>
    <nav>
      <Link className='link' to="">Home</Link>
      <Link className='link' to="login">Login</Link>
      <Link className='link' to="createPost">Create</Link>
    </nav>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/createPost" element={<CreatePost/>}/>
          {!isAuth ? <Route path="/login" element={<Login setIsAuth ={setIsAuth}/>}/> : <button>Logout</button>}
      </Routes>
  </Router>)
}

export default App;
