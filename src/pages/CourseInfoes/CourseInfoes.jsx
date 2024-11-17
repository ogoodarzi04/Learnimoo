import React, { useContext, useEffect, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { boxDetails } from "../../datas";
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
import useFetch from "../../Hooks/useFetch";
import { Context } from "../../contexts/Context";
//
export default function CourseInfoes() {
   const { DOMAIN } = useContext(Context);
   //
   let { courseName } = useParams();
   let navigate = useNavigate();
   //
   const [comments, setComments] = useState([]);
   const [sessions, setSessions] = useState([]);
   const [courseDetails, setCourseDetails] = useState({});
   //
   const { getAllDatas, post, isPending, err } = useFetch();
   const [objs, setObjs] = useState([]);
   const fetchData = () => {
      getAllDatas(`${DOMAIN}menus`, false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   //

   const mainCourses = () => {
      fetch(`${DOMAIN}courses/${courseName}`, {})
         .then((res) => res.json())
         .then((data) => {
            if (!data.message) {
               setComments(data.comments);
               setSessions(data.sessions);
               setCourseDetails(data);
               let { createdAt, support, updatedAt, isComplete } = data;
               setObjs([
                  { desc: isComplete === 1 ? "به اتمام رسیده" : "در حال برگزاری" },
                  { desc: createdAt.slice(0, 10) },
                  { desc: updatedAt.slice(0, 10) },
                  { desc: support },
                  { desc: "جاوااسکریپت" },
                  { desc: "آنلاین" },
               ]);
               return;
            }
            navigate("/*");
         });
   };
   useEffect(() => {
      mainCourses();
   }, [courseName, courseDetails]);
   //
   return (
      <>
         <Header />
         <div className="grid  relative container">
            <div className="FirstSec mt-16 grid  relative container ">
               <Breadcrumb
                  Links={[
                     { id: 1, title: "همه دوره ها", path: `/AllCourses` },
                     { id: 2, title: `${courseDetails.categoryID?.title.split("برنامه نویسی")}`, path: `/category-info/${courseDetails.categoryID?.name}` },
                     { id: 3, title: `${courseName}`, path: `/course-info/${courseName}` },
                  ]}
               />
            </div>
            <div className="  text-white ">
               <SecCourseDetails courseDetails={courseDetails} sessions={sessions} courseName={courseName} />
            </div>
            <div className=" grid grid-cols-12 gap-6 sm:gap-11 mt-12 lg:mt-20 ">
               <div className="col-span-12 lg:col-span-8 ">
                  <div className=" BoxCourseDetails grid grid-cols-2 sm:grid-cols-3 gap-10  text-white">
                     {boxDetails.map((box, index) => {
                        let newBox = { ...box, ...objs[index] };
                        return <BoxCourseDetails box={newBox} />;
                     })}
                  </div>
                  <div className="introduction mt-[27px] ">
                     <CourseDetails courseDetails={courseDetails} />
                  </div>
                  <div className="HeadlineCourses">
                     <HeadlineCourse sessions={sessions} courseDetails={courseDetails} />
                  </div>
                  <div className="RelatedCourses">
                     <RelatedCourses courseName={courseName} />
                  </div>
                  <div className="Comments">
                     <CommentTextarea comments={comments} courseName={courseName} />
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-4 ">
                  <LeftSideCourseDetails courseDetails={courseDetails} />
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
