import React, { lazy } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "../Components/HeaderPanel/HeaderPanel";
import SideBarAdmin from "../Components/SideBarAdmin/SideBarAdmin";
//
export default function Admin() {
   const location = useLocation();
   let routeName = location.pathname.split("p-admin/")[1];
   return (
      <div>
         {/* linear-gradient(to right, #92fe9d, #00c9ff) */}
         {/* <div className="hidden z-50 lg:block absolute top-[0px] right-10 w-[200px] h-[200px] bg-[#00c9ff] opacity-30 blur-[120px] rounded-full"></div>
         <div className="hidden z-50 lg:block absolute top-96 left-10 w-[200px] h-[200px] bg-[#92fe9d] opacity-30 blur-[120px] rounded-full"></div>
         <div className="hidden z-50 lg:block absolute top-[600px] right-[400px] w-[200px] h-[200px] bg-[#00c9ff] opacity-30 blur-[120px] rounded-full"></div>
         <div className="hidden z-50 lg:block absolute top-[600px] left-[400px] w-[200px] h-[200px] bg-[#92fe9d] opacity-30 blur-[120px] rounded-full"></div>
         <div className="hidden z-50 lg:block absolute top-96 left-[400px] w-[200px] h-[200px] bg-[#00c9ff] opacity-30 blur-[120px] rounded-full"></div> */}
         <div
            style={{
               background: "rgba(17,18,25,1)",
            }}
            className=" md:grid md:grid-cols-6   relative "
            dir="rtl"
         >
            <div className=" col-span-1 md:flex hidden sticky top-0">
               <SideBarAdmin />
            </div>
            <div className="md:col-span-5 ">
               {routeName ? <Header height={"90.315"} mb={" mb-[53px]"} /> : <Header height={"170.315"} mb={"mb-[0px]"} />}
               <div className=" routers px-10">
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   );
}
