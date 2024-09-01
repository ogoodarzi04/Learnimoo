import React from "react";
//
export default function BoxCourseDetails({ box }) {
   return (
      <div className="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-4 gap-y-2.5 bg-white dark:bg-darker pt-4 pb-3.5 sm:py-4 px-4.5 rounded-2xl ">
         <div className=" text-limon-color ms-7">{box.icon}</div>
         <div className="space-y-0.5 sm:space-y-1">
            <span className="block danaBold">{box.title}</span>
            <span className="block text-sm opacity-70 text-right">{box.state}</span>
         </div>
      </div>
   );
}
