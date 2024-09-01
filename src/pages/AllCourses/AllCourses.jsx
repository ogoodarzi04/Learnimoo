//
import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import TitleSection from "../../Components/TitleSection/TitleSection";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { coursesData, switchBox, tabData, tabItems } from "../../datas";
import { HiArrowsUpDown } from "react-icons/hi2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Switch } from "@material-tailwind/react";
import { BiFilterAlt } from "react-icons/bi";
import CategoriesAllCourses from "../../Components/CategoriesAllCourses/CategoriesAllCourses";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import LoadingButton from "@mui/lab/LoadingButton";
// import SendIcon from "@mui/icons-material/Send";
//
export default function AllCourses() {
   const [courseTab, setCourseTab] = useState([]);
   const [tabArr, setTabArr] = useState([]);
   let navigate = useNavigate();
   let location = useLocation();
   let filterParam = location.search.split("=")[1] || "default";
   //
   //
   const filterRouteItem = () => {
      if (filterParam) {
         if (filterParam === "default") {
            setCourseTab(tabData);
            // console.log(courseTab);
         } else if (filterParam === "expensive") {
            setCourseTab(tabData.sort((a, b) => a.price - b.price).reverse());
            // console.log(courseTab);
         } else if (filterParam === "cheapest") {
            setCourseTab(tabData.sort((a, b) => a.price - b.price));
            // console.log(courseTab);
         } else if (filterParam === "popular") {
            console.log("dddddddddddddddd");
         } else {
            navigate("/*");
            return;
         }
      }
   };
   useEffect(() => {
      filterRouteItem();
      setTabArr(tabItems);
   }, [filterParam]);
   //
   return (
      <>
         <Header />
         <div className="AllCourses grid  relative container  mt-20 text-white">
            <div className="TitleSec">
               <TitleSection
                  title="همه دوره ها"
                  des=""
                  color="bg-orange-300"
                  leftBtnText={
                     <span className=" text-[19px] font-extrabold" style={{ color: "rgb(100 116 139)", fontWeight: 590 }}>
                        72 عنوان آموزشی
                     </span>
                  }
               />
            </div>
            <div className=" mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-11 ">
               <div className=" lg:col-span-1 col-span-4">
                  <div className="search-box !mt-0  bg-header-color rounded-2xl  flex  py-3.5 ">
                     <input
                        className=" flex"
                        type="text"
                        placeholder="جستجو بین دوره ها
"
                     />
                     <button className="  h-full flex">
                        <SearchRoundedIcon style={{ fontSize: 26 }} />
                     </button>
                  </div>
                  <div className=" overflow-hidden col-span-4 lg:col-span-1 space-y-9 hidden md:block mt-[24px]">
                     {switchBox.map((item) => {
                        return (
                           <div className=" w-full bg-header-color rounded-2xl py-[20px] px-[20px] justify-between flex  ">
                              <p>{item.title}</p>
                              <Switch
                                 id="custom-switch-component"
                                 ripple={false}
                                 className="h-full w-full checked:bg-[#2ec946] "
                                 containerProps={{
                                    className: "w-[46px] h-[24px]",
                                 }}
                                 circleProps={{
                                    className: "before:hidden left-0.5 border-[1px] w-[21px] h-[21px]",
                                 }}
                              />
                           </div>
                        );
                     })}
                     <CategoriesAllCourses />
                  </div>
               </div>
               {/* hidden*/}
               <div className="  gap-x-9 col-span-4 grid grid-cols-2 mt-[18px] md:hidden ">
                  <div className=" bg-header-color flex rounded-[30px] py-[13px]">
                     <div className=" mx-auto flex gap-x-4">
                        <BiFilterAlt className=" my-auto" style={{ fontSize: 25 }} />
                        <span>فیلتر</span>
                     </div>
                  </div>
                  <div className=" bg-header-color flex rounded-[30px] py-[13px]">
                     <div className=" mx-auto flex gap-x-4">
                        <HiArrowsUpDown className=" my-auto " style={{ fontSize: 25 }} />
                        <span>همه دوره ها</span>
                     </div>
                  </div>
               </div>
               {/* hidden*/}
               <div className="CardsSec col-span-4  lg:col-span-2 xl:col-span-3   gap-11 ">
                  <div className=" overflow-hidden bg-header-color md:flex gap-x-12 cursor-pointer py-4 rounded-2xl hidden mt-9 lg:mt-0">
                     <div className=" flex  ">
                        <HiArrowsUpDown style={{ fontSize: 30 }} className=" ms-3 " />
                        <span className=" text-[16.5px] flex my-auto " style={{ fontFamily: "danaMedium" }}>
                           مرتب سازی بر اساس :
                        </span>
                     </div>
                     {tabArr.map((item) => {
                        return (
                           <Link to={`/AllCourses?q=${item.path}`} className={`  flex  px-3 gap-x-2 ${filterParam === item.path ? "active " : ""}`} style={{ color: "white" }}>
                              <span className=" text-[15px]  my-auto" style={{ fontFamily: "danaMedium" }}>
                                 {item.title}
                              </span>
                           </Link>
                        );
                     })}
                  </div>
                  <div className="  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-11 mt-[24px]">
                     {courseTab.length > 0
                        ? courseTab.map((item) => (
                             <div className=" col-span-1">
                                <Link to={`/course/${item.title}/`}>
                                   <CourseCard />
                                </Link>
                             </div>
                          ))
                        : ""}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
