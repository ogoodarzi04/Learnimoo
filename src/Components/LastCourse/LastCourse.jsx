import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import TitleSection from "../TitleSection/TitleSection";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
//
export default function LastCourse(props) {
   return (
      <>
         <div className="LastCourse-Wrapper mt-80">
            <div className="TitleSec">
               <TitleSection
                  isLeftSideShadow={true}
                  title={props.title}
                  des={props.des}
                  color={props.color}
                  btnHref={"/AllCourses"}
                  leftBtnText={
                     <div className="md:hover:bg-limon-color dark:hover:bg-yellow-600 dark:hover:text-white  md:hover:text-gray-color rounded-full transition-colors gap-x-2 md:px-4 md:py-3.5">
                        <span>
                           مشاهده همه دوره ها
                           <KeyboardBackspaceIcon style={{ fontSize: 30 }} className=" me-3 " />
                        </span>
                     </div>
                  }
               />
            </div>
            <div className="CardsSec mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 ">
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
               <CourseCard />
            </div>
         </div>
      </>
   );
}
