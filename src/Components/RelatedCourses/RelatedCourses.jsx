import React, { useContext, useEffect } from "react";
//
import { FaCircleArrowLeft } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
//
export default function (props) {
   const { DOMAIN } = useContext(Context);
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}courses/related/${props.courseName}`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   //
   return (
      <>
         {post?.length > 0 ? (
            <div className="RelatedCourse space-y-8 mt-12 bg-header-color dark:bg-white text-white dark:!text-black py-8 px-8 rounded-2xl hidden lg:block">
               <div className="flex items-center gap-x-5 mb-5 sm:mb-6 relative">
                  <span className="absolute -right-6 sm:-right-[28px] block w-[6px] h-[34px] md:h-[36px] bg-amber-400 rounded-r-sm "></span>
                  <HiSparkles className=" hidden md:inline-block text-amber-400" style={{ fontSize: 38 }} />
                  <div className=" danaDemiBold text-[21px] md:text-[25px]">دوره های مرتبط</div>
               </div>
               {post.map((item) => (
                  <div className=" headlinecourse dark:bg-light-theme-color flex justify-between p-[8px] rounded-2xl">
                     <Link to={`http://learnimoo.filedl.me:3000/course-info/${item?.shortName}`} className=" text-white dark:!text-black">
                        <div className="Ri">
                           <div className=" flex gap-x-6">
                              <img className=" w-[96px] h-[54px] rounded-[7px]" src={`http://learnimoo.filedl.me:3000/courses/covers/${item?.cover}`} alt={item?.name} />
                              <span className=" my-auto cursor-pointer">{item?.name}</span>
                           </div>
                        </div>
                     </Link>
                     <div className="Le my-auto flex me-4 text-blue-400 cursor-pointer">
                        <span>مشاهده</span>
                        <FaCircleArrowLeft style={{ fontSize: 17 }} className=" ms-2.5 my-auto" />
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            ""
         )}
      </>
   );
}
