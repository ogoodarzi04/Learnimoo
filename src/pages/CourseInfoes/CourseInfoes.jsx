import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { boxDetails, tabData } from "../../datas";
import { useNavigate, useParams } from "react-router-dom";
import SecCourseDetails from "../../Components/SecCourseDetails/SecCourseDetails";
import BoxCourseDetails from "../../Components/BoxCourseDetails/BoxCourseDetails";
import LeftSideCourseDetails from "../../Components/LeftSideCourseDetails/LeftSideCourseDetails";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import HeadlineCourse from "../../Components/HeadlineCourse/HeadlineCourse";
import RelatedCourses from "../../Components/RelatedCourses/RelatedCourses";
import CommentTextarea from "../../Components/CommentTextarea/CommentTextarea";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

//
export default function CourseInfoes() {
   //
   const [maincourse, setMainCourse] = useState([]);
   let { courseName } = useParams();
   let navigate = useNavigate();
   const mainCourses = () => {
      let mainCourse = tabData.filter((course) => course.title.includes(courseName));
      if (mainCourse.length > 0) {
         setMainCourse(mainCourse);
         return;
      }
      navigate("/*");
   };
   useEffect(() => {
      mainCourses();
   }, [courseName]);
   //
   return (
      <>
         <Header />
         <div className="grid  relative container">
            <div className="FirstSec mt-16 grid  relative container ">
               <Breadcrumb
                  Links={[
                     { id: 1, title: "  دوره ها", path: `/course-category/front-end/` },
                     { id: 2, title: " ارتقای مهارت ها", path: "/course-category/skill-up/" },
                     { id: 3, title: `${courseName}`, path: "/course-category/front-end/afzoone" },
                  ]}
               />
            </div>
            <div className="  text-white ">
               <SecCourseDetails />
            </div>
            <div className=" grid grid-cols-12 gap-6 sm:gap-11 mt-12 lg:mt-20 ">
               <div className="col-span-12 lg:col-span-8 ">
                  <div className=" BoxCourseDetails grid grid-cols-2 sm:grid-cols-3 gap-10 text-white">
                     {boxDetails.map((box) => {
                        return <BoxCourseDetails box={box} />;
                     })}
                  </div>
                  <div className="introduction mt-[27px] ">
                     <CourseDetails />
                  </div>
                  <div className="HeadlineCourses">
                     <HeadlineCourse />
                  </div>
                  <div className="RelatedCourses">
                     <RelatedCourses />
                  </div>
                  <div className="Comments">
                     <CommentTextarea />
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-4 ">
                  <LeftSideCourseDetails />
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
