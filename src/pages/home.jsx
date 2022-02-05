import { useState } from 'react';
import { useEffect } from 'react';
import {getDocs,collection, deleteDoc, doc } from "firebase/firestore"
import { db } from './../fire';
function Home() {
    const [pList,setPList] = useState([])
    const postCollectionRef = collection(db,"posts")
    useEffect(()=>{
        const getPosts = async ()=>{
            const data = await getDocs(postCollectionRef)       
             setPList(data.docs.map((d)=>({d,...d.data()})));
        }
        getPosts()
    },[])

    const deleteP = async (i)=>{
        const pdoc = doc(db,"posts",i)
        await deleteDoc(pdoc)
    }
    
    return ( 
        <div>
            {pList.map((e)=>{
                return(<div>
                    {console.log(e.d._key.path.segments[6])}
                <div>
                {e.title}
                </div>
                <div>
                {e.content}
                </div>
                <div>
                {e.author.name}
                <button onClick={()=>deleteP(e.d._key.path.segments[6])}>
                    X
                </button>
                </div>
                </div>
                )})}
        </div>
     );
}

export default Home;