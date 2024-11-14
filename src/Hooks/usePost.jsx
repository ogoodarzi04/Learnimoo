import React from "react";
import { useState, useEffect } from "react";
export default function usePost() {
   const [postpost, setPostpost] = useState(null);
   // const [isPending,setisPending]=useState(true)
   const [errorrs, setErrorrs] = useState(null);
   const [dataMsg, setDataMsg] = useState("");
   // username, phoneNumber, email, password, randomCourseID,
   const postdata = (url, newData, token) => {
      fetch(`${url}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
         },

         body: JSON.stringify(newData),
      })
         .then((res) => res.json())
         .then((data) => {
            setDataMsg(data.message);
            setPostpost(data);
            console.log(data);
         })
         .catch((errorrs) => console.log(errorrs));
   };

   return { postdata, postpost, setPostpost, errorrs };
}
//
