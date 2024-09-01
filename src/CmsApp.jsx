import React, { useState } from "react";
import "./CmsApp.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ContextProvider } from "./contexts/Context";

//
export default function CmsApp() {
   const router = useRoutes(routes);
   //
   return (
      <ContextProvider>
         <>
            <div className="main-wrapper bg-theme-color  " dir="rtl">
               <div className="routes ">{router}</div>
            </div>
         </>
      </ContextProvider>
   );
}
