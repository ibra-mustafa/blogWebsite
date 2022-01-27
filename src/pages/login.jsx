import {auth, provider} from "../fire"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom"

function Login({setIsAuth}) {
    let nav = useNavigate()

    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((res)=>{
            localStorage.setItem("isAuth",true)
            setIsAuth(true)
            nav("/")
        })
    }
    return ( <div className="login">
        <p>Sign in with Google</p>
        <button className="login-with-google" onClick={signInWithGoogle}>
            Sign In With Google
        </button>
    </div> );
}

export default Login;