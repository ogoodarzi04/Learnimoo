import React from "react";
import { useState, useEffect } from "react";
export default function useEdit() {
   const [editepost, setEditepost] = useState(null);
   // const [isPending,setisPending]=useState(true)
   const [errorr, setErrorr] = useState(null);
   const editedata = (url, newData) => {
      console.log(newData);
      fetch(`${url}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },

         body: JSON.stringify(newData),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            console.log(data);
            setEditepost(data);
         })
         .catch((errorr) => console.log(errorr));
   };
   return { editedata, editepost, setEditepost, errorr };
}
//
