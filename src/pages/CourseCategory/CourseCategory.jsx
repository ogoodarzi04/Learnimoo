//
import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate, Link } from "react-router-dom";
import TitleSection from "../../Components/TitleSection/TitleSection";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { coursesData, switchBox, tabData, tabItems } from "../../datas";
import { HiArrowsUpDown } from "react-icons/hi2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Switch } from "@material-tailwind/react";
import { BiFilterAlt } from "react-icons/bi";
// import LoadingButton from "@mui/lab/LoadingButton";
// import SendIcon from "@mui/icons-material/Send";
import "./CourseCategory.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
//
export default function CourseCategory() {
   const [courses, setCourse] = useState([]);
   const [courseTab, setCourseTab] = useState([]);
   const [tabArr, setTabArr] = useState([]);
   let { categoryName } = useParams();
   let { tabRoute = "default" } = useParams();
   let navigate = useNavigate();
   // //
   const filterCourses = () => {
      let mainCourse = coursesData.filter((course) => course.category.includes(categoryName));

      if (mainCourse.length > 0) {
         setCourse(mainCourse);
         return;
      }
      navigate("/*");
   };
   useEffect(() => {
      if (categoryName !== "blog") {
         filterCourses();
      } else {
         navigate("/blog");
      }
   }, [categoryName]);
   //

   const filterRouteItem = () => {
      if (tabRoute) {
         if (tabRoute === "default") {
            setCourseTab(tabData);
            // console.log(courseTab);
         } else if (tabRoute === "expensive") {
            setCourseTab(tabData.sort((a, b) => a.price - b.price).reverse());
            // console.log(courseTab);
         } else if (tabRoute === "cheapest") {
            setCourseTab(tabData.sort((a, b) => a.price - b.price));
            // console.log(courseTab);
         } else if (tabRoute === "popular") {
            console.log("dddddddddddddddd");
         } else {
            navigate("/*");
            return;
         }
      } else {
         navigate("/");
      }
   };
   useEffect(() => {
      filterRouteItem();
      setTabArr(tabItems);
   }, [tabRoute]);
   //

   return (
      <>
         <Header />
         <div className="CourseCategory grid  relative container  mt-20 text-white">
            {courses.map((data) => {
               return (
                  <div className="TitleSec">
                     <TitleSection
                        title={data.title}
                        des=""
                        color="bg-orange-300"
                        leftBtnText={
                           <span className=" text-[19px] font-extrabold" style={{ color: "rgb(100 116 139)", fontWeight: 590 }}>
                              {data.leftSideTitle}
                           </span>
                        }
                     />
                  </div>
               );
            })}
            <div className=" mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-11 ">
               <div className=" lg:col-span-1 col-span-4">
                  <div className="search-box !mt-0  bg-header-color dark:bg-white dark:text-gray-600 rounded-2xl  flex  py-3.5 ">
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
                           <div className=" w-full bg-header-color dark:bg-white dark:text-black rounded-2xl py-[20px] px-[20px] justify-between flex  ">
                              <p>{item.title}</p>
                              <Switch
                                 id="custom-switch-component "
                                 ripple={false}
                                 className="h-full w-full  checked:bg-[#2ec946] "
                                 containerProps={{
                                    className: "w-[46px] h-[24px] ",
                                 }}
                                 circleProps={{
                                    className: "before:hidden left-0.5 border-[1px] dark:!bg-white w-[21px] h-[21px]",
                                 }}
                              />
                           </div>
                        );
                     })}
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
                  <div className=" overflow-hidden bg-header-color dark:bg-white dark:!text-gray-800 md:flex gap-x-12 cursor-pointer py-4 rounded-2xl hidden mt-9 lg:mt-0">
                     <div className=" flex  ">
                        <HiArrowsUpDown style={{ fontSize: 30 }} className=" ms-3 " />
                        <span className=" text-[16.5px] flex my-auto " style={{ fontFamily: "danaMedium" }}>
                           مرتب سازی بر اساس :
                        </span>
                     </div>
                     {tabArr.map((item) => {
                        return (
                           <NavLink to={`/course-category/${categoryName}/${item.path}`} className={`  flex  px-3 gap-x-2  dark:!text-gray-800`} style={{ color: "white" }}>
                              <span className=" text-[15px]  my-auto" style={{ fontFamily: "danaMedium" }}>
                                 {item.title}
                              </span>
                           </NavLink>
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
            {/* <LoadingButton size="small" onClick={handleClick} endIcon={<SendIcon />} loading={loading} loadingPosition="end" variant="contained">
               <span>Send</span>
            </LoadingButton> */}
         </div>
         <Footer />
      </>
   );
}
