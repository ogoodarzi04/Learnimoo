import React from 'react'
import { useState,useEffect} from 'react'
export default function useFetch() {
    const [post,setPost]=useState([])
    const [isPending,setisPending]=useState(true)
    const [err,setErr]=useState(null)
    const getAllDatas=(url)=>{
    fetch(url)
    .then(res=>res.json())
    .then((data=>{
       setPost(data)
            setisPending(false)
           setErr(null)
    })).catch((err)=>{
       setErr(true)
    })
    }
  
    return {getAllDatas,post,isPending,err}
}
