import React, { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import useFetch from "../../Hooks/useFetch";
import Video from "../../Components/Video/Video";
import RightSideSession from "../../Components/RightSideSession/RightSideSession";
import LeftSideSession from "../../Components/LeftSideSession/LeftSideSession";
import { Context } from "../../contexts/Context";
//
export default function SessionInfo() {
   const { DOMAIN } = useContext(Context);
   const [sessionsDetails, setSessionsDetails] = useState({});
   const [sessions, setSessions] = useState([]);
   let { courseName } = useParams();
   let { sessionID } = useParams();
   let navigate = useNavigate();
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const mainCourses = () => {
      fetch(`${DOMAIN}courses/${courseName}/${sessionID}`, {
         headers: {
            Authorization: `Bearer ${userDatas.token}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            if (!data.message) {
               setSessionsDetails(data.session);
               setSessions(data.sessions);
               return;
            }
            navigate("/*");
         });
   };
   useEffect(() => {
      // console.log(sessionsDetails);
      mainCourses();
   }, [sessionID]);
   //
   const { getAllDatas, post, isPending, err } = useFetch();
   const [objs, setObjs] = useState([]);
   const [courseSessDet, setCourseSessDet] = useState([]);
   const fetchData = () => {
      getAllDatas(`${DOMAIN}courses/${courseName}`, false);
      //
   };
   useEffect(() => {
      fetchData();
   }, []);
   useEffect(() => {
      if (Object.keys(post)?.length > 0) {
         let { createdAt, courseStudentsCount, isComplete } = post;
         setObjs([{ desc: isComplete === 1 ? "به اتمام رسیده" : "در حال برگزاری" }, { desc: createdAt?.slice(0, 10) }, { desc: courseStudentsCount }]);
         setCourseSessDet(post);
      }
   }, [post]);
   //
   if (isPending) return <div>loading ...</div>;
   if (Object.keys(courseSessDet)?.length > 0)
      return (
         <>
            <Header />
            <div className="SessionInfo   relative container ">
               <div className="FirstSec mt-16   relative container ">
                  <Breadcrumb
                     Links={[
                        { id: 1, title: "همه دوره ها", path: `/AllCourses` },
                        { id: 2, title: `${courseName}`, path: `/course-info/${courseName}` },
                        { id: 3, title: `${sessionsDetails?.title}` },
                     ]}
                  />
               </div>
               <div className=" ">
                  <Video isHeight={" md:h-[709px] h-[220px]"} cover={sessionsDetails?.video} />
               </div>
               <div className="flex flex-col-reverse md:grid md:grid-cols-6 gap-6 sm:gap-11 mt-12 lg:mt-20 space-y-4">
                  <div className=" md:col-span-4">
                     <RightSideSession sessionsDetails={sessionsDetails} />
                  </div>
                  <div className=" md:col-span-2 ">
                     <LeftSideSession objs={objs} courseSessDet={courseSessDet} sessions={sessions} courseName={courseName} />
                  </div>
                  <div className=" bg-white dark:!bg-white rounded-[17px] p-4 sm:p-5 text-white dark:!text-black md:hidden block">
                     {/* <!-- Course Title --> */}
                     <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative pt-7 ">
                        <span className="absolute -right-6 sm:-right-[22px] block w-2.5 h-[34px] md:h-14 bg-blue-400 rounded-r-sm "></span>
                        <h3 className=" danaBold text-3xl md:text-[25px]">{sessionsDetails?.title}</h3>
                     </div>
                     {/* <!-- Course Lesson title --> */}
                     <div className="flex pb-5 sm:pb-6 !mb-[25px] sm:mb-6 dark:border-b-white/10 dark:!border-b-[#e5e7eb]" style={{ borderBottom: "1px solid rgb(51,60,76)" }}>
                        <div className="inline-flex items-center  shrink-0 h-11 bg-blue-400/10 text-blue-500 dark:bg-blue-500/10 text-sm px-[4px] ml-4 danaDemiBold rounded">
                           <span className=" mt-2">23</span>
                        </div>
                        <h4 className="danaMedium sm:text-[18.5px]">مشاهده ویدئو و فایل پیوست هر جلسه توسط کاربر</h4>
                     </div>
                     {/* <!-- Course CTA buttons --> */}
                     <div className="flex justify-between gap-3.5 flex-wrap pb-2.5">
                        <button href="#lesson-qaa" className="w-full py-[11px] rounded-full !text-white dark:!text-black sm:w-56 dark:bg-light-theme-color bg-[rgb(51,60,76)]">
                           <span className=" m-auto">سوال دارم!</span>
                        </button>
                        <div className="flex gap-y-3.5 gap-x-4 justify-end flex-grow flex-wrap">
                           <button href="#lesson-qaa" className="w-full py-[11px] rounded-full !text-white sm:w-56 brightness-110 bg-[rgb(22,163,74)]">
                              <span className=" m-auto">دانلود پیوست</span>
                           </button>
                           <button href="#lesson-qaa" className="w-full py-[11px] rounded-full !text-white sm:w-56 brightness-110 bg-[rgb(245,158,11)]">
                              <span className=" m-auto">دانلود ویدیو</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Footer />
         </>
      );
}
