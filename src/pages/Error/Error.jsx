import React from "react";

export default function Error() {
   const initialTheme = localStorage.getItem("theme");
   return (
      <div>
         <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sabz-color opacity-30 blur-[120px] rounded-full"></div>
         <div className=" 404">
            <img src="/images/page-found-concept-illustration_114360-1869.avif" className=" rounded-full z-50 absolute m-auto inset-0" alt="" />
         </div>
         <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-limon-color opacity-30 blur-[120px] rounded-full"></div>
      </div>
   );
}
