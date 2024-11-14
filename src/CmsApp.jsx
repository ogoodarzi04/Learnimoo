import React, { Suspense, useEffect, useState } from "react";
import "./CmsApp.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ContextProvider } from "./contexts/Context";
import { Spinner } from "@material-tailwind/react";
//
export default function CmsApp() {
   const router = useRoutes(routes);
   //
   return (
      <ContextProvider>
         <Suspense
            fallback={
               <div className="flex min-h-screen items-center justify-center text-3xl">
                  <Spinner />
               </div>
            }
         >
            <div className="main-wrapper bg-theme-color dark:bg-light-theme-color overflow-hidden" dir="rtl">
               <div className="routes ">{router}</div>
            </div>
         </Suspense>
      </ContextProvider>
   );
}
