import React, { useContext, useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import TitleSection from "../TitleSection/TitleSection";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { Context } from "../../contexts/Context";
//
export default function LastCourse(props) {
   const { DOMAIN } = useContext(Context);
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}courses`, false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   return (
      <>
         <div className="LastCourse-Wrapper md:mt-48 mt-40">
            <div className="TitleSec">
               <TitleSection
                  isLeftSideShadow={true}
                  title={props.title}
                  des={props.des}
                  color={props.color}
                  btnHref={"/AllCourses"}
                  leftBtnText={
                     <div className="md:hover:bg-limon-color dark:hover:bg-yellow-600 dark:hover:text-white md:hover:text-black rounded-full transition-colors  md:px-4 md:py-3.5 flex gap-x-3">
                        <div className=" my-auto">
                           <span>مشاهده همه دوره ها</span>
                        </div>
                        <div>
                           <KeyboardBackspaceIcon style={{ fontSize: 30 }} className="  " />
                        </div>
                     </div>
                  }
               />
            </div>
            <div className="CardsSec mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 ">
               {post.map((item) => {
                  // console.log(item);
                  return <CourseCard {...item} isPending={isPending} />;
               })}
            </div>
         </div>
      </>
   );
}
