import React, { useState } from "react";
//
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiOutlinePlay } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
//
const CUSTOM_ANIMATION = {
   mount: { scale: 1 },
   unmount: { scale: 0.9 },
};

function Icon({ openAcc }) {
   return (
      <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${openAcc ? "rotate-180" : ""} h-10 w-10 transition-transform`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
         </svg>
      </div>
   );
}
//

export default function CustomAccordian({
   titlee,
   icon,
   iconColor,
   iconBgColor,
   updatedAt,
   bgColor,
   fontTitle,
   pe,
   isRightsideIcon,
   stylePageAccor,
   isOpenAcc,
   des,
   ex,
   marginTit,
   sessions,
   courseDetails,
}) {
   const [openAcc, setOpenAcc] = useState(isOpenAcc);
   const handleOpenAcc = () => setOpenAcc((cur) => !cur);
   const { courseName } = useParams();
   //
   return (
      <div className={`  ${bgColor}   ${stylePageAccor} text-dir`}>
         {isRightsideIcon ? (
            <div
               className={`flex lg:col-span-1 xl:my-auto mx-auto mt-[20px]  justify-center md:justify-end items-center w-[94px] h-[55px] lg:w-[51px] lg:h-[94px]  lg:mb-0   rounded-full relative   ${iconBgColor}`}
            >
               <div style={{ transform: "scaleX(-1) " }} className={`${iconColor} -translate-y-1/2 lg:translate-y-0 absolute right-[28px] top-10 md:top-auto `}>
                  {icon}
               </div>
            </div>
         ) : (
            ""
         )}

         <div className={` md:mt-3 mt-9 lg:${pe} lg:col-span-6  xl:ms-0 my-auto `}>
            <Accordion
               open={openAcc}
               icon={
                  <div className=" flex gap-x-5 ">
                     <span className=" !font-thin !text-[13px] !my-auto ">{""}</span>
                     <div className={` my-auto `}>
                        <Icon openAcc={openAcc}></Icon>
                     </div>
                  </div>
               }
               animate={CUSTOM_ANIMATION}
               className={` block ${ex} `}
               onClick={handleOpenAcc}
            >
               <div>
                  <AccordionHeader
                     className={`border-0 flex transition-colors dark:!text-black text-white  danaBold ${fontTitle}  text-[17px] font-extrabold !lg:ms-[5px] mx-auto  rounded-t-2xl 
                     ${!isRightsideIcon ? (openAcc ? "dark:bg-[rgb(100,116,139)] bg-limon-color dark:!text-white text-gray-500" : "") : ""}`}
                  >
                     <p className={`${marginTit} `}>{titlee}</p>
                  </AccordionHeader>
               </div>
               {isRightsideIcon ? (
                  <div>
                     <AccordionBody className={` transition-colors  lg:!text-[15px] text-gray-color dark:text-gray-500 danaMedium md:font-extrabold lg:ms-[4px]   `}>{des}</AccordionBody>
                  </div>
               ) : (
                  ""
               )}
               {!isRightsideIcon ? (
                  <div>
                     {sessions.map((item, index) => {
                        return (
                           <AccordionBody className={` borderAccordItems dark:!border-t-gray-300 transition-colors  lg:!text-[15px] text-white dark:!text-gray-900 danaMedium `}>
                              {item.free === 1 || courseDetails?.isUserRegisteredToThisCourse ? (
                                 <Link className=" !text-white" to={`/lesson/${courseName}/${item._id}`}>
                                    <div className=" flex justify-between cursor-pointer hover:text-limon-color dark:hover:!text-yellow-600 ">
                                       <div className=" flex gap-x-6 ms-6 py-[4px] ">
                                          <div className=" w-[32px] h-[28px] flex rounded-lg dark:!bg-white" style={{ backgroundColor: "#ffffff1a" }}>
                                             <span className=" !m-auto ">{index + 1}</span>
                                          </div>
                                          <span className=" my-auto "> {item.title}</span>
                                       </div>
                                       <div className=" flex gap-x-3">
                                          <span className=" mt-3">{item.time}</span>
                                          <HiOutlinePlay className="  my-auto me-6 " style={{ fontSize: 28 }} />
                                       </div>
                                    </div>
                                 </Link>
                              ) : (
                                 <div className=" flex justify-between cursor-pointer hover:text-limon-color dark:hover:!text-yellow-600 ">
                                    <div className=" flex gap-x-6 ms-6 py-[4px] ">
                                       <div className=" w-[32px] h-[28px] flex rounded-lg dark:!bg-white" style={{ backgroundColor: "#ffffff1a" }}>
                                          <span className=" !m-auto ">{index + 1}</span>
                                       </div>
                                       <span className=" my-auto "> {item.title}</span>
                                    </div>
                                    <div className=" flex gap-x-3">
                                       <span className=" mt-3">{item.time}</span>
                                       <HiOutlineLockClosed className=" my-auto me-6 " style={{ fontSize: 28 }} />
                                    </div>
                                 </div>
                              )}
                           </AccordionBody>
                        );
                     })}
                  </div>
               ) : (
                  ""
               )}
            </Accordion>
         </div>
      </div>
   );
}
