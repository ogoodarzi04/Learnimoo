import React, { useEffect, useContext, useState, useMemo } from "react";
import "./AdminCourses.css";
import useFetch from "../../../../Hooks/useFetch";
//
export default function AddNewProduct(props) {
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas("http://localhost:3000/v1/courses", false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   //

   return (
      <>
         <div className=" Add-NewProducts  bg-[#000000] px-16 rounded-[20px] py-10 mt-12">
            <div className="Title-Product ">
               <h2 className=" text-[25px] danaBold text-white">{props.title}</h2>
            </div>
            <div className="Label-Products  mt-[5px] rounded-[15px] relative ">{props.children}</div>
         </div>
      </>
   );

   //
}
