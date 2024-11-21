import React, { useContext, useEffect, useMemo, useState } from "react";
import "./Header.css";
import { LuSun } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
//
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { HiOutlineUser } from "react-icons/hi2";
import MenuIcon from "@mui/icons-material/Menu";
//
import NavBar from "./NavBar/NavBar";
import { SideBar } from "./SideBar/SideBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import useFetch from "../../Hooks/useFetch";
import UserBasket from "../UserBasket/UserBasket";
import { Badge, Button, Tooltip } from "@material-tailwind/react";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { Context } from "../../contexts/Context";
//
//${DOMAIN}
export default function Header() {
   const { DOMAIN } = useContext(Context);
   const [searchInputValue, setSearchInputCourse] = useState("");
   let navigate = useNavigate();
   const [itemsMenu, setItemsMenu] = useState([]);
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}menus`, false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   useEffect(() => {
      setItemsMenu(post);
   }, [post]);
   //
   const [showSideBar, setShowSideBar] = useState(false);
   const [theme, setTheme] = useState(() => {
      const initialTheme = localStorage.getItem("theme");
      return initialTheme ? initialTheme : "light";
   });
   const [showProfileUser, setShowProfileUser] = useState(false);
   const [showBasketUser, setShowBasketUser] = useState(false);
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
   const userDatas = useContext(Context);
   //
   return (
      <>
         <header className={` overflow-hidden bg-header-color dark:bg-white text-white dark:!text-text-gray-color`}>
            <div className="Wrapp-Header w-full flex justify-between lg:py-[23.5px] py-[17px]  px-7 lg:px-0">
               <Button
                  className=" px-10  lefSide-icons bg-icon-color flex  lg:hidden dark:bg-light-theme-color"
                  onClick={() => {
                     setShowSideBar(true);
                  }}
               >
                  <MenuIcon style={{ fontSize: 23 }} />
               </Button>
               <div className=" Right-side flex mx-auto  w-full gap-x-10 ">
                  <div className="logo-img md:ms-20 my-auto block w-full md:w-max">
                     <Link to={"/"}>
                        <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" className=" h-[55px] w-[85px] mx-auto md:mx-0" />
                     </Link>
                  </div>
                  <div className="Navbar  my-auto gap-x-3  hidden lg:flex">
                     {post.map((item) => {
                        return <NavBar title={item.title} items={item.submenus} key={item.id} href={`${item.href}`}></NavBar>;
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
                              { href: "/blog/category/vue-or-react", title: "مقایسه ری اکت و ری اکت" },
                           ]}
                           key={8}
                           href={`blog`}
                        ></NavBar>
                     </NavLink>
                  </div>
               </div>
               <div className=" Left-side flex  md:me-20  gap-x-8 text-white dark:!text-text-gray-color">
                  <div className="search-box bg-icon-color dark:bg-light-theme-color rounded-full hidden lg:flex w-max xl:w-[313px] h-[50px] text-white dark:!text-text-gray-color">
                     <input
                        onInput={(e) => {
                           setSearchInputCourse(e.target.value);
                        }}
                        value={searchInputValue}
                        className=" hidden xl:flex"
                        type="text"
                        placeholder="جست جو کنید... "
                     />
                     <button
                        className="  h-full flex"
                        onClick={() => {
                           if (searchInputValue) {
                              navigate(`/search/${searchInputValue}`);
                           }
                        }}
                     >
                        <SearchRoundedIcon style={{ fontSize: 26 }} className=" text-white dark:!text-text-gray-color" />
                     </button>
                  </div>
                  <Button
                     className=" lefSide-icons bg-icon-color hidden md:flex text-white dark:!text-text-gray-color dark:bg-light-theme-color"
                     onClick={() => {
                        toggleTheme();
                     }}
                  >
                     {theme === "dark" ? <DarkModeOutlinedIcon style={{ fontSize: 25 }} /> : <LuSun style={{ fontSize: 23 }} />}
                  </Button>
                  {userDatas?.userInfos?.courses?.length > 0 ? (
                     <UserBasket
                        products={userDatas?.userInfos?.courses}
                        showBasketUser={showBasketUser}
                        setShowBasketUser={setShowBasketUser}
                        menuShopHnd={
                           <div className=" relative">
                              <Badge className=" min-w-6 min-h-6" overlap="circular" color="yellow" content={<p className=" text-[11px] m-auto font-bold">{userDatas?.userInfos?.courses?.length}</p>}>
                                 <Button
                                    onClick={() => {
                                       setShowBasketUser((prev) => !prev);
                                    }}
                                    className=" lefSide-icons bg-icon-color flex text-white dark:!text-text-gray-color dark:bg-light-theme-color"
                                 >
                                    <HiOutlineShoppingBag style={{ fontSize: 23 }} />
                                 </Button>
                              </Badge>
                           </div>
                        }
                     />
                  ) : (
                     <Tooltip content={<p className=" bg-limon-color text-black rounded-md px-2 danaMedium font-thin text-lg">سبد شما خالی است</p>}>
                        <Button className=" lefSide-icons bg-icon-color flex text-white dark:!text-text-gray-color dark:bg-light-theme-color">
                           <HiOutlineShoppingBag style={{ fontSize: 23 }} />
                        </Button>
                     </Tooltip>
                  )}

                  {userDatas.isLoggedIn ? (
                     <UserProfile
                        showProfileUser={showProfileUser}
                        setShowProfileUser={setShowProfileUser}
                        menuHnd={
                           <Button
                              onClick={() => {
                                 setShowProfileUser((prev) => !prev);
                              }}
                              className=" lefSide-icons bg-icon-color flex text-white dark:!text-text-gray-color dark:bg-light-theme-color"
                           >
                              <HiOutlineUser style={{ fontSize: 23 }} />
                           </Button>
                        }
                     />
                  ) : (
                     <Link to={"/login"} className=" my-auto ">
                        <Button className=" rounded-full  lefSide-icons  md:rounded-[27px] md:bg-light-blue-500 bg-icon-color  text-white flex md:!size-max md:px-7 py-[13px] ">
                           <span className=" my-auto md:flex hidden gap-x-[9px] danaMedium text-[17px]">
                              <HiOutlineUser style={{ fontSize: 23 }} />
                              <span className=" my-auto font-thin">ورود | عضویت</span>
                           </span>
                           <HiOutlineArrowRightStartOnRectangle className=" md:hidden flex" style={{ fontSize: 23 }} />
                        </Button>
                     </Link>
                  )}
               </div>
            </div>
         </header>
         {showSideBar && <SideBar setShowSideBar={setShowSideBar} itemsMenu={itemsMenu} />}
      </>
   );
}
