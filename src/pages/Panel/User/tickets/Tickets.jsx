import React, { useEffect } from "react";
import TicketElement from "./TicketElement";
import UserPanelBoxDetails from "../../Components/UserPanelBoxDetails/UserPanelBoxDetails";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
//
export default function Tickets(props) {
   //
   return (
      <div className=" Tickets md:px-16  mt-9 mb-24">
         <div className=" flex justify-between">
            <UserPanelBoxDetails />{" "}
            <div className="  bg-[rgb(78,129,251)] flex   rounded-3xl md:px-8 items-center gap-x-2.5 md:gap-x-7 flex-grow md:flex-grow-0 w-max">
               <Link to={`https://learnimoo.filedl.me/my-account/add_ticket`} className="flex  items-center gap-x-2.5 md:gap-x-7 flex-grow md:flex-grow-0 w-max ">
                  <div>
                     <div className=" text-white m-auto">
                        <IoIosAddCircleOutline style={{ fontSize: 32 }} className=" m-auto " />
                     </div>
                  </div>
                  <div className="flex flex-col  text-white   m-auto">
                     <span className="text-[21px] danaDemiBold mt-1.5">تیکت جدید</span>
                  </div>
               </Link>
            </div>
         </div>
         <div className=" mt-[39px]">
            <TicketElement titleSec={"همه تیکت ها"} />
         </div>
      </div>
   );
}
