//
import React, { useContext, useEffect, useState } from "react";
import { tabItemsArt } from "../../datas";
import { useParams, NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { HiArrowsUpDown } from "react-icons/hi2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { BiFilterAlt } from "react-icons/bi";
import Article from "../../Components/LastArticles/Article";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import useFetch from "../../Hooks/useFetch";
import { Alert } from "@material-tailwind/react";
import SortingCourseModal from "../../Components/SortingCourseModal/SortingCourseModal";
import { Context } from "../../contexts/Context";
//
export default function Articles() {
   const { DOMAIN } = useContext(Context);
   const [orderArticles, setOrderArticles] = useState([]);
   const [searchInputArticle, setSearchInputArticle] = useState("");
   const [tabArr, setTabArr] = useState([]);
   let navigate = useNavigate();
   let location = useLocation();
   let filterParam = location.search.split("=")[1] || "usual";
   let filterSearchArticleParam = location.search.split("=")[1];
   //
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}articles`, false);
   };

   useEffect(() => {
      fetchData();
   }, [filterParam]);

   useEffect(() => {
      if (filterParam) {
         if (filterParam === "usual") {
            setOrderArticles(post);
         } else if (filterParam === "newest") {
            setOrderArticles(post.sort((a, b) => a.updatedAt - b.updatedAt));
         } else if (filterParam === "oldest") {
            setOrderArticles(post.sort((a, b) => a.updatedAt - b.updatedAt).reverse());
         } else if (filterParam === "opinionated") {
            setOrderArticles(post);
         }
      } else {
         navigate("/");
      }
   }, [post]);
   useEffect(() => {
      setTabArr(tabItemsArt);
   }, [filterParam]);
   //
   useEffect(() => {
      if (filterSearchArticleParam) {
         let mainSearch = orderArticles.filter((item) => item.title.toLowerCase().includes(searchInputArticle));
         setOrderArticles(mainSearch);
      }
   }, [searchInputArticle, filterSearchArticleParam]);

   return (
      <>
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
                  <div className="search-box !mt-0  bg-header-color dark:bg-white dark:text-text-gray-color rounded-2xl  flex  py-3.5 ">
                     <input
                        value={searchInputArticle}
                        onInput={(e) => {
                           setSearchInputArticle(e.target.value);
                           navigate(`/blog?q=${e.target.value}`);
                        }}
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
               <div className="  gap-x-9 col-span-4 grid mt-[18px] md:hidden ">
                  <SortingCourseModal categoryName={filterParam} items={tabArr} filterCategoryParam={filterParam}>
                     {" "}
                     <div className=" bg-header-color dark:bg-white dark:text-black flex rounded-[30px] py-[13px]">
                        <div className=" mx-auto flex gap-x-4">
                           <HiArrowsUpDown className=" my-auto " style={{ fontSize: 25 }} />
                           <span>
                              {filterParam === "usual" ? "عادی" : filterParam === "newest" ? "جدید ترین" : filterParam === "oldest" ? "قدیمی ترین" : filterParam === "opinionated" ? "پرنظرها" : ""}
                           </span>
                        </div>
                     </div>
                  </SortingCourseModal>
               </div>
               {/* hidden*/}
               <div className="CardsSec col-span-4  lg:col-span-2 xl:col-span-3   gap-11 ">
                  <div className=" overflow-hidden bg-header-color dark:bg-white dark:!text-black md:flex gap-x-12 cursor-pointer py-4 rounded-2xl hidden mt-9 lg:mt-0">
                     <div className=" flex  ">
                        <HiArrowsUpDown style={{ fontSize: 30 }} className=" ms-3 " />
                        <span className=" text-[16.5px] flex my-auto " style={{ fontFamily: "danaMedium" }}>
                           مرتب سازی بر اساس :
                        </span>
                     </div>
                     {tabArr.map((item) => {
                        return (
                           //
                           <Link to={`/blog?q=${item.path}`} className={` dark:!text-gray-900 flex  px-3 gap-x-2 ${filterParam === item.path ? "active " : ""}`} style={{ color: "white" }}>
                              <span className=" text-[15px]  my-auto" style={{ fontFamily: "danaMedium" }}>
                                 {item.title}
                              </span>
                           </Link>
                        );
                     })}
                  </div>
                  <div className="  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-11 mt-[24px] ">
                     {orderArticles.length > 0 ? (
                        orderArticles
                           .filter((item) => item.publish === 1)
                           .map((item) => (
                              <div className=" col-span-1 ">
                                 <Article {...item} />
                              </div>
                           ))
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
