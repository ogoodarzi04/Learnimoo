import React from 'react'
import { useState,useEffect} from 'react'
export default function usePost() {
    
    const [postpost,setPostpost]=useState(null)
    // const [isPending,setisPending]=useState(true)
    const [errorrs,setErrorrs]=useState(null)
     const postdata=(url,nameAdd,imageAdd,priceAdd,countAdd,popularityAdd,colorsAdd,saleAdd)=>{
        const newData = {
            title:nameAdd,
            price:priceAdd,
            count:countAdd,
            img:imageAdd,
            popularity:popularityAdd,
            sale:saleAdd,
            colors:colorsAdd,
            categoryID:2
          }
  console.log(newData)

  fetch(`${url}`,{
    method:"POST",
    headers: {
               "Content-Type": "application/json"
           },
  
    body: JSON.stringify(newData)
})
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setPostpost(data)
        } 
    )
    .catch(errorrs=>console.log(errorrs))
    }
   
    return {postdata,postpost,setPostpost,errorrs}

}
//
