import React, { useEffect, useMemo, useState } from "react";
import "./Header.css";
import { LuSun } from "react-icons/lu";
import { HiOutlineMoon } from "react-icons/hi2";
import { BsMoon } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
//
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { HiOutlineUser } from "react-icons/hi2";
import MenuIcon from "@mui/icons-material/Menu";
//
import NavBar from "./NavBar/NavBar";
import { navListMenuItems } from "../../datas";
import { SideBar } from "./SideBar/SideBar";
import { Link, NavLink } from "react-router-dom";
//
//
export default function Header() {
   const [showSideBar, setShowSideBar] = useState(false);
   // const [islightMode, setIslightMode] = useState("true");
   const [theme, setTheme] = useState(() => {
      const initialTheme = localStorage.getItem("theme");
      return initialTheme ? initialTheme : "w";
   });
   function toggleTheme() {
      setTheme((prevTheme) => {
         const newTheme = prevTheme === "w" ? "dark" : "w";
         localStorage.setItem("theme", newTheme);
         return newTheme;
      });
   }
   useEffect(() => {
      document.querySelector("body").className = ` ${theme}`;
   }, [theme]);
   //
   return (
      <>
         <header className={` overflow-hidden bg-header-color dark:bg-white text-white dark:!text-text-gray-color`}>
            <div className="Wrapp-Header w-full  flex justify-between lg:py-[23.5px] py-[17px]  px-7 lg:px-0">
               <button
                  className=" px-4  lefSide-icons bg-icon-color flex  lg:hidden dark:bg-light-theme-color"
                  onClick={() => {
                     setShowSideBar(true);
                  }}
               >
                  <MenuIcon style={{ fontSize: 23 }} />
               </button>
               <div className=" Right-side flex mx-auto  w-full gap-x-10">
                  <div className="logo-img md:ms-20 my-auto block w-full md:w-max">
                     <a href={"http://localhost:5173/"}>
                        <img src="/img/slazzer-edit-image (2)_prev_ui.png" alt="" className=" h-[55px] w-[85px] mx-auto md:mx-0" />
                     </a>
                  </div>
                  <div className="Navbar   my-auto gap-x-3  hidden lg:flex">
                     {navListMenuItems.map((item) => {
                        return <NavBar title={item.title} items={item.subMenu} key={item.id} path={`${item.path}`}></NavBar>;
                     })}
                  </div>
               </div>
               <div className=" Left-side flex  md:me-20  gap-x-8 text-white dark:!text-text-gray-color">
                  <div className="search-box bg-icon-color dark:bg-light-theme-color rounded-full hidden lg:flex w-max xl:w-[313px] h-[50px] text-white dark:!text-text-gray-color">
                     <input className=" hidden xl:flex" type="text" placeholder="جست جو کنید... " />
                     <button className="  h-full flex">
                        <SearchRoundedIcon style={{ fontSize: 26 }} className=" text-white dark:!text-text-gray-color" />
                     </button>
                  </div>
                  <button
                     className=" lefSide-icons bg-icon-color hidden md:flex text-white dark:!text-text-gray-color dark:bg-light-theme-color"
                     onClick={() => {
                        toggleTheme();
                     }}
                  >
                     {theme === "dark" ? <HiOutlineMoon style={{ fontSize: 23 }} /> : <LuSun style={{ fontSize: 23 }} />}
                  </button>
                  <button className=" lefSide-icons bg-icon-color flex text-white dark:!text-text-gray-color dark:bg-light-theme-color">
                     <HiOutlineShoppingBag style={{ fontSize: 23 }} />
                  </button>
                  <NavLink to={"/login"} className={" text-white dark:!text-text-gray-color"}>
                     <button className="   lefSide-icons bg-icon-color flex text-white dark:!text-text-gray-color dark:bg-light-theme-color">
                        <HiOutlineUser style={{ fontSize: 23 }} />
                     </button>
                  </NavLink>
               </div>
            </div>
         </header>
         {showSideBar && <SideBar setShowSideBar={setShowSideBar} />}
      </>
   );
}
