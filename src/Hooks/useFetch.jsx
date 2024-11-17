import React from "react";
import { useState, useEffect } from "react";
export default function useFetch() {
   const [post, setPost] = useState([]);
   const [isPending, setisPending] = useState(true);
   const [err, setErr] = useState(null);

   const getAllDatas = async (url, localStorageData) => {
      const res = await fetch(url, {
         headers: {
            Authorization: `Bearer ${localStorageData?.token}`,
         },
      });
      const data = await res.json();
      await setPost(data);
      await setisPending(false);
      await setErr(null);
   };

   return { getAllDatas, post, isPending, err };
}
