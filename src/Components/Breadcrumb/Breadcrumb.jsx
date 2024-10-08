import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi2";
import "./Breadcrumb.css";
import { Link } from "react-router-dom";
//
export default function Breadcrumb(props) {
   return (
      <Breadcrumbs
         separator={
            <span>
               <HiOutlineChevronDoubleLeft className="  dark:!text-light-theme-color !text-theme-color" style={{ fontSize: 40 }} />
            </span>
         }
         className=" !bg-header-color  dark:!bg-white  rounded-2xl "
      >
         <a href="/" className=" text-white dark:!text-gray-800 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
               <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
         </a>
         {props.Links.map((link) => {
            return (
               <Link to={link.path} className={` text-white dark:!text-gray-800 `}>
                  {link.title}
               </Link>
            );
         })}
      </Breadcrumbs>
   );
}
