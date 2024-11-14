import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import HeaderUser from "../Components/HeaderUser/HeaderUser";
import { Context } from "../../../contexts/Context";
import SideBarUser from "../Components/SideBarUser/SideBarUser";
//
export default function User() {
   const userDatas = useContext(Context);
   //
   return (
      <>
         <div className=" grid md:grid-cols-6  relative bg-[rgb(40,41,61)] dark:!bg-white md:px-40 md:py-11 h-screen overflow-y-auto overflow-x-hidden" dir="rtl">
            <div className=" col-span-1  sticky top-0 hidden md:flex">
               <SideBarUser />
            </div>
            <div className="col-span-5 bg-[rgb(28,28,40)] dark:!bg-light-theme-color md:rounded-[33px] px-8  ">
               <HeaderUser />
               <div className=" routers">
                  <div className="admin-person Right-side md:ms-16 z-50 mt-9 block md:hidden">
                     <div className="img-person flex gap-x-4 ">
                        <div className="admin-name  text-white dark:!text-gray-900">
                           <p className=" md:text-[22px] font-bold danaDemiBold ">{userDatas?.isLoggedIn && userDatas.userInfos?.name}عزیز; خوش اومدی 🙌</p>
                        </div>
                     </div>
                  </div>
                  <Outlet />
               </div>
            </div>
         </div>
      </>
   );
}
