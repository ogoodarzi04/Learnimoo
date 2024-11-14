import React, { useEffect } from "react";
import UsersElement from "./usersElement";
import useFetch from "../../../../Hooks/useFetch";

export default function Users() {
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`http://localhost:3000/v1/users`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   //
   return (
      <>
         {" "}
         <UsersElement isAddNewCmp={true} post={post} fetchData={fetchData} titleHdr={"لیست کاربران"} />{" "}
      </>
   );
}
