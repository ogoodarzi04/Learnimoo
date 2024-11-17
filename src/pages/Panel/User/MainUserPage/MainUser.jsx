import React, { useContext, useEffect } from "react";
import UserPanelBoxDetails from "../../Components/UserPanelBoxDetails/UserPanelBoxDetails";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import RecentTickets from "../../Components/RecentTickets/RecentTickets";
import CoursesElement from "../courses/coursesElement";
//
export default function MainUser() {
   //
   return (
      <div className="MainUser md:ms-16 mt-[17px]">
         <div className="UserPanelBoxDetails">
            <UserPanelBoxDetails />
         </div>
         <div className=" grid md:grid-cols-2 mt-16 gap-x-11">
            <div className=" recent-view ">
               <div className="flex justify-between items-center bg-[rgb(40,41,61)] dark:!bg-white px-3.5 py-2.5 md:p-7 mb-4 md:mb-5 rounded-3xl">
                  <span className="danaMedium md:text-[20px] text-white dark:!text-black my-auto">اخیرا مشاهده شده</span>
                  <div className="button-sm bg-blue-500/10  dark:bg-secondary/10 dark:text-secondary text-sm p-2 px-4 rounded-3xl">
                     <Link to={"https://learnimoo.filedl.me/my-account/courses"} className="text-blue-500 ">
                        <div className=" flex gap-x-2.5">
                           <span>همه دوره های ثبت‌نام شده</span>
                           <FiArrowLeft style={{ fontSize: 17 }} className=" my-auto" />
                        </div>
                     </Link>
                  </div>
               </div>
               {/* /// */}
               <div className=" grid md:grid-cols-2 gap-8 mt-8 pb-16">
                  <CoursesElement isSlice={true} />
               </div>
            </div>
            <div className=" recent-tickets ">
               <RecentTickets />
            </div>
         </div>
      </div>
   );
}
