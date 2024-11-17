import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { Alert } from "@material-tailwind/react";
import Article from "../../Components/LastArticles/Article";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { Context } from "../../contexts/Context";

export default function GloballSearch() {
   const { DOMAIN } = useContext(Context);
   //
   // let navigate = useNavigate();
   // let location = useLocation();
   // let searchGloballParam = location.search.split("=")[1];
   //
   const [resultCourses, setResultCourses] = useState([]);
   const [resultArticles, setResultArticles] = useState([]);
   const { value } = useParams();
   //
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}search/${value}`, false);
   };
   useEffect(() => {
      fetchData();
   }, [value]);
   useEffect(() => {
      if (post.allResultCourses?.length > 0) {
         setResultCourses(post?.allResultCourses);
      } else {
         setResultCourses([]);
      }
      if (post.allResultArticles?.length > 0) {
         setResultArticles(post?.allResultArticles);
      } else {
         setResultArticles([]);
      }
   }, [post]);
   return (
      <>
         <Header />
         <div className="GloballSearch container space-y-20">
            <div className="TitleSec mt-20">
               <TitleSection
                  title={`نتیجه دوره برای جستجوی: ${value}`}
                  des=""
                  color="bg-orange-300"
                  leftBtnText={
                     <span className=" text-[19px] font-extrabold" style={{ color: "rgb(100 116 139)", fontWeight: 590 }}>
                        {resultCourses.length} عنوان آموزشی
                     </span>
                  }
               />
            </div>
            <div className="CardsSec mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 ">
               {resultCourses.length > 0 ? (
                  resultCourses.map((item) => {
                     return <CourseCard {...item} />;
                  })
               ) : (
                  <div className=" col-span-4 ">
                     <Alert color="amber" className=" text-2xl w-full">
                        هنوز هیچ دوره ای با این اسم وجود ندارد
                     </Alert>
                  </div>
               )}
            </div>
            <div className="TitleSec">
               <TitleSection
                  title={`نتیجه مقاله برای جستجوی: ${value}`}
                  des=""
                  color="bg-orange-300"
                  leftBtnText={
                     <span className=" text-[19px] font-extrabold" style={{ color: "rgb(100 116 139)", fontWeight: 590 }}>
                        {resultArticles.length} عنوان آموزشی
                     </span>
                  }
               />
            </div>
            <div className="CardsSec mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 ">
               {resultArticles.length > 0 ? (
                  resultArticles.map((item) => {
                     return <Article {...item} />;
                  })
               ) : (
                  <div className=" col-span-4">
                     <Alert color="amber" className=" text-2xl w-full">
                        هنوز هیچ مقاله ای با این اسم وجود ندارد
                     </Alert>
                  </div>
               )}
            </div>
         </div>

         <Footer />
      </>
   );
}
