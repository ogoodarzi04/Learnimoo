import React, { useState } from "react";
import { Button, Drawer, Typography, IconButton, DialogHeader } from "@material-tailwind/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
//
export default function SortingCourseModal(props) {
   //
   const [openBottom, setOpenBottom] = useState(false);
   const openDrawerBottom = () => setOpenBottom(true);
   const closeDrawerBottom = () => setOpenBottom(false);
   //
   // bg-black/35 backdrop-blur-[8px]
   return (
      <div className="SortingCourseModal">
         <div onClick={openDrawerBottom}>{props.children}</div>
         <Drawer placement="bottom" open={openBottom} onClose={closeDrawerBottom} className=" dark:!bg-white rounded-t-[17px]">
            {/* <div className="mb-6 flex items-center justify-between"> */}
            <DialogHeader className=" rounded-t-[17px] dark:!text-black dark:!bg-[rgb(243,244,246)] " style={{ backgroundColor: "rgb(51 60 76)" }}>
               <div className=" flex my-auto  py-1.5 dark:!text-black text-white ms-2 justify-between w-full">
                  <span className=" dark:!text-black text-white danaMedium text-[17px] mt-1 ">مرتب سازی بر اساس </span>
                  <IoCloseCircleOutline onClick={closeDrawerBottom} style={{ fontSize: 24 }} />
               </div>
            </DialogHeader>
            <div className=" px-8">
               {" "}
               {props.items.map((item) => {
                  return (
                     <div
                        onClick={closeDrawerBottom}
                        style={{ borderBottom: "1px solid #ffffff1a" }}
                        className=" dark:!border-b-gray-200 w-full bg-header-color dark:bg-white dark:!text-black  py-[20px]  justify-between flex  "
                     >
                        <Link to={`?q=${item.path}`} className={`  flex w-full   gap-x-2  dark:!text-gray-800 `}>
                           {" "}
                           <div
                              className={` px-[1px] my-auto flex w-full justify-between text-[16px] danaMedium ${
                                 props.filterCategoryParam === item.path ? "text-limon-color dark:text-yellow-700" : "text-white dark:!text-black"
                              }`}
                           >
                              <span className=" my-auto">{item.title}</span>
                              {props.filterCategoryParam === item.path ? (
                                 <span className=" my-auto">
                                    <AiOutlineCheckCircle style={{ fontSize: 22 }} />
                                 </span>
                              ) : (
                                 ""
                              )}
                           </div>
                        </Link>
                     </div>
                  );
               })}
            </div>
         </Drawer>
      </div>
   );
}
