import React, { useEffect, useState } from "react";
//
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineCalendar } from "react-icons/hi2";
import { SlEye } from "react-icons/sl";
import { HiOutlineBars4 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import useFetch from "../../Hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
//
export default function ArticleDetails({ datas }) {
   const [showHeadlines, setShowHeadlines] = useState(true);
   //
   return (
      <>
         {datas.map((item) => {
            console.log(item);
            return (
               <div className="ArticleDetails bg-header-color dark:bg-white rounded-2xl p-4 sm:p-5 text-white dark:!text-black">
                  {/* <!-- head --> */}
                  <div className=" flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6  relative mt-7 dark:!border-gray-200" style={{ borderBottom: "1px solid #ffffff1a" }}>
                     <span className="absolute -right-6 sm:-right-[21px] block w-2.5 h-[34px] md:h-9.5 bg-blue-500 rounded-r-sm"></span>
                     <h1 className=" danaDemiBold text-xl md:text-[26px]/10 text-white dark:!text-black ms-2.5">{item?.title}</h1>
                  </div>
                  {/* <!-- info --> */}
                  <div className="grid sm:flex grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-3 mb-10 danaMedium text-sm sm:!text-[16px]" style={{ color: "rgb(100 116 139)" }}>
                     {/* <!-- author --> */}
                     <div className="flex items-center gap-x-3.5">
                        <HiOutlineUser style={{ fontSize: 27 }} />
                        <span>{item.creator?.name}</span>
                     </div>
                     {/* <!-- date --> */}
                     <div className="flex items-center gap-x-3.5">
                        <HiOutlineCalendar style={{ fontSize: 27 }} />
                        <span>{item?.createdAt?.slice(0, 10)}</span>
                     </div>
                     {/* <!-- category --> */}
                     {/* <!-- view count --> */}
                     <div className="flex items-center gap-x-3.5">
                        <SlEye style={{ fontSize: 27 }} />
                        <span>21</span>
                     </div>
                  </div>
                  <div>
                     {/* <!-- thumbnail --> */}
                     <img src={`https://learnimo.liara.run/courses/covers/${item?.cover}`} className="aspect-video object-cover rounded-2xl w-full" alt="فرق بک اند و فرانت اند چیست" />{" "}
                     <div className="rounded-lg !rounded-tr-none  mt-8 overflow-hidden mb-6 md:mb-8 dark:!border-gray-300" id="toc-collapse" style={{ border: "1px solid rgb(100 116 139)" }}>
                        {" "}
                        <div className="flex items-center justify-between px-4 py-[20px] dark:!border-b-gray-300" style={{ borderBottom: "1px solid rgb(100 116 139)" }}>
                           {" "}
                           <div className="flex items-center gap-x-3.5">
                              {" "}
                              <HiOutlineBars4 style={{ fontSize: 24 }} /> <span className="text-sm md:!text-[16.5px] md:danaMedium">سرفصل های این مقاله: </span>{" "}
                           </div>{" "}
                           <button
                              onClick={() => setShowHeadlines((prev) => !prev)}
                              className=" flex   p-1.5 rounded-full my-auto dark:!bg-gray-color"
                              style={{ backgroundColor: "rgb(100 116 139)" }}
                              data-collapse="#toc-collapse"
                              data-height="h-16 md:h-17"
                           >
                              {" "}
                              <IoIosArrowDown className="m-auto" style={{ fontSize: 21 }} />{" "}
                           </button>{" "}
                        </div>{" "}
                        {showHeadlines ? (
                           <div className="flex flex-col gap-4  p-5 text-sm md:!text-[16.5px] ">
                              {" "}
                              <a href="#h_1" className=" danaDemiBold text-white dark:!text-black">
                                 {" "}
                                 <span>بک اند و فرانت اند چیست؟</span>{" "}
                              </a>{" "}
                              <a href="#h_2" className=" danaDemiBold text-white dark:!text-black">
                                 {" "}
                                 <span>فرق بک اند و فرانت اند چیست</span>{" "}
                              </a>{" "}
                              <a href="#h_3" className=" danaDemiBold text-white dark:!text-black">
                                 {" "}
                                 <span>زبان‌ های برنامه‌ نویسی بک اند و فرانت اند</span>{" "}
                              </a>{" "}
                              <a href="#h_4" className=" danaDemiBold text-white dark:!text-black">
                                 {" "}
                                 <span>درآمد برنامه نویسی بک اند بالاتر است یا فرانت اند؟</span>{" "}
                              </a>{" "}
                              <a href="#h_5" className=" danaDemiBold text-white dark:!text-black">
                                 {" "}
                                 <span>برنامه‌ نویسی بک اند سخت‌تر است یا فرانت اند؟</span>{" "}
                              </a>{" "}
                           </div>
                        ) : (
                           ""
                        )}{" "}
                     </div>{" "}
                     <div className="dynomicElements" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.body) }}></div>
                     {/* // <!-- Full Description --> */}{" "}
                  </div>
               </div>
            );
         })}
      </>
      // <div>dffd</div>
   );
}
