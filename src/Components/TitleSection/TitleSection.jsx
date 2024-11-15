import React from "react";
import "./TitleSection.css";
import { Link } from "react-router-dom";
//
export default function TitleSection(props) {
   return (
      <>
         <div className="wrapper-title relative flex items-center justify-center md:justify-between flex-col mb-7 md:mb-10 md:flex-row gap-x-4 gap-y-7 text-white dark:!text-black">
            <div className="space-y-7 md:space-y-[23px] md:self-start md:my-auto ">
               <div className="flex items-center justify-center md:justify-start gap-x-2.5">
                  <span className={`hidden md:inline-block size-6 ${props.color} rounded-[2.5px] p-[8px]`}></span>
                  <h2 className="danaBold text-2xl md:text-2.5xl  text-[27px] font-bold  ms-[5px]">{props.title}</h2>
               </div>
               <p className="text-slate-500 font-danaMedium md:text-[18px]   text-blue-gray-500 text-dir">{props.des}</p>
            </div>
            {props.leftBtnText ? (
               <Link to={`${props.btnHref}`}>
                  <div className="flex items-center cursor-pointer  text-limon-color dark:text-yellow-600">{props.leftBtnText}</div>
               </Link>
            ) : (
               ""
            )}
            {props.isLeftSideShadow && <div className="hidden lg:block absolute top-0 -left-72 w-[230px] h-[230px] bg-sabz-color opacity-35 blur-[120px] rounded-full"></div>}
         </div>
      </>
   );
}
