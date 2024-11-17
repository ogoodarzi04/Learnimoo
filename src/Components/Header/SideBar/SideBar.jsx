import React, { useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { Drawer, Typography } from "@material-tailwind/react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
//
import NavBar from "../NavBar/NavBar";

import "./SideBar.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
//
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Context } from "../../../contexts/Context";
import { sideBarUserMenus } from "../../../datas";
//
import { sideBarMenus } from "../../../datas";
//
export function SideBar(props) {
   const [searchInputValue, setSearchInputValue] = useState("");
   let navigate = useNavigate();
   const [open, setOpen] = useState(true);
   //
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
   let userDatas = useContext(Context);
   const location = useLocation();
   //
   return ReactDom.createPortal(
      <>
         <div className="SortingCourseModal ">
            <Drawer open={open} placement="right" className={` dark:bg-white px-[17px] ${!props.isShowUserSideBar ? "bg-header-color" : "  bg-[rgb(40,41,61)]"}`}>
               {!props.isShowUserSideBar ? (
                  <div>
                     <div className="mb-2  flex items-center justify-between py-[20px] dark:!border-gray-300" style={{ borderBottom: "0.5px solid #ffffff1a" }}>
                        <Typography>
                           <div className="logo-img  mt-2.5  ">
                              <a href={"https://learnimoo.filedl.me/"}>
                                 <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" style={{ width: "7rem" }} />
                              </a>
                           </div>
                        </Typography>
                        <div className=" flex gap-x-5">
                           <button
                              className=" lefSide-icons2 bg-icon-color text-white flex dark:bg-light-theme-color dark:!text-text-gray-color"
                              onClick={() => {
                                 toggleTheme();
                              }}
                           >
                              {theme !== "dark" ? <LightModeOutlinedIcon style={{ fontSize: 23 }} /> : <DarkModeOutlinedIcon style={{ fontSize: 23 }} />}
                           </button>{" "}
                           <button className=" lefSide-icons2 bg-icon-color text-white flex dark:bg-light-theme-color dark:!text-text-gray-color" onClick={() => props.setShowSideBar(false)}>
                              <CloseIcon style={{ fontSize: 23 }} />
                           </button>
                        </div>
                     </div>
                     <div>
                        <div className="search-box2 bg-icon-color rounded-full dark:bg-light-theme-color dark:!text-text-gray-color text-white flex">
                           <input value={searchInputValue} onInput={(e) => setSearchInputValue(e.target.value)} type="text" placeholder="جست جو کنید... " />
                           <button
                              className="  h-full flex "
                              onClick={() => {
                                 console.log("matam");
                                 if (searchInputValue) {
                                    navigate(`/search/${searchInputValue}`);
                                 }
                              }}
                           >
                              <SearchRoundedIcon style={{ fontSize: 26 }} />
                           </button>
                        </div>
                        <div className="Navbar  mt-[18px]  space-y-[5px]">
                           {props?.itemsMenu?.map((item) => {
                              return <NavBar title={item?.title} items={item?.submenus} key={item?._id} href={item?.href}></NavBar>;
                           })}
                           <NavLink to={"/blog"}>
                              <NavBar
                                 title="مقالات"
                                 items={[
                                    { href: "/blog/category/QueryString-vs-urlSearchParam", title: "تفاوت urlSearchParam و QueryString" },
                                    { href: "/blog/category/test-link", title: "مقاله فیک برای تست پیش نویس" },
                                    { href: "/blog/category/make-creative404-page-with-css-and-js", title: "ساخت صفحات 404 جذاب با Css و JS" },
                                    { href: "/blog/category/how-much-js-to-start-react", title: "برای یادگیری ری‌اکت چقدر باید جاوا اسکریپت بلد باشیم؟" },
                                    { href: "/blog/category/date-in-js", title: "ترفند های تاریخ و زمان در جاوا اسکریپت" },
                                    { href: "/blog/category/why-angular-in-not-popular", title: "چرا انگیولار محبوب نشد؟" },
                                    { href: "/blog/category/vue-or-react", title: "مقایسه ویو و ری اکت" },
                                 ]}
                                 key={8}
                                 href={`blog`}
                              ></NavBar>
                           </NavLink>
                        </div>
                     </div>
                  </div>
               ) : props.isShowAdminSideBar ? (
                  <div className="SideBar bg-[#111219] w-full !text-gray-400 dark:text-black !z-50" style={{ borderLeft: "2px solid #323232" }}>
                     <div className="SideBar-title   ">
                        <div className="logo-footer ps-14 py-[40px] flex gap-x-5">
                           <div className="logo-img ">
                              <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" className=" md:h-[35px] md:w-[55px] h-[40px] w-[60px] " />
                           </div>
                           <div className="">
                              <p className=" text-gray-200 danaMedium md:text-[25px] dark:!text-blue-gray-900">لرنیمو</p>
                           </div>
                        </div>
                     </div>
                     <p className=" ms-12 mt-12 text-[16.5px]">منو</p>
                     <div className="SideBar-menu  py-[10px] mx-auto flex ">
                        <ul className=" list-item  list-none   cursor-pointer mx-auto ">
                           {sideBarMenus.map((item) => {
                              return (
                                 <li className=" mx-auto  flex ">
                                    <Link to={`${item.path}`} className={`item ${location.pathname === item.path && "active-S"}  flex py-[16.5px]  rounded-xl gap-x-4 w-[265px] ps-8 !text-gray-400`}>
                                       {item.icon}
                                       <span>{item.title}</span>
                                    </Link>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                     <p className=" ms-12 mt-6 text-[16.5px]">سایر</p>
                     <div className="SideBar-menu  py-[10px] mx-auto flex ">
                        <ul className=" list-item  list-none cursor-pointer mx-auto ">
                           <li className={` mx-auto flex `}>
                              <Link
                                 to={"discounts"}
                                 className={`  ${location.pathname === "/p-admin/discounts" && "active-S"} item flex  py-[16.5px] w-[265px] ps-8 rounded-xl gap-x-4 !text-gray-400`}
                              >
                                 <RiLogoutCircleRLine className=" my-auto" />
                                 <span className=" my-auto">تخفیف همگانی</span>
                              </Link>
                           </li>
                           <li
                              className=" mx-auto  flex mt-3 "
                              onClick={() => {
                                 setTimeout(() => {
                                    navigate("/");
                                    userDatas.logout();
                                 }, 1500);
                              }}
                           >
                              <Link className="item flex  py-[16.5px] w-[265px] ps-8 rounded-xl gap-x-4 !text-gray-400">
                                 <RiLogoutCircleRLine className=" my-auto" />
                                 <span className=" my-auto">خروج</span>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               ) : (
                  <div className="SideBar w-full !text-white dark:!text-black bg-[rgb(40,41,61)] dark:!bg-white">
                     <div className="SideBar-title   ">
                        <div className="logo-footer  py-[40px] flex gap-x-5 justify-between">
                           <div className=" mt-2">
                              <Link to={"https://learnimoo.filedl.me/"} className=" flex gap-x-3">
                                 <div className="logo-img ">
                                    <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" className=" md:h-[60px] md:w-[80px] h-[40px] w-[60px] " />
                                 </div>
                                 <div className=" my-auto">
                                    <p className=" text-white danaMedium md:text-[44px] text-[28px] dark:!text-blue-gray-900">لرنیمو</p>
                                 </div>
                              </Link>
                           </div>
                           <div className=" ">
                              <button className=" lefSide-icons2 bg-icon-color text-white flex dark:bg-light-theme-color dark:!text-text-gray-color" onClick={() => props.setShowSideBar(false)}>
                                 <CloseIcon style={{ fontSize: 25 }} />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="SideBar-user-menu  py-[10px]  flex ">
                        <ul className=" list-item  list-none  text-[23px] cursor-pointer space-y-4">
                           {sideBarUserMenus.map((item) => {
                              return (
                                 <li className=" mx-auto  flex ">
                                    <Link
                                       to={`${item.path}`}
                                       className={`items ${location.pathname === item.path && "active-user-S"}  flex py-[5px]  rounded-xl gap-x-4 w-[219px]  text-white dark:!text-gray-900 ps-5`}
                                    >
                                       {item.icon}
                                       <span className=" mt-1.5">{item.title}</span>
                                    </Link>
                                 </li>
                              );
                           })}
                           <li
                              className=" mx-auto  flex "
                              onClick={() => {
                                 setTimeout(() => {
                                    navigate("/");
                                    userDatas.logout();
                                 }, 1500);
                              }}
                           >
                              <Link className="items  flex py-[5px]  rounded-xl gap-x-4 w-[219px]  text-white dark:!text-gray-900 ps-5">
                                 <RiLogoutCircleRLine className=" my-auto" />
                                 <span className=" my-auto">خروج</span>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               )}
            </Drawer>
         </div>
      </>,
      document.getElementById("SideBar")
   );
}
