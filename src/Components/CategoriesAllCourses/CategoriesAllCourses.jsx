import React, { useState } from "react";
import { BsFolder2Open } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import "./CategoriesAllCourses.css";
import { Checkbox, ListItemPrefix } from "@material-tailwind/react";

//
export default function CategoriesAllCourses() {
   const [showcategoryCheckbox, setShowcategoryCheckbox] = useState(true);
   return (
      <div className="CategoriesAllCourses">
         <div className="bg-header-color dark:bg-white dark:text-gray-900 rounded-xl p-4 hidden md:block overflow-hidden " id="category-collapse">
            <div className="flex items-center justify-between mb-4 pb-[19px] dark:text-black dark:!border-b-gray-200" style={{ borderBottom: "1px solid #ffffff1a" }}>
               <div className="flex items-center gap-x-3.5 danaDemiBold">
                  <BsFolder2Open style={{ fontSize: 26 }} />
                  <span className=" mt-2.5 flex">دسته بندی دوره ها</span>
               </div>
               <button onClick={() => setShowcategoryCheckbox((prev) => !prev)} type="button" data-collapse="#category-collapse" data-height="h-17 " className=" my-auto">
                  <IoIosArrowUp className={`${!showcategoryCheckbox ? "rotate-180" : ""}`} style={{ fontSize: 23 }} />
               </button>
            </div>
            {showcategoryCheckbox ? (
               <div className="space-y-7">
                  <label className="checkbox ">
                     <ListItemPrefix className=" flex gap-x-3.5">
                        <Checkbox
                           value="yes"
                           // color="blue"
                           id="vertical-list-react"
                           ripple={false}
                           className="hover:before:opacity-0 rounded-sm w-[16px] h-[16px] dark:bg-[rgb(229,231,235)]  checked:!bg-blue-500 "
                           containerProps={{
                              className: "p-0 headlinecourse ",
                           }}
                        />
                        <span className="text-sm danaMedium select-none mt-1.5">فرانت اند</span>
                     </ListItemPrefix>
                  </label>
                  <label className="checkbox ">
                     <ListItemPrefix className=" flex gap-x-3.5">
                        <Checkbox
                           value="yes"
                           color="blue"
                           id="vertical-list-react"
                           ripple={false}
                           className="hover:before:opacity-0 rounded-sm w-[16px] h-[16px] dark:bg-[rgb(229,231,235)] checked:!bg-blue-500 "
                           containerProps={{
                              className: "p-0 headlinecourse ",
                           }}
                        />
                        <span className="text-sm danaMedium select-none mt-1.5">ارتقای مهارت ها</span>
                     </ListItemPrefix>
                  </label>
                  <label className="checkbox ">
                     <ListItemPrefix className=" flex gap-x-3.5">
                        <Checkbox
                           value="yes"
                           color="blue"
                           id="vertical-list-react"
                           ripple={false}
                           className="hover:before:opacity-0 rounded-sm w-[16px] h-[16px] dark:bg-[rgb(229,231,235)] checked:!bg-blue-500 "
                           containerProps={{
                              className: "p-0 headlinecourse ",
                           }}
                        />
                        <span className="text-sm danaMedium select-none mt-1.5">بک اند</span>
                     </ListItemPrefix>
                  </label>
                  <label className="checkbox ">
                     <ListItemPrefix className=" flex gap-x-3.5">
                        <Checkbox
                           value="yes"
                           color="blue"
                           id="vertical-list-react"
                           ripple={false}
                           className="hover:before:opacity-0 rounded-sm w-[16px] h-[16px] dark:bg-[rgb(229,231,235)] checked:!bg-blue-500 "
                           containerProps={{
                              className: "p-0 headlinecourse ",
                           }}
                        />
                        <span className="text-sm danaMedium select-none mt-1.5">امنیت</span>
                     </ListItemPrefix>
                  </label>
                  <label className="checkbox ">
                     <ListItemPrefix className=" flex gap-x-3.5">
                        <Checkbox
                           value="yes"
                           color="blue"
                           id="vertical-list-react"
                           ripple={false}
                           className="hover:before:opacity-0 rounded-sm w-[16px] h-[16px] dark:bg-[rgb(229,231,235)] checked:!bg-blue-500 "
                           containerProps={{
                              className: "p-0 headlinecourse ",
                           }}
                        />
                        <span className="text-sm danaMedium select-none mt-1.5">پایتون</span>
                     </ListItemPrefix>
                  </label>
                  <label className="checkbox ">
                     <ListItemPrefix className=" flex gap-x-3.5">
                        <Checkbox
                           value="yes"
                           color="blue"
                           id="vertical-list-react"
                           ripple={false}
                           className="hover:before:opacity-0 rounded-sm w-[16px] h-[16px] dark:bg-[rgb(229,231,235)] checked:!bg-blue-500 "
                           containerProps={{
                              className: "p-0 headlinecourse ",
                           }}
                        />
                        <span className="text-sm danaMedium select-none mt-1.5">مهارت های نرم</span>
                     </ListItemPrefix>
                  </label>
                  <label className="checkbox ">
                     <ListItemPrefix className=" flex gap-x-3.5 ">
                        <Checkbox
                           value="yes"
                           color="blue"
                           id="vertical-list-react"
                           ripple={false}
                           className="hover:before:opacity-0 rounded-sm w-[16px] h-[16px] dark:bg-[rgb(229,231,235)] checked:!bg-blue-500 "
                           containerProps={{
                              className: "p-0 headlinecourse ",
                           }}
                        />
                        <span className="text-sm danaMedium select-none mt-1.5">پی اچ پی</span>
                     </ListItemPrefix>
                  </label>
                  <label className="checkbox ">
                     <ListItemPrefix className=" flex gap-x-3.5">
                        <Checkbox
                           value="yes"
                           color="blue"
                           id="vertical-list-react"
                           ripple={false}
                           className="hover:before:opacity-0 rounded-sm w-[16px] h-[16px]  dark:bg-[rgb(229,231,235)] checked:!bg-blue-500"
                           containerProps={{
                              className: "p-0 headlinecourse ",
                           }}
                        />
                        <span className="text-sm danaMedium select-none mt-1.5">هوش مصنوعی</span>
                     </ListItemPrefix>
                  </label>
               </div>
            ) : (
               ""
            )}
         </div>
      </div>
   );
}
