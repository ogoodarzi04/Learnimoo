import React, { useEffect, useState } from "react";
//
import { FaUsers } from "react-icons/fa";
import { HiMiniStar } from "react-icons/hi2";
import { Progress } from "@material-tailwind/react";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
export default function LeftSideCourseDetails(props) {
   return (
      <aside className=" LeftSideCourseDetails space-y-12 text-white dark:!text-black lg:block hidden">
         {/* <!-- Students & Rating & Progress --> */}
         <div className="dark:bg-white bg-header-color rounded-2xl p-4.5  sm:p-8 ">
            <div className="flex gap-x-7">
               <div
                  className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-5 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 rounded-xl dark:!bg-light-theme-color"
                  style={{ backgroundColor: "rgb(51 60 76)" }}
               >
                  <FaUsers className=" text-limon-color ms-3.5" style={{ fontSize: 45 }} />
                  <div>
                     <span className="block font-bold text-sm md:text-base">{props.courseDetails.courseStudentsCount}</span>
                     <span className="block text-sm opacity-70">دانشجو</span>
                  </div>
               </div>
               <div
                  className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5  rounded-xl dark:!bg-light-theme-color"
                  style={{ backgroundColor: "rgb(51 60 76)" }}
               >
                  <HiMiniStar className=" text-orange-500 ms-3.5" style={{ fontSize: 45 }} />

                  <div>
                     <span className="block font-bold text-sm md:text-base">5.0</span>
                     <span className="block text-sm opacity-70">رضایت</span>
                  </div>
               </div>
            </div>
            <div className="mt-3.5 sm:mt-9">
               <div className="flex items-center justify-between danaDemiBold  mb-3">
                  <span>درصد تکمیل دوره</span>
                  <span>100%</span>
               </div>
               <Progress value={100} color="yellow" className=" h-5" />
            </div>
         </div>
         {/* <!-- Course Teacher --> */}
         <div className="dark:bg-white bg-header-color rounded-2xl pt-6 px-4.5 pb-4.5 md:py-10 md:px-5 text-center">
            <img
               className="block mb-4 mx-auto object-cover rounded-full"
               width="90"
               height="90"
               src="https://secure.gravatar.com/avatar/50db59beddbfed36a1646dae99ca7b2d?s=96&amp;d=mm&amp;r=g"
               alt="محمدامین سعیدی راد"
            />
            <span className=" danaDemiBold text-3xl mb-2 ">
               {props.courseDetails.creator?.name} | {props.courseDetails.creator?.role === "ADMIN" && "مدرس دوره"}
            </span>
            <div className="flex items-center cursor-pointer dark:text-yellow-600 text-limon-color mx-auto w-max mt-7 ">
               <div
                  className="md:hover:bg-limon-color md:dark:hover:bg-yellow-600 md:hover:text-gray-color md:dark:hover:text-white rounded-full transition-colors gap-x-2 md:px-7 md:py-3.5"
                  style={{ border: "1px solid rgb(255,235,59)" }}
               >
                  <span className=" my-auto">مشاهده پروفایل من</span>
               </div>
            </div>
         </div>
         {/* <!-- Course Short Link --> */}
         <div className="hidden lg:block dark:bg-white bg-header-color rounded-2xl p-[20px] text-center">
            <span className=" danaDemiBold text-3xl  ">لینک کوتاه آموزش</span>
            <div className="flex items-center justify-between gap-x-3 p-4 mt-[20px]  bg-light-blue-600/10  rounded-2xl " style={{ border: "1px dashed rgb(60, 153, 252)", color: "rgb(60, 153, 252)" }}>
               <button onclick="navigator.clipboard.writeText('https://sabzlearn.ir/?p=138');showNotification('موفق', 'با موفقیت کپی شد.')">
                  <HiOutlineClipboardDocument style={{ fontSize: 31 }} />
               </button>
               <span className=" danaMedium  w-72 text-3xl text-left truncate">sabzlearn.ir/?p=138</span>
            </div>
         </div>
      </aside>
   );
}
