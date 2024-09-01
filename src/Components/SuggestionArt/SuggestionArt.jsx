import React from "react";
import { IoBook } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
//
export default function SuggestionArt() {
   return (
      <div className="SuggestionArt mt-[35px]">
         <div className="bg-header-color rounded-2xl p-4 sm:p-5 mt-8">
            <div className="flex items-center gap-x-6 mb-10 sm:mb-10 sm:mt-5 relative">
               <span className="absolute -right-6 sm:-right-[21px] block w-[6px] h-[34px] md:h-9.5 bg-amber-400 rounded-r-sm"></span>
               <IoBook className="hidden md:inline-block text-amber-400 " style={{ fontSize: 34 }} />
               <h3 className="danaDemiBold text-xl md:text-[25px]">پیشنهاد مطالعه</h3>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
               <div className="flex items-center gap-x-4 headlinecourse p-4 rounded-xl">
                  <img src="https://sabzlearn.ir/wp-content/uploads/2024/08/1-2-min.webp" className=" h-32 rounded-xl" alt="بهترین زبان برنامه نویسی برای مهاجرت" />
                  <div className=" space-y-8">
                     <a href="https://sabzlearn.ir/blog/best-programming-language-for-migration/" className="danaMedium line-clamp-1 text-white">
                        بهترین زبان برنامه نویسی برای مهاجرت
                     </a>
                     <div className="flex items-center gap-x-2 text-slate-500 mt-4" style={{ color: "rgb(100 116 139)" }}>
                        <CiCalendar style={{ fontSize: 22 }} />
                        <span className="danaMedium text-sm mt-2">1403/05/31</span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-x-4 headlinecourse p-4 rounded-xl">
                  <img src="https://sabzlearn.ir/wp-content/uploads/2024/08/11-min.jpg" className=" h-32 rounded-xl" alt="بهترین زبان برنامه نویسی برای طراحی سایت فروشگاهی" />
                  <div className=" space-y-8">
                     <a
                        href="https://sabzlearn.ir/blog/%d8%a8%d9%87%d8%aa%d8%b1%db%8c%d9%86-%d8%b2%d8%a8%d8%a7%d9%86-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c-%d8%b3%d8%a7%db%8c%d8%aa-%d9%81%d8%b1%d9%88%d8%b4%da%af%d8%a7%d9%87/"
                        className="danaMedium line-clamp-1 text-white"
                     >
                        بهترین زبان برنامه نویسی برای طراحی سایت فروشگاهی
                     </a>
                     <div className="flex items-center gap-x-2 text-slate-500 mt-4" style={{ color: "rgb(100 116 139)" }}>
                        <CiCalendar style={{ fontSize: 22 }} />
                        <span className="danaMedium text-sm mt-2">1403/05/30</span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-x-4 headlinecourse p-4 rounded-xl">
                  <img src="https://sabzlearn.ir/wp-content/uploads/2024/08/05.webp" className=" h-32 rounded-xl" alt="خطرات هوش مصنوعی" />
                  <div className=" space-y-8">
                     <a href="https://sabzlearn.ir/blog/%d8%ae%d8%b7%d8%b1%d8%a7%d8%aa-%d9%87%d9%88%d8%b4-%d9%85%d8%b5%d9%86%d9%88%d8%b9%db%8c/" className="danaMedium line-clamp-1 text-white">
                        خطرات هوش مصنوعی
                     </a>
                     <div className="flex items-center gap-x-2 text-slate-500 mt-4" style={{ color: "rgb(100 116 139)" }}>
                        <CiCalendar style={{ fontSize: 22 }} />
                        <span className="danaMedium text-sm mt-2">1403/05/29</span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-x-4 headlinecourse p-4 rounded-xl">
                  <img
                     src="https://sabzlearn.ir/wp-content/uploads/2024/08/3-2-min.webp"
                     className=" h-32 rounded-xl"
                     alt="بازی های معروف با چه زبان برنامه نویسی ساخته شدند؟ از کال آف دیوتی تا ماینکرفت"
                  />
                  <div className=" space-y-8">
                     <a
                        href="https://sabzlearn.ir/blog/%d8%b2%d8%a8%d8%a7%d9%86-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c-%d8%a8%d8%a7%d8%b2%db%8c-%d9%87%d8%a7%db%8c-%d9%85%d8%b9%d8%b1%d9%88%d9%81/"
                        className="danaMedium line-clamp-1 text-white"
                     >
                        بازی های معروف با چه زبان برنامه نویسی ساخته شدند؟ از کال آف دیوتی تا ماینکرفت
                     </a>
                     <div className="flex items-center gap-x-2 text-slate-500 mt-4" style={{ color: "rgb(100 116 139)" }}>
                        <CiCalendar style={{ fontSize: 22 }} />
                        <span className="danaMedium text-sm mt-2">1403/05/28</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
