//
import React, { useEffect, useState } from "react";
import { tabDataArt, tabItemsArt } from "../../datas";
import { useParams, NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { HiArrowsUpDown } from "react-icons/hi2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { BiFilterAlt } from "react-icons/bi";
import Article from "../../Components/Article/Article";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
//
export default function Articles() {
   const [articleTab, setArticleTab] = useState([]);
   const [tabArr, setTabArr] = useState([]);
   let navigate = useNavigate();
   let location = useLocation();
   let filterParam = location.search.split("=")[1] || "usual";
   //
   const filterRouteItem = () => {
      if (filterParam) {
         if (filterParam === "usual") {
            setArticleTab(tabDataArt);
            // console.log(courseTab);
         } else if (filterParam === "newest") {
            setArticleTab(tabDataArt);
            // console.log(courseTab);
         } else if (filterParam === "oldest") {
            setArticleTab(tabDataArt);
            // console.log(courseTab);
         } else if (filterParam === "opinionated") {
            setArticleTab(tabDataArt);
         } else {
            navigate("/*");
            return;
         }
      }
   };
   useEffect(() => {
      filterRouteItem();
      setTabArr(tabItemsArt);
   }, [filterParam]);
   //
   return (
      <>
         {" "}
         <Header />
         <div className="Articles grid  relative container  mt-20 text-white">
            <div className="TitleSec">
               <TitleSection
                  title="وبلاگ"
                  des=""
                  color="bg-orange-300"
                  leftBtnText={
                     <span className=" text-[19px] font-extrabold" style={{ color: "rgb(100 116 139)", fontWeight: 590 }}>
                        267مقاله
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
                        placeholder="جستجو بین مقاله ها
"
                     />
                     <button className="  h-full flex">
                        <SearchRoundedIcon style={{ fontSize: 26 }} />
                     </button>
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
                        <span>همه مقاله ها</span>
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
                           //
                           <Link to={`/blog?q=${item.path}`} className={`  flex  px-3 gap-x-2 ${filterParam === item.path ? "active " : ""}`} style={{ color: "white" }}>
                              <span className=" text-[15px]  my-auto" style={{ fontFamily: "danaMedium" }}>
                                 {item.title}
                              </span>
                           </Link>
                        );
                     })}
                  </div>
                  <div className="  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-11 mt-[24px]">
                     {articleTab.length > 0
                        ? articleTab.map((item) => (
                             <div className=" col-span-1">
                                {/* {console.log(`/blog/${item.title}`)} */}
                                <Link to={`/blog/${item.title}`}>
                                   <Article />
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
