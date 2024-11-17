import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { Link } from "react-router-dom";
const SITEMAP = [
   {
      widtht: "400",
      title: "درباره لرنیمو",
      links: [
         {
            path: "/",
            name: "شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در لرنیمو، توی سفر به دنیای برنامه نویسی کارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.",
         },
      ],
   },

   {
      widtht: "176",
      title: "دوره های پرطرفدار",
      links: [
         { name: "آموزش ویو ", path: "/course-info/vuejs" },
         { name: "آموزش جاوااسکریپت", path: "/course-info/js-20-lib" },
         { name: "آموزش Html", path: "/course-info/html" },
         { name: "آموزش Canvas", path: "/course-info/canvas" },
      ],
   },
   {
      widtht: "150",
      title: "دسترسی سریع",
      links: [
         { name: "قوانین و مقررات", path: "/conditions" },
         { name: "ارسال تیکت", path: "https://learnimoo.filedl.me/my-account/add_ticket" },
         { name: "همه دوره ها", path: "/AllCourses" },
      ],
   },

   ,
];

// const currentYear = new Date().getFullYear();
export default function Footer() {
   return (
      <footer className=" w-full  mt-52 text-white dark:!text-black h-full dark:bg-white bg-header-color">
         <div className=" w-full  container">
            <div className=" flex justify-between lg:pt-20 py-14 lg:py-0">
               <div className="logo-footer flex gap-x-7">
                  <div className="logo-img my-auto ">
                     <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" className=" md:h-[55px] md:w-[85px] h-[40px] w-[60px] mt-3 " />
                  </div>
                  <div className=" pt-2.5">
                     <p className="danaBold font-bold md:text-[35px] dark:!text-blue-gray-900">لرنیمو</p>
                     <i>learnimoo.ir</i>
                  </div>
               </div>
               <div className=" my-auto flex text-header-color  gap-x-[13px]">
                  <a href="#" className=" transition-transform hover:scale-105 ">
                     <div style={{ backgroundColor: "white" }} className=" rounded-full p-2.5 dark:!bg-[rgb(212,212,212)] dark:!text-white">
                        <InstagramIcon style={{ fontSize: 25 }} />
                     </div>
                  </a>
                  <a href="#" className=" transition-transform hover:scale-105 ">
                     <div style={{ backgroundColor: "white" }} className=" rounded-full p-2.5 dark:!bg-[rgb(212,212,212)] dark:!text-white">
                        <TelegramIcon style={{ fontSize: 25 }} />
                     </div>
                  </a>
               </div>
            </div>
            <div className="flex items-center flex-wrap gap-y-4  gap-x-[48px]   sm:mt-10 pb-[32px] dark:!border-b-blue-gray-100" style={{ borderBottom: "1px solid rgb(51 60 76)" }}>
               <a href="tel:02191030926" className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-[16px] text-white/65 dark:!text-blue-gray-800">
                  <LocalPhoneRoundedIcon style={{ fontSize: 22 }} />
                  02191030926
               </a>
               <a href="mailto:info@learnimoo.ir" className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-[16px]  text-white/65 dark:!text-blue-gray-800">
                  <EmailRoundedIcon style={{ fontSize: 22 }} />
                  info@learnimoo.ir{" "}
               </a>
               <a href="https://t.me/learnimoo_support" className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-[16px]  text-white/65 dark:!text-blue-gray-800">
                  <TelegramIcon style={{ fontSize: 22 }} />
                  learnimoo_support@
               </a>
            </div>
            <div className=" py-12 flex items-start justify-between flex-wrap gap-5 ">
               {SITEMAP.map(({ title, links, widtht }, key) => (
                  <div key={key} style={{ width: `${widtht}px` }}>
                     <p variant="small" className="mb-4 font-bold uppercase text-[24px] ">
                        {title}
                     </p>
                     <ul className="space-y-1">
                        {links.map((link, key) => (
                           <p key={key} as="li" className="font-normal">
                              <Link to={`${link.path}`} className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-white/65 dark:text-blue-gray-800 ">
                                 {link.name}
                              </Link>
                           </p>
                        ))}
                     </ul>
                  </div>
               ))}
               <a href="">
                  <div className=" cursor-pointer">
                     <img src="/images/enamad.png" alt="" />
                  </div>
               </a>
            </div>
            <div className="flex  w-full flex-col items-center justify-center border-t  border-blue-gray-50 pt-4 pb-5 md:flex-row md:justify-between">
               <p variant="small" className="mb-4 text-center font-normal text-white/65 dark:text-blue-gray-800 md:mb-0">
                  کلیه حقوق مادی و معنوی سایت برای لرنیمو محفوظ است.
               </p>
               <div className="flex gap-4 text-white/65 dark:text-blue-gray-800 sm:justify-center">ساخته شده با ❤️ در لرنیمو</div>
            </div>
         </div>
      </footer>
   );
}
