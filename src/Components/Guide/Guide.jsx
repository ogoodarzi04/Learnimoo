import React, { useEffect } from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./Guide.css";
import { GuidesDatas } from "../../datas";
import CustomAccordian from "./Accordian/CustomAccordian";

//

//
export default function Guide() {
   return (
      <div className="Guide-Wrapper mt-72  relative">
         <div className="TitleSec ">
            <TitleSection title="ما چه کمکی میتونیم بهت بکنیم" des="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره" color="bg-light-blue-600" leftBtnText={""} />
         </div>
         <div className="GuideSec grid grid-cols-1 md:grid-cols-2 md:gap-14 gap-10 mt-16">
            {GuidesDatas.map((item) => {
               // Key = item.id
               return (
                  <CustomAccordian
                     {...item}
                     bgColor={"bg-header-color"}
                     pe={"pe-[34px] ms-9"}
                     fontTitle={"w-max  lg:w-full"}
                     isRightsideIcon={true}
                     stylePageAccor={" h-max rounded-3xl px-4 gap-x-16 grid grid-cols-1 lg:grid-cols-7 lg:h-56"}
                     isOpenAcc={true}
                     ex={"lg:-space-y-7 -space-y-5 pb-4"}
                     marginTit={"ms-0"}
                     key={item.id}
                  ></CustomAccordian>
               );
            })}
         </div>
      </div>
   );
}
///
