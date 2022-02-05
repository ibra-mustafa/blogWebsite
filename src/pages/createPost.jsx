import React, { useEffect, useState } from "react";
import {addDoc, collection} from "firebase/firestore"
import { db } from './../fire';
import {auth} from './../fire';
import { useNavigate } from "react-router-dom"

function Create({isAuth}) {
    const [pTitle,setpTitle] = useState("")
    const [pContent, setpContent] = useState("")
    const postCollectionRef = collection(db,"posts")
    let nav = useNavigate()
    const createPost = async ()=>{
        await addDoc(postCollectionRef,{title:pTitle,
             content:pContent, 
             author:{name: auth.currentUser.displayName ,
                id: auth.currentUser.uid}})
                nav("/")

    }
    useEffect(()=>{
        if(!isAuth){
            nav("/login")
        }
    })  

    return ( 
        <div className="createPost">
            <h1>Create A New Post</h1>
            <div className="createPostContainer">
                <label htmlFor="title">Your Post Title:</label>
                <input type="text" placeholder="Title Goes Here" onChange={(e)=>{setpTitle(e.target.value)}} />

                <div className="postinput">
                <label htmlFor="postContent" >Post:</label>
                <div className="postArea">
                    <textarea placeholder="Your Post Goes Here"  onChange={(e)=>{setpContent(e.target.value)}}></textarea>
                    <button onClick={createPost}>Submit Post</button>
                </div>
                </div>
            </div>
        </div>
        );
}

export default Create;