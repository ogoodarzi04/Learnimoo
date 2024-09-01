import React from "react";
import Video from "../Video/Video";
import { HiOutlineAcademicCap } from "react-icons/hi2";
//
export default function SecCourseDetails() {
   return (
      <div className=" SecCourseDetails p-7 lg:p-0 rounded-2xl lg:rounded-none bg-header-color lg:bg-theme-color flex flex-col-reverse lg:grid lg:grid-cols-2 mt-[42px] gap-x-12">
         <div className="Explain-Course overflow-hidden danaDemiBold">
            <p className=" title-course text-[26px] mt-8 lg:mt-0">آموزش Next.js بصورت پروژه محور</p>
            <p className=" des-course mt-7 text-[18px]">
               نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد. نکست رو میشه مکمل ری‌اکت دونست. یعنی هر چی که ری‌اکت
               داره نکست هم داره، بعلاوه چند قابلیت مهم و نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد. نکست رو میشه
               مکمل ری‌اکت دونست. یعنی هر چی که ری‌اکت داره نکست هم داره، بعلاوه چند قابلیت مهم و
            </p>
            <div className=" flex flex-col-reverse sm:flex-row  sm:justify-between mt-32  relative">
               <div>
                  <button className=" h-[52px] bg-limon-color hover:opacity-75 px-7 w-full" style={{ borderRadius: " 30px" }}>
                     <a href=" ">
                        <div className="  font-danaBold flex gap-x-4 mx-auto w-max">
                           <span className="button-xl button-secondary text-[15px]  ">
                              <HiOutlineAcademicCap style={{ fontSize: 24 }} />
                           </span>
                           <span className=" my-auto">ثبت نام در دوره</span>
                        </div>
                     </a>
                  </button>
               </div>
               <div className=" flex gap-x-4 mx-auto  sm:left-1 sm:absolute sm:top-7 mb-6 sm:mb-0">
                  <p className="  opacity-70 line-through text-[20px] ">3,500,000</p>
                  <p className="  font-bold my-auto " style={{ fontSize: "22.5px" }}>
                     1,750,000 تومان
                  </p>
               </div>
            </div>
         </div>
         <div className="Video-Course">
            <Video />
         </div>
      </div>
   );
}
