import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import ArticleDetails from "../../Components/ArticleDetails/ArticleDetails";
import CommentTextarea from "../../Components/CommentTextarea/CommentTextarea";
import SuggestionArt from "../../Components/SuggestionArt/SuggestionArt";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Context } from "../../contexts/Context";
import useFetch from "../../Hooks/useFetch";
import DOMPurify from "dompurify";
//

export default function ArticleInfoes() {
   const [showClipboard, setShowClipboard] = useState(true);
   //
   let { articleName } = useParams();
   let navigate = useNavigate();
   const userDatas = useContext(Context);
   //
   //
   const [articles, setArticles] = useState([1]);
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`http://learnimoo.filedl.me:3000/articles`, false);
   };
   useEffect(() => {
      fetchData();
   }, [articleName]);

   const mainArticles = () => {
      if (post.length > 0) {
         let mainArticle = post.filter((article) => article.shortName.includes(articleName));
         setArticles(mainArticle);
      }
   };
   useEffect(() => {
      if (articles.length < 1) {
         navigate("/*");
      }
   }, [articles]);

   useEffect(() => {
      mainArticles();
   }, [post]);

   return (
      <>
         <Header />
         <div
            className="grid  relative container "
            // dangerouslySetInnerHTML={{__html:DOMPurify.sanitize()}}
         >
            <div className="FirstSec mt-16">
               <Breadcrumb
                  Links={[
                     { id: 1, title: "وبلاگ", path: "/blog/" },
                     { id: 2, title: `${articleName}`, path: `/blog/${articleName}` },
                  ]}
               />
            </div>
            <div className="ArticleInfoes text-white">
               <div className=" grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 mt-8 md:mt-16 ">
                  <div className="col-span-full lg:col-span-8 xl:col-span-9">
                     <div className="introduction">
                        <ArticleDetails datas={articles} />
                     </div>
                     <div className="SuggestionArt">
                        <SuggestionArt />
                     </div>
                     <div className="Comments mt-[35px]">{/* <CommentTextarea comments={comments} courseName={articleName} /> */}</div>
                  </div>

                  <div className="col-span-full lg:col-span-4 xl:col-span-3 space-y-8">
                     <div className="hidden lg:block bg-header-color dark:bg-white dark:bg-darker rounded-2xl p-[20px] text-center dark:!text-black">
                        <div className=" flex justify-between pb-8 dark:!border-gray-200" style={{ borderBottom: "1px solid #ffffff1a" }}>
                           <div className="flex gap-x-3 ">
                              <IoShareSocialOutline style={{ fontSize: 30 }} />
                              <span className=" danaDemiBold  my-auto">اشتراک گذاری مطلب</span>
                           </div>
                           <div className=" my-auto flex cursor-pointer" onClick={() => setShowClipboard((prev) => !prev)}>
                              <IoIosArrowUp style={{ fontSize: 23 }} className={`${!showClipboard ? "rotate-180" : ""}`} />
                           </div>
                        </div>
                        {showClipboard ? (
                           <div
                              className="flex cursor-pointer items-center justify-between gap-x-3 p-4 mt-[20px]  bg-light-blue-600/10  rounded-2xl "
                              style={{ border: "1px dashed rgb(60, 153, 252)", color: "rgb(60, 153, 252)" }}
                           >
                              <button onclick="navigator.clipboard.writeText('https://sabzlearn.ir/?p=138');showNotification('موفق', 'با موفقیت کپی شد.')">
                                 <HiOutlineClipboardDocument style={{ fontSize: 31 }} />
                              </button>
                              <span className=" danaMedium  w-72 text-3xl text-left truncate">sabzlearn.ir/?p=483</span>
                           </div>
                        ) : (
                           ""
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
