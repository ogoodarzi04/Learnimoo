import React from "react";
import "./RoadMap.css";
import TitleSection from "../TitleSection/TitleSection";
import { roadmapBoxes } from "../../datas";

//
export default function RoadMap() {
   return (
      <>
         <div className="RoadMap-Wrapper mt-64 ">
            <div className="TitleSec ">
               <TitleSection title="نقشه راه ها" des="نقشه های راه برای شروع اصولی یادگیری" color="bg-red-600" leftBtnText="" />
            </div>
            <div className="BoxSec mt-[43px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-14 gap-8 ">
               {roadmapBoxes.map((item) => {
                  return (
                     <div style={{ fontWeight: 600 }} className={` box py-[19px] bg-gradient-to-r ${item.bgColor} overflow-hidden rounded-[18px] text-[17.5px] ms-[5px]`} key={item.id}>
                        <a href={item.path} className="flex flex-col justify-center items-center h-full " title={item.name}>
                           <div className="text-center text-white ">
                              <div className=" text-white mb-6 mx-auto w-max" style={{ fontSize: 50 }}>
                                 {item.icon}
                              </div>
                              <h3 className="font-danaDemiBold  mb-2 sm:mb-1">{item.name}</h3>
                              <span className="inline-block font-danaMedium  sm:text-[15px] mb-1">{item.count} دوره</span>
                           </div>
                        </a>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
}
