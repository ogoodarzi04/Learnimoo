import React from "react";
//
import "./HeadlineCourse.css";
import CustomAccordian from "../Guide/Accordian/CustomAccordian";
import { HeadlineDatas } from "../../datas";
import { IoIosArrowDown } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi2";

//
export default function HeadlineCourse() {
   return (
      <div className="HeadlineCourse space-y-8 mt-12 bg-header-color dark:bg-white text-white dark:!text-black py-8 px-8 rounded-2xl">
         <div className="flex items-center gap-x-5 mb-5 sm:mb-6 relative">
            <span className="absolute -right-6 sm:-right-[28px] block w-[6px] h-[34px] md:h-[36px] bg-blue-400 rounded-r-sm "></span>
            <HiAcademicCap className=" hidden md:inline-block text-blue-400" style={{ fontSize: 38 }} />
            <div className=" danaDemiBold text-[21px] md:text-[25px]">سرفصل ها</div>
         </div>
         {HeadlineDatas.map((item) => (
            <CustomAccordian
               {...item}
               bgColor={"headlinecourse dark:bg-light-theme-color "}
               arrowIcon={<IoIosArrowDown />}
               fontTitle={"!text-[15px] !font-thin "}
               pe={"pe-0"}
               isRightsideIcon={false}
               stylePageAccor={" rounded-2xl "}
               ex={" "}
               marginTit={"ms-7 py-1 "}
               isOpenAcc={false}
               key={item.id}
            ></CustomAccordian>
         ))}
      </div>
   );
}
