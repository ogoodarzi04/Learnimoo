import React, { useState } from "react";
import { HiDocumentText } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

//
export default function CourseDetails() {
   const [changeArt, setChangeArt] = useState(false);
   //
   return (
      <div className="CourseDetails dark:bg-white bg-header-color dark:bg-darker rounded-2xl p-4 sm:p-5  dark:ext-white dark:!text-gray-900 text-white">
         <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
            <span className="absolute -right-6 sm:-right-[21px] block w-[6px] h-[34px] md:h-[36px] bg-amber-400 rounded-r-sm "></span>
            <HiDocumentText className=" hidden md:inline-block text-amber-400" style={{ fontSize: 38 }} />
            <div className=" danaDemiBold text-[21px] md:text-[25px]">توضیحات</div>
         </div>
         <div className="relative overflow-hidden mt-[53px]">
            <div className={`course-content wp-content ${changeArt ? " h-full" : " max-h-[810px] "} opacity-85 `}>
               <p dir="rtl">
                  <img
                     decoding="async"
                     loading="lazy"
                     className="alignnone wp-image-4534 rounded-2xl mb-[21px]"
                     src="https://sabzlearn.ir/wp-content/uploads/2024/05/webpack2-300x169.webp"
                     alt=""
                     width="1143"
                     height="644"
                     srcset="https://sabzlearn.ir/wp-content/uploads/2024/05/webpack2-300x169.webp 300w, https://sabzlearn.ir/wp-content/uploads/2024/05/webpack2-1024x576.webp 1024w, https://sabzlearn.ir/wp-content/uploads/2024/05/webpack2-768x432.webp 768w, https://sabzlearn.ir/wp-content/uploads/2024/05/webpack2-1536x864.webp 1536w, https://sabzlearn.ir/wp-content/uploads/2024/05/webpack2.webp 1920w"
                     sizes="(max-width: 1143px) 100vw, 1143px"
                  />
               </p>
               <p className=" p-[12px] " dir="rtl">
                  در دنیای وب مدرن هر روز پروژه های کوچک و بزرگ جدیدی شروع به اجرا می‌کنند؛ هر پروژه شامل مجموعه ای از فونت ها؛ تصاویر؛ فایل های جاوا اسکریپتی؛ فایل های CSS و وابستگی های مختلف دیگریست
                  که با کنار هم قرار گرفتن آن‌ها ظاهری چشم نواز را تقدیم کاربران آن محصول خواهند کرد.
               </p>
               <p className=" p-[12px]" dir="rtl">
                  مدیریت این فایل ها در گذر زمان به دلیل افزایش حجم و تعداد آن‌ها؛ سخت تر و سخت می‌شود تا جایی که پروژه ها گاها خصوصیت حیاتیِ توسعه‌پذیری خود را از دست می‌دهند؛ اینجا لحظه‌ایست که
                  وب‌پک به توسعه‌دهندگان کمک خواهد کرد تا جلوی این تراژدی را گرفته و توسعه‌پذیری پروژه خود را در سطحی باورنکردنی حفظ کنند.
               </p>
               <p className=" p-[12px]" dir="rtl">
                  وب‌پک یکی از اساسی‌ترین و محبوب‌ترین ابزار‌هاییست که در توسعه وب و فرایندهای آن به شما کمک کرده و باعث می‌شود کنترلی ساده و آسان روی فایل‌ها و وابستگی‌های پروژه خود داشته باشید.
               </p>
               <p className=" p-[12px]" dir="rtl">
                  در این دوره؛ تمامی مباحث مرتبط با وب‌پک را به صورت جامع مورد بحث قرار می‌دهیم و در انتهای دوره به شما این اطمینان را خواهیم داد که با ذهنی آزاد و نگاهی عمیق به وب‌پک بتوانید از تمام
                  امکانات آن در پروژه‌های خود نهایت استفاده را ببرید.
               </p>{" "}
               <p className=" p-[12px]" dir="rtl">
                  در این دوره؛ تمامی مباحث مرتبط با وب‌پک را به صورت جامع مورد بحث قرار می‌دهیم و در انتهای دوره به شما این اطمینان را خواهیم داد که با ذهنی آزاد و نگاهی عمیق به وب‌پک بتوانید از تمام
                  امکانات آن در پروژه‌های خود نهایت استفاده را ببرید.
               </p>{" "}
               <p className=" p-[12px]" dir="rtl">
                  در این دوره؛ تمامی مباحث مرتبط با وب‌پک را به صورت جامع مورد بحث قرار می‌دهیم و در انتهای دوره به شما این اطمینان را خواهیم داد که با ذهنی آزاد و نگاهی عمیق به وب‌پک بتوانید از تمام
                  امکانات آن در پروژه‌های خود نهایت استفاده را ببرید.
               </p>
            </div>
            <div
               className={` course-content-shadow absolute  bottom-0 right-0 left-0 h-[160px] bg-gradient-to-t ${
                  !changeArt ? "from-header-color  dark:from-white from-0% via-white/0%] dark:via-white/[55%] via-70% to-white/0 dark:to-black/0 to-100%" : ""
               }`}
            ></div>
         </div>
         <div className=" w-full flex pb-2.5">
            <button onClick={() => setChangeArt((prev) => !prev)} className=" h-[52px] bg-limon-color hover:opacity-75 px-7 mt-14 mx-auto w-full sm:w-max" style={{ borderRadius: " 30px" }}>
               <div className="  font-danaBold flex gap-x-4 mx-auto w-max text-header-color">
                  <span className=" my-auto">مشاهده{!changeArt ? " بیشتر" : " کمتر"} مطلب</span>
                  <span className={` my-auto ${changeArt ? " rotate-180" : ""}`}>
                     <IoIosArrowDown style={{ fontSize: 24 }} />
                  </span>
               </div>
            </button>
         </div>
      </div>
   );
}
