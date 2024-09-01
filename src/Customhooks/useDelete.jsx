import React from 'react'
import { useState,useEffect} from 'react'
export default function useDelete() {
    
    const [deletepost,setDeletepost]=useState(null)
    // const [isPending,setisPending]=useState(true)
    const [error,setError]=useState(null)
     const deletedata=(url,Id)=>{
        fetch(`${url}/${Id}`,{
            method:"DELETE"
        })
        // .then(res=>res.json())
        .then(data=>{
     setDeletepost(data)
    }

)
.catch(error=>console.log(error))
    }
    return {deletedata,deletepost,setDeletepost,error}
}
