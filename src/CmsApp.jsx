import React, { useEffect, useState } from "react";
import "./CmsApp.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ContextProvider } from "./contexts/Context";
import useFetch from "./Hooks/useFetch";

//
export default function CmsApp() {
   // const { getAllDatas, post, isPending, err } = useFetch();
   // const fetchData = () => {
   //    getAllDatas("http://localhost:4000/v1/courses");
   // };
   // useEffect(() => {
   //    fetchData();
   //    console.log(post);
   // }, []);

   const router = useRoutes(routes);
   //
   return (
      <ContextProvider>
         <>
            <div className="main-wrapper bg-theme-color dark:bg-light-theme-color overflow-hidden" dir="rtl">
               <div className="routes ">{router}</div>
            </div>
         </>
      </ContextProvider>
   );
}
