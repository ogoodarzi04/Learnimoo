import React from "react";
//
import { FaCircleArrowLeft } from "react-icons/fa6";
import { RelatedCourseDatas } from "../../datas";
import { HiSparkles } from "react-icons/hi2";
//
export default function () {
   return (
      <div className="RelatedCourse space-y-8 mt-12 bg-header-color text-white py-8 px-8 rounded-2xl hidden lg:block">
         <div className="flex items-center gap-x-5 mb-5 sm:mb-6 relative">
            <span className="absolute -right-6 sm:-right-[28px] block w-[6px] h-[34px] md:h-[36px] bg-amber-400 rounded-r-sm "></span>
            <HiSparkles className=" hidden md:inline-block text-amber-400" style={{ fontSize: 38 }} />
            <div className=" danaDemiBold text-[21px] md:text-[25px]">دوره های مرتبط</div>
         </div>
         {RelatedCourseDatas.map((item) => (
            <div className=" headlinecourse flex justify-between p-[8px] rounded-2xl">
               <div className="Ri">
                  <div className=" flex gap-x-6">
                     <img className=" w-[96px] h-[54px] rounded-[7px]" src={`${item.img}`} alt="" />
                     <span className=" my-auto cursor-pointer">{item.title}</span>
                  </div>
               </div>
               <div className="Le my-auto flex me-4 text-blue-400 cursor-pointer">
                  <span>مشاهده</span>
                  <FaCircleArrowLeft style={{ fontSize: 17 }} className=" ms-2.5 my-auto" />
               </div>
            </div>
         ))}
      </div>
   );
}
