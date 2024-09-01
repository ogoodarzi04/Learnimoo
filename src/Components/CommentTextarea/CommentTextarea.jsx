import React, { useState } from "react";
//
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

//
export default function CommentTextarea() {
   const [showTextArea, SetShowTextArea] = useState(false);
   const [changeComment, setChangeComment] = useState(false);
   //
   return (
      <div className="CommentTextarea bg-header-color rounded-2xl p-4 sm:p-5  mt-8 text-white " id="course-comments">
         <div className="flex items-center justify-between mb-6 sm:mb-7 mt-2">
            <div className="flex items-center gap-x-3 relative">
               <span className="absolute -right-6 sm:-right-[22px] block w-2.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
               <HiChatBubbleLeftRight className=" hidden md:inline-block text-red-500  " style={{ fontSize: 38 }} />
               <div className=" danaDemiBold text-[20px] md:text-[25px]">نظرات</div>
            </div>
            {/* <!-- New Comment Button --> */}
            <button onClick={""} className=" bg-limon-color hover:opacity-75 px-[12px] py-[5.5px]" style={{ borderRadius: " 30px" }}>
               <div className=" danaMedium flex  mx-auto w-max text-header-color gap-x-3">
                  <span className=" mt-1.5 text-[13px]" onClick={() => SetShowTextArea(true)}>
                     ایجاد نظر جدید
                  </span>
                  <span className=" my-auto flex">
                     <HiOutlineChatBubbleBottomCenterText className=" my-auto" style={{ fontSize: 20 }} />
                  </span>
               </div>
            </button>
         </div>
         {!showTextArea ? (
            <div id="comment-alert" className=" text-limon-color bg-amber-600/15  p-4 !md:p-5 rounded-lg  md:danaDemiBold mb-6 text-[14px] mt-12">
               دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید نخواهد شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح کنید.
            </div>
         ) : (
            ""
         )}

         <div id="comment-form" className="active2">
            {showTextArea ? (
               <div className="flex gap-x-6 mb-4 sm:mb-5 mt-11 transition-all ">
                  <div className="flex-center rounded-full my-auto p-[1px] bg-gray-400">
                     <div className="flex-center  rounded-full m-auto" style={{ color: "rgb(51 60 76)" }}>
                        <FaCircleUser style={{ fontSize: 47 }} className=" " />
                     </div>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="font-danaMedium">omidKing</span>
                     <span className="font-danaLight text-sm opacity-70" id="comment-to">
                        ثبت نظر جدید
                     </span>
                  </div>
               </div>
            ) : (
               ""
            )}
            {showTextArea ? (
               <>
                  {" "}
                  <input type="hidden" value="4125" id="comment-id" />
                  <input type="hidden" value="no" id="comment-is-reply" />
                  <div className="flex transition-all  items-center gap-x-1.5 md:gap-x-2.5 bg-red-500 text-white px-4 py-3 rounded-lg mb-3 mt-9">
                     <div className=" shrink-0">
                        <HiOutlineExclamationTriangle style={{ fontSize: 25 }} />
                     </div>
                     <div>
                        <p className="text-sm md:font-danaMedium">لطفا پرسش مربوط به هر درس یا ویدئو دوره را در صفحه همان ویدئو مطرح کنید.</p>
                     </div>
                  </div>
                  <textarea
                     rows="6"
                     id="comment-textarea"
                     className="w-full transition-all headlinecourse  block p-4 md:p-4 mt-[13px]  danaMedium text-sm rounded-xl mb-10"
                     placeholder="نظر خود را بنویسید ..."
                  ></textarea>
                  <div className="flex gap-x-6 md:gap-x-4 justify-end mt-4">
                     <button
                        onClick={() => SetShowTextArea(false)}
                        className="flex-grow sm:grow-0  px-24 py-[5.5px] md:hover:bg-limon-color text-limon-color hover:text-header-color transition-colors "
                        id="comment-submit-btn"
                        style={{ borderRadius: " 30px", border: "1px solid #fbfb73" }}
                     >
                        <div className="  danaMedium flex  mx-auto w-max  cursor-pointer ">
                           <span className=" mt-1.5 text-[13px]"> لغو</span>
                        </div>
                     </button>
                     <button className="flex-grow sm:grow-0  bg-limon-color hover:opacity-75 px-24 py-[5.5px]" id="comment-submit-btn" style={{ borderRadius: " 30px" }}>
                        <div className=" danaMedium flex  mx-auto w-max text-header-color ">
                           <span className=" mt-1.5 text-[13px]"> ارسال</span>
                        </div>
                     </button>
                  </div>
               </>
            ) : (
               ""
            )}
         </div>
         {/* <button data-id="4125" type="button" className="show-more button-xl button-primary w-full sm:w-auto mt-5 mx-auto">
            مشاهده بیشتر
            <svg className="show-more__icon w-6 h-6">
               <use href="#chevron-down"></use>
            </svg>
            <svg className="show-more__loading hidden w-6 h-6 animate-spin animate-reverse">
               <use href="#refresh"></use>
            </svg>
         </button> */}
         <div className=" w-full flex pb-2.5">
            <button onClick={() => setChangeComment((prev) => !prev)} className=" h-[52px] bg-limon-color hover:opacity-75 px-7 mt-14 mx-auto w-full sm:w-max" style={{ borderRadius: " 30px" }}>
               <div className="  font-danaBold flex gap-x-4 mx-auto w-max text-header-color">
                  <span className=" my-auto">مشاهده{!changeComment ? " بیشتر" : " کمتر"}</span>
                  <span className={` my-auto ${changeComment ? " rotate-180" : ""}`}>
                     <IoIosArrowDown style={{ fontSize: 24 }} />
                  </span>
               </div>
            </button>
         </div>
      </div>
   );
}
