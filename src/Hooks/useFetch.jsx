import React from "react";
import { useState, useEffect } from "react";
export default function useFetch() {
   const [post, setPost] = useState([]);
   const [isPending, setisPending] = useState(true);
   const [err, setErr] = useState(null);

   const getAllDatas = async (url, localStorageData) => {
      // fetch(url, {
      //    headers: {
      //       Authorization: `Bearer ${localStorageData.token}`,
      //    },
      // })
      //    .then((res) => res.json())
      //    .then((data) => {
      //       setPost(data);
      //       // console.log(post);
      //       // setisPending(false);
      //       setErr(null);
      //    })
      //    .catch((err) => {
      //       setErr(true);
      //    });
      const res = await fetch(url, {
         headers: {
            Authorization: `Bearer ${localStorageData.token}`,
         },
      });
      const data = await res.json();
      await setPost(data);
      await setisPending(false);
      await setErr(null);
   };

   return { getAllDatas, post, isPending, err };
}
