import React, { useEffect } from "react";
import TicketElement from "../../User/tickets/TicketElement";
//
export default function RecentTickets() {
   //
   return (
      <div className="RecentTickets md:me-16">
         <TicketElement isLeftSideElem={true} isSlice={true} titleSec={"تیکت های اخیر"} />
         <div>
            <div className="bg-[rgb(40,41,61)] dark:!bg-white p-3.5 md:p-7 rounded-3xl mt-11 ">
               <div className="flex justify-between items-center pb-3.5 md:pb-5 mb-6 md:mb-7  dark:!border-b-gray-200 " style={{ borderBottom: "1px solid rgb(50,51,77)" }}>
                  <span className="danaMedium md:text-[20px] dark:!text-gray-700 text-white">پرسش های اخیر</span>
               </div>
               <div>
                  <div className="dark:text-gray-700 text-gray-200 danaLight mt-11 mb-3 leading-7 text-center">تا به الان پرسشی ارسال نکرده‌اید!</div>
               </div>
            </div>
         </div>
      </div>
   );
}
