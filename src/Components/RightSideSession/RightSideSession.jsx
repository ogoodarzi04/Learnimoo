import React, { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineExclamationTriangle, HiOutlineLockClosed, HiOutlinePlay } from "react-icons/hi2";
import Editor from "../../Components/Form/Editor";
import { HiOutlineUpload } from "react-icons/hi";
///
export default function RightSideSession({ sessionsDetails }) {
   //
   return (
      <>
         <div className=" bg-white dark:!bg-white rounded-[17px] p-4 sm:p-5 text-white dark:!text-black hidden md:block">
            {/* <!-- Course Title --> */}
            <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative pt-7 ">
               <span className="absolute -right-6 sm:-right-[22px] block w-2.5 h-[34px] md:h-14 bg-blue-400 rounded-r-sm "></span>
               <h3 className=" danaBold text-3xl md:text-[25px]">{sessionsDetails?.title}</h3>
            </div>
            {/* <!-- Course Lesson title --> */}
            <div className="flex pb-5 sm:pb-6 !mb-[25px] sm:mb-6 dark:border-b-white/10 dark:!border-b-[#e5e7eb]" style={{ borderBottom: "1px solid rgb(51,60,76)" }}>
               <div className="inline-flex items-center  shrink-0 h-11 bg-blue-400/10 text-blue-500 dark:bg-blue-500/10 text-sm px-[4px] ml-4 danaDemiBold rounded">
                  <span className=" mt-2">23</span>
               </div>
               <h4 className="danaMedium sm:text-[18.5px]">مشاهده ویدئو و فایل پیوست هر جلسه توسط کاربر</h4>
            </div>
            {/* <!-- Course CTA buttons --> */}
            <div className="flex justify-between gap-3.5 flex-wrap pb-2.5">
               <button href="#lesson-qaa" className="w-full py-[11px] rounded-full !text-white dark:!text-black sm:w-56 dark:bg-light-theme-color bg-[rgb(51,60,76)]">
                  <span className=" m-auto">سوال دارم!</span>
               </button>
               <div className="flex gap-y-3.5 gap-x-4 justify-end flex-grow flex-wrap">
                  <button href="#lesson-qaa" className="w-full py-[11px] rounded-full !text-white sm:w-56 brightness-110 bg-[rgb(22,163,74)]">
                     <span className=" m-auto">دانلود پیوست</span>
                  </button>
                  <button href="#lesson-qaa" className="w-full py-[11px] rounded-full !text-white sm:w-56 brightness-110 bg-[rgb(245,158,11)]">
                     <span className=" m-auto">دانلود ویدیو</span>
                  </button>
               </div>
            </div>
         </div>
         {/* second-part */}
         <div className="second-part bg-white dark:!bg-white rounded-[17px] p-4 sm:p-5 text-white dark:!text-black mt-[32px]">
            <div class="flex items-center justify-between mb-6 sm:mb-7 mt-3">
               <div class="flex items-center gap-x-3 relative">
                  <span className="absolute -right-6 sm:-right-[22px] block w-2.5 h-[34px] md:h-14 bg-red-500 rounded-r-sm "></span>
                  <FaCommentDots style={{ fontSize: 31 }} className=" text-red-500" />
                  <h3 class="danaDemiBold text-[19px] font-bold  md:text-4xl ms-4"> پرسش و پاسخ</h3>
               </div>
            </div>
            <div class="mb-12 pb-12  mt-14 dark:!border-b-[#e5e7eb]" style={{ borderBottom: "1px solid rgb(51,60,76)" }}>
               <h5 class="danaBold mb-3">چگونه سوال خود را مطرح کنم تا به بهترین پاسخ ممکن برسم؟</h5>
               <div class="text-[rgb(156,163,175)]">
                  برای اینکه مهارت حل مسئله و دیباگ کردن‌تون رو بالا ببرید، قبل از اینکه سوالی بپرسید، با دقت و تمرکز سعی کنید مشکل رو خودتون حل کنید. اگه به جواب نرسیدید، می‌تونید از گوگل کمک بگیرید.
                  اگه با خطایی مواجه شدید یا نیاز به نمونه‌ای داشتید، با استفاده از کلمات کلیدی مختلف توی گوگل سرچ کنید و از سایت‌هایی مثل Stack Overflow کمک بگیرید. (جواب 99٪ سوالات با این روش زیر 5
                  دقیقه پیدا میشه)
                  <br />
                  از پرسیدن سوالات کلی مثل «من مثل شما انجام دادم ولی کار نکرد» یا «کد من مشکل داره و اجرا نمیشه» که جزئیات ندارن، خودداری کنید. وقتی سوال می‌پرسید، لطفاً اون رو با مستندات و به صورت
                  شفاف و واضح بیان کنید تا قابل تحلیل و بررسی باشه. سعی کنید سوالاتتون مفهومی و دقیق باشه تا مکالمه‌ای که دارید خلاصه و مفید باشه. همچنین قبل از اینکه سوال ارسال کنید، یه بار خودتون
                  اون رو بخونید و مطمئن بشید که سوالتون خوانا و واضحه.
               </div>
               <h5 class="danaBold mb-3 mt-12">چه انتظاراتی از پشتیبانان باید داشته باشم؟</h5>
               <div class="text-[rgb(156,163,175)]">
                  از مدرسین و پشتیبانان انتظارات منطقی و مرتبط با خدمات دریافتی خود داشته باشید. حل مشکلات خارج از مباحث و پروژه های دوره در حیطه وظایف پشتیبانان/مدرسین نیست. اگر نیاز به مشاوره دارید
                  میتوانید از طریق تیکت ها به واحد مشاوره پیام دهید
               </div>
            </div>
            <div className="flex gap-x-6 mb-4 sm:mb-5 mt-11 transition-all ">
               <div className="flex-center rounded-full my-auto p-[1px] bg-gray-400 dark:bg-text-gray-color">
                  <div className="flex-center  rounded-full m-auto dark:!text-light-theme-color" style={{ color: "rgb(51 60 76)" }}>
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
            <input type="hidden" value="4125" id="comment-id" />
            <input type="hidden" value="no" id="comment-is-reply" />
            <div className="flex transition-all  items-center gap-x-1.5 md:gap-x-2.5 text-red-400  rounded-lg">
               <div className=" shrink-0">
                  <HiOutlineExclamationTriangle style={{ fontSize: 25 }} />
               </div>
               <div>
                  <p className="text-sm md:danaMedium ">لطفا قبل از ثبت پرسش بالاتر بخش قوانین ایجاد سوال را مطالعه کنید.</p>
               </div>
            </div>
            <div className=" mt-[13px] ">
               <Editor
                  content={""}
                  placeholder={"سوال خود را بپرسید..."}
                  // articleBody={newBody} setArticleBody={setNewBody}
               ></Editor>
            </div>
            <div className="md:flex md:justify-between gap-3.5 flex-wrap pb-2.5 mt-10 w-full">
               <div className=" flex gap-x-3 cursor-pointer">
                  <HiOutlineUpload style={{ fontSize: 30 }} className=" my-auto" />
                  <p className=" my-auto danaDemiBold">اگر فایل ضمیمه ای دارید لطفا آپلود کنید</p>
               </div>
               <div className=" mt-6 mb-7 md:mt-0">
                  <button
                     // onClick={() => SetShowTextArea(false)}
                     className="flex-grow w-full sm:grow-0 px-[55px] py-[9px] md:hover:bg-[rgb(245,158,11)] text-[rgb(245,158,11)] hover:text-header-color transition-colors "
                     id="comment-submit-btn"
                     style={{ borderRadius: " 30px", border: "1px solid rgb(245,158,11)" }}
                  >
                     <div className="  danaMedium flex  mx-auto w-max  cursor-pointer ">
                        <span className=" mt-1.5 text-[16px]">ارسال</span>
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
