import React from "react";
import "./Landing.css";

import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import Typewriter from "typewriter-effect";
import CButton from "../../Form/CButton";
export default function Landing() {
   return (
      <div className="  w-full ">
         <div className="flex flex-col-reverse lg:grid  lg:grid-cols-2    gap-y-[70px]">
            <div className=" limo-text relative  xl:mt-64 mt-20 text-white   ">
               <div className="hidden lg:block absolute top-0 right-0 w-[230px] h-[230px] bg-limon-color opacity-35 blur-[120px] rounded-full"></div>
               <div className="hidden lg:block absolute bottom-0 left-52 w-[230px] h-[230px] bg-sabz-color opacity-35 blur-[120px] rounded-full"></div>
               <div className=" text-dir">
                  <h1 className=" danaBold text-white px-4 sm:danaBold font-bold text-7xl  xl:text-[5.625rem]/[70px] 3xl:text-5xl/normal ">
                     آکادمی آموزش
                     <br />
                     برنامه نویسی لرنیمو
                  </h1>
                  <br />
                  <div className=" h-20">
                     <p className="sm:text-[25px]  xl:mt-9 lg:max-w-[440px] xl:max-w-[470px]  danaMedium">
                        <Typewriter
                           onInit={(typewriter) => {
                              typewriter
                                 .typeString(" با آکادمی خصوصی لرنیمو، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن")
                                 .start()
                                 .pauseFor(2000)
                                 .deleteAll()
                                 .typeString("لیمولرن - آکادمی خصوصی برنامه نویسی")
                                 .start()
                                 .pauseFor(2000);
                           }}
                           options={{
                              loop: true,
                           }}
                        />
                     </p>
                  </div>
               </div>

               <div className="flex  items-center justify-center flex-wrap lg:justify-start gap-4 sm:gap-6 mt-12 sm:mt-[67px] ">
                  {/* <button className=" h-[52px] bg-sabz-color hover:opacity-75 px-7" style={{ borderRadius: 30 }}>
                     <a href="">
                        <span className="button-xl button-secondary text-white text-[15px] font-danaBold"> از این مسیر ها شروع کن</span>
                     </a>
                  </button> */}
                  <CButton className=" h-[52px] bg-sabz-color hover:opacity-75 px-7" style={{ borderRadius: 30 }}>
                     <a href="">
                        <span className="button-xl button-secondary text-white text-[15px] font-danaBold"> از این مسیر ها شروع کن</span>
                     </a>
                  </CButton>
                  <a className="flex items-center  gap-x-2 group font-danaMedium cursor-pointer">
                     {/* <button className=" bg-limon-color rounded-full p-2 ms-4">
                        <PlayArrowOutlinedIcon className=" text-sabz-color" style={{ fontSize: 40 }} />
                     </button> */}
                     <CButton className=" bg-limon-color rounded-full p-2 ms-4">
                        <PlayArrowOutlinedIcon className=" text-sabz-color" style={{ fontSize: 40 }} />
                     </CButton>
                     <span className="hidden sm:inline text-white">دوره های رایگان</span>
                  </a>
               </div>
            </div>
            <div className=" limo-img xl:mt-80 mt-20 mx-auto lg:mx-0 md:pb-32" dir="ltr">
               <div className=" ">
                  {" "}
                  <img src="/img/undraw_Web_devices_re_m8sc_prev_ui.png" className="   xl:scale-[1.7] " alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}
