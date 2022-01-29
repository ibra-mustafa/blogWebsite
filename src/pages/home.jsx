import { useState } from 'react';
import { useEffect } from 'react';
import {getDocs,collection} from "firebase/firestore"
import { db } from './../fire';
function Home() {
    const [pList,setPList] = useState([])
    const postCollectionRef = collection(db,"posts")
    useEffect(()=>{
        const getPosts = async ()=>{
            const data = await getDocs(postCollectionRef)       
             setPList(data.docs.map((d)=>({...d.data(),id:d.id})));
        }
        getPosts()
    })
    
    return ( 
        <div>
            {pList.map((e)=>{
                
            })}
        </div>
     );
}

export default Home;