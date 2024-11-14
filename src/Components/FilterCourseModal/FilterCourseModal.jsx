import React, { useState } from "react";
import { Button, Dialog, DialogHeader, Switch, Drawer, Typography, IconButton } from "@material-tailwind/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { switchBox } from "../../datas";

import { useNavigate } from "react-router-dom";
//
export default function FilterCourseModal(props) {
   //
   const [size, setSize] = useState(null);
   let navigate = useNavigate();
   const handleOpen = (value) => setSize(value);
   //

   return (
      <>
         <div className="FilterCourseModal  ">
            <div onClick={() => handleOpen("xxl")}>{props.children}</div>
         </div>
         <Dialog className=" dark:!bg-white " open={size === "xs" || size === "sm" || size === "md" || size === "lg" || size === "xl" || size === "xxl"} size={size || "md"} handler={handleOpen}>
            <DialogHeader className=" dark:!bg-[rgb(243,244,246)] " style={{ backgroundColor: "rgb(51 60 76)" }}>
               <div className="  dark:!text-black flex my-auto gap-x-4 py-1.5 text-white ms-2">
                  <IoCloseCircleOutline style={{ fontSize: 24 }} onClick={() => handleOpen(null)} />
                  <span className=" text-white dark:!text-black danaMedium text-[17px] mt-1 ">فیلترها</span>
               </div>
            </DialogHeader>
            <div className=" px-[19px] py-1">
               {" "}
               {switchBox.map((item) => {
                  return (
                     <div
                        style={{ borderBottom: "1px solid #ffffff1a" }}
                        className=" dark:!border-b-gray-200 w-full bg-header-color dark:bg-white dark:text-black  py-[20px] px-[5px] justify-between flex  "
                     >
                        <p className=" text-white dark:!text-black text-[16px] danaMedium">{item.title}</p>
                        <div>
                           {" "}
                           <Switch
                              onChange={(e) => {
                                 item.isCheked = !item.isCheked;
                                 props.setChangedFilter((prev) => !prev);
                                 if (!props.changedFilter) {
                                    navigate(`?q=${item.path}`);
                                 } else {
                                    navigate(``);
                                 }
                              }}
                              id="custom-switch-component"
                              ripple={false}
                              className={`h-full w-full relative ${item.isCheked ? "!bg-[#2ec946]" : "!bg-[rgb(207,216,220)]"}`}
                              containerProps={{
                                 className: "w-[46px] h-[24px] ",
                              }}
                              circleProps={{
                                 className: `before:hidden  left-0.5   border-[1px] dark:!bg-white w-[21px] h-[21px]`,
                              }}
                           />
                        </div>
                     </div>
                  );
               })}
            </div>
         </Dialog>
      </>
   );
}
