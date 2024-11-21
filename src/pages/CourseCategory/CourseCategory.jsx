//
import React, { useContext, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import TitleSection from "../../Components/TitleSection/TitleSection";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { switchBox, tabItems } from "../../datas";
import { HiArrowsUpDown } from "react-icons/hi2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Alert, Switch } from "@material-tailwind/react";
import { BiFilterAlt } from "react-icons/bi";
// import LoadingButton from "@mui/lab/LoadingButton";
// import SendIcon from "@mui/icons-material/Send";
import "./CourseCategory.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import useFetch from "../../Hooks/useFetch";
import FilterCourseModal from "../../Components/FilterCourseModal/FilterCourseModal";
import SortingCourseModal from "../../Components/SortingCourseModal/SortingCourseModal";
import { Context } from "../../contexts/Context";
//
export default function CourseCategory() {
   const { DOMAIN } = useContext(Context);
   const [orderCourses, setOrderCourses] = useState([]);
   const [searchInputCourse, setSearchInputCourse] = useState("");
   const [changedFilter, setChangedFilter] = useState(false);
   const [courses, setCourses] = useState([]);
   const [tabArr, setTabArr] = useState([]);
   let { categoryName } = useParams();
   let location = useLocation();
   let filterCategoryParam = location.search.split("=")[1] || "default";
   let filterCourseCategoryParam = location.search.split("=")[1];
   let filterSearchCourseParam = location.search.split("=")[1];
   let navigate = useNavigate();
   // //
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}courses/category/${categoryName}`, false);
   };
   useEffect(() => {
      fetchData();
   }, [categoryName, filterCategoryParam, filterCourseCategoryParam, filterSearchCourseParam]);
   //
   useEffect(() => {
      if (filterCategoryParam) {
         // console.log(post);
         //
         if (filterCategoryParam === "default") {
            setOrderCourses(post);
         } else if (filterCategoryParam === "expensive") {
            setOrderCourses(
               post
                  .sort((a, b) => a.price - b.price)
                  .slice()
                  .reverse()
            );
         } else if (filterCategoryParam === "cheapest") {
            setOrderCourses(post.sort((a, b) => a.price - b.price));
         } else if (filterCategoryParam === "popular") {
            setOrderCourses(
               post
                  .sort((a, b) => a.courseAverageScore - b.courseAverageScore)
                  .slice()
                  .reverse()
            );
         } else if (filterCourseCategoryParam === "&free_courses") {
            setOrderCourses(post.filter((course) => course.price === 0));
         } else if (filterCourseCategoryParam === "&presells_courses") {
            setOrderCourses(post.filter((course) => course.price === 300000));
         }
      } else {
         navigate("/");
      }
   }, [post]);
   const filterCourses = () => {
      if (post.length > 0) {
         let mainCourse = post?.filter((category) => category?.name?.includes(categoryName));
         setCourses(mainCourse);
      }
   };

   useEffect(() => {
      filterCourses();
      if (categoryName !== "blog") {
         setCourses(courses);
      } else {
         navigate("/blog");
      }
   }, [categoryName]);
   //

   useEffect(() => {
      setTabArr(tabItems);
   }, [filterCategoryParam]);
   //
   useEffect(() => {
      if (filterSearchCourseParam) {
         let mainSearch = orderCourses?.filter((item) => item?.name?.toLowerCase()?.includes(searchInputCourse));
         setOrderCourses(mainSearch);
      }
   }, [searchInputCourse, filterSearchCourseParam]);
   return (
      <>
         <Header />
         <div className="CourseCategory grid  relative container  mt-20 text-white">
            <div className="TitleSec">
               <TitleSection
                  title={`${filterSearchCourseParam ? `جستجو: ${searchInputCourse}` : categoryName}`}
                  des=""
                  color="bg-orange-300"
                  leftBtnText={
                     <span className=" text-[19px] font-extrabold" style={{ color: "rgb(100 116 139)", fontWeight: 590 }}>
                        {/* {data.leftSideTitle} */}
                     </span>
                  }
               />
            </div>

            <div className=" mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-11 ">
               <div className=" lg:col-span-1 col-span-4">
                  <div className="search-box !mt-0  bg-header-color dark:bg-white dark:text-gray-600 rounded-2xl  flex  py-3.5 ">
                     <input
                        value={searchInputCourse}
                        className=" flex"
                        type="text"
                        placeholder="جستجو بین دوره ها
"
                        onInput={(e) => {
                           setSearchInputCourse(e.target.value);
                           navigate(`/category-info/${categoryName}?q=${e.target.value}`);
                        }}
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
                              <div>
                                 {" "}
                                 <Switch
                                    onChange={(e) => {
                                       setChangedFilter((prev) => !prev);
                                       if (!changedFilter) {
                                          navigate(`/category-info/${categoryName}?q=${item.path}`);
                                       } else {
                                          navigate(`/category-info/${categoryName}`);
                                       }
                                    }}
                                    id="custom-switch-component "
                                    ripple={false}
                                    className={`h-full w-full  checked:bg-[#2ec946]  `}
                                    containerProps={{
                                       className: "w-[46px] h-[24px] ",
                                    }}
                                    circleProps={{
                                       className: "before:hidden left-0.5 border-[1px] dark:!bg-white w-[21px] h-[21px]",
                                    }}
                                 />
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
               {/* hidden*/}
               <div className="  gap-x-9 col-span-4 grid grid-cols-2 mt-[18px] md:hidden ">
                  <FilterCourseModal changedFilter={changedFilter} setChangedFilter={setChangedFilter} categoryName={categoryName}>
                     {" "}
                     <div className="  bg-header-color dark:bg-white dark:text-black flex rounded-[30px] py-[13px]">
                        <div className=" mx-auto flex gap-x-4">
                           <BiFilterAlt className=" my-auto" style={{ fontSize: 25 }} />
                           <span>فیلتر</span>
                        </div>
                     </div>
                  </FilterCourseModal>
                  <SortingCourseModal categoryName={categoryName} items={tabArr} filterCategoryParam={filterCategoryParam}>
                     {" "}
                     <div className=" bg-header-color dark:bg-white dark:text-black flex rounded-[30px] py-[13px]">
                        <div className=" mx-auto flex gap-x-4">
                           <HiArrowsUpDown className=" my-auto " style={{ fontSize: 25 }} />
                           <span>
                              {filterCategoryParam === "default"
                                 ? "همه دوره ها"
                                 : filterCategoryParam === "cheapest"
                                 ? "ارزان ترین"
                                 : filterCategoryParam === "expensive"
                                 ? "گران ترین"
                                 : filterCategoryParam === "popular"
                                 ? "پر مخاطب"
                                 : ""}
                           </span>
                        </div>
                     </div>
                  </SortingCourseModal>
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
                           <Link
                              to={`/category-info/${categoryName}?q=${item.path}`}
                              className={`  flex  px-3 gap-x-2  dark:!text-gray-800 ${filterCategoryParam === item.path ? "active " : ""}`}
                              style={{ color: "white" }}
                           >
                              <span className=" text-[15px]  my-auto" style={{ fontFamily: "danaMedium" }}>
                                 {item.title}
                              </span>
                           </Link>
                        );
                     })}
                  </div>
                  <div className="  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-11 mt-[24px]">
                     {orderCourses.length > 0 ? (
                        orderCourses.map((item) => {
                           return <CourseCard {...item} />;
                        })
                     ) : (
                        <div className=" col-span-3">
                           <Alert color="amber" className=" text-2xl w-full">
                              هنوز هیچ دوره ای برای این کتگوری وجود ندارد
                           </Alert>
                        </div>
                     )}
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
