import React from "react";
import "./TitleSection.css";
import { Link } from "react-router-dom";
//
export default function TitleSection(props) {
   return (
      <>
         <div className="wrapper-title flex items-center justify-center md:justify-between flex-col mb-7 md:mb-10 md:flex-row gap-x-4 gap-y-7 text-white">
            <div className="space-y-7 md:space-y-[23px] md:self-start md:my-auto ">
               <div className="flex items-center justify-center md:justify-start gap-x-2.5">
                  <span className={`hidden md:inline-block size-6 ${props.color} rounded-[2.5px] p-[8px]`}></span>
                  <h2 className="font-danaBold text-2xl md:text-2.5xl  text-[27px] font-extrabold ms-[5px] ">{props.title}</h2>
               </div>
               <p className="text-slate-500 font-danaMedium md:text-[18px]   text-blue-gray-500 text-dir">{props.des}</p>
            </div>
            {props.leftBtnText ? (
               <Link to={`${props.btnHref}`}>
                  <div className="flex items-center cursor-pointer   text-limon-color  ">{props.leftBtnText}</div>
               </Link>
            ) : (
               ""
            )}
         </div>
      </>
   );
}
