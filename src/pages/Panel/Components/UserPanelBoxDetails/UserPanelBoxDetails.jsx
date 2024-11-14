import React from "react";
import { HiOutlineCreditCard } from "react-icons/hi2";
//
export default function UserPanelBoxDetails() {
   return (
      <div className="UserPanelBoxDetails">
         <div className="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 w-max  bg-amber-400 dark:bg-yellow-400 p-[8px] rounded-3xl">
            <div className="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-3xl">
               <div className=" text-white mx-auto mt-[17px]">
                  <HiOutlineCreditCard style={{ fontSize: 35 }} className=" mx-auto " />
               </div>
            </div>
            <div className="flex flex-col gap-y-1.5 md:gap-y-[12px] text-white pe-[21px] ms-2">
               <span className="text-[12px]">مجموع پرداخت ها</span>
               <span className="danaDemiBold text-sm md:!text-3xl">
                  1,920,000&nbsp;<span className="slms-price_symbol">تومان</span>
               </span>
            </div>
         </div>
      </div>
   );
}
