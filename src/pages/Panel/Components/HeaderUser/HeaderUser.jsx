import React, { useContext, useEffect, useState } from "react";
// import "./HeaderPanel.css";
import { RiNotification2Line } from "react-icons/ri";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Context } from "../../../../contexts/Context";
import NotifiCation from "../NotifiCation/NotifiCation";
import { LuSun } from "react-icons/lu";
import { Button } from "@material-tailwind/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { SideBar } from "../../../../Components/Header/SideBar/SideBar";
//
export default function HeaderUser() {
   const userDatas = useContext(Context);
   //
   const [theme, setTheme] = useState(() => {
      const initialTheme = localStorage.getItem("theme");
      return initialTheme ? initialTheme : "light";
   });
   function toggleTheme() {
      setTheme((prevTheme) => {
         const newTheme = prevTheme === "light" ? "dark" : "light";
         localStorage.setItem("theme", newTheme);
         return newTheme;
      });
   }
   useEffect(() => {
      document.querySelector("body").className = ` ${theme}`;
   }, [theme]);
   //
   const location = useLocation();
   const [showSideBar, setShowSideBar] = useState(false);
   //
   return (
      <>
         <div className=" relative dark:!border-b-gray-300 md:!border-none" style={{ borderBottom: "1px solid rgb(50,51,77)" }}>
            <div className="Wrapp-Header  w-full flex justify-between md:py-[29px] py-[20px] ">
               <div className="admin-person Right-side md:ms-16 z-50 mt-9 hidden md:block">
                  <div className="img-person flex gap-x-4 ">
                     <div className="admin-name  ">
                        <p className=" text-[22px] font-bold danaDemiBold dark:!text-black text-white">{userDatas?.isLoggedIn && userDatas.userInfos?.name}عزیز; خوش اومدی 🙌</p>
                     </div>
                  </div>
               </div>
               <div className=" text-white md:!text-black flex md:hidden gap-x-2">
                  <div className=" my-auto ">
                     <Button
                        className=" dark:!bg-white dark:!text-gray-900"
                        onClick={() => {
                           setShowSideBar(true);
                        }}
                     >
                        <HiOutlineMenuAlt3 style={{ fontSize: 24 }} />
                     </Button>
                  </div>
                  <span className=" my-auto text-white dark:!text-gray-900">
                     {location.pathname === "/my-account"
                        ? "پیشخوان"
                        : location.pathname === "/my-account/courses"
                        ? "دوره های من"
                        : location.pathname === "/my-account/edit"
                        ? "جزییات حساب من"
                        : "تیکت های من"}
                  </span>
               </div>
               <div className=" Left-side-p  flex md:me-16 text-white md:gap-x-[28px] gap-x-6 md:mt-3">
                  <Button className="   lefSide-icons-p bg-[rgb(40,41,61)] dark:!bg-white z-50 relative !rounded-full md:!size-[57px] !size-[48px] ">
                     {userDatas?.userInfos?.notifications?.length > 0 ? <div className=" bg-red-500  z-50  absolute right-[12px] top-[12px]"></div> : ""}
                     <NotifiCation notifs={userDatas?.userInfos?.notifications}>
                        <RiNotification2Line className=" text-[rgb(119,124,148)]" style={{ fontSize: 23 }} />
                     </NotifiCation>
                  </Button>
                  <Button
                     className=" lefSide-icons bg-[rgb(40,41,61)] !rounded-full md:!size-[57px] !size-[48px]  flex text-[rgb(119,124,148)] dark:!text-text-gray-color dark:!bg-white"
                     onClick={() => {
                        toggleTheme();
                     }}
                  >
                     {theme === "dark" ? <DarkModeOutlinedIcon style={{ fontSize: 25 }} /> : <LuSun style={{ fontSize: 23 }} />}
                  </Button>
                  <img src={`${userDatas?.userInfos?.profile ? userDatas?.userInfos?.profile : "/images/amir.jpg"}`} alt="" className=" md:!size-[58px] !size-[50px] rounded-full my-auto" />
               </div>
            </div>
         </div>
         {showSideBar && <SideBar setShowSideBar={setShowSideBar} isShowUserSideBar={true} />}
      </>
   );
}
/* Rectangle 12 */
