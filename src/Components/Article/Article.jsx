import React, { useState } from "react";
import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";
import TitleSection from "../TitleSection/TitleSection";
import { FaCircleArrowLeft } from "react-icons/fa6";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
//
export default function Article() {
   const [isShowCourseCard, setIsShowCourseCard] = useState(true);
   //

   return (
      <>
         {isShowCourseCard ? (
            <Card shadow={false} className="relative py-3 grid h-[475px] w-full xl:max-w-[294px] items-end justify-center overflow-hidden text-center rounded-[17px]">
               <CardHeader floated={false} shadow={false} color="transparent" className="absolute inset-0 m-0  h-[55%]   rounded-none bg-[url('/img/9-768x403.jpg')] bg-cover bg-center  ">
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-header-color/100 via-header-color/50" />
               </CardHeader>
               <CardBody className="relative">
                  <div className=" mx-auto flex mb-12 leading-[1.5] font-danaMedium text-[21px] font-bold text-white ">آیا من به درد برنامه نویسی میخورم؟ تیپ شخصیتی مناسب برنامه نویسی</div>
                  <div className=" userTag flex justify-between mb-12">
                     <div>
                        <a href="" className=" opacity-70 flex">
                           <PersonOutlineOutlinedIcon className="" style={{ fontSize: 23 }} />
                           <Typography className=" text-sm line-clamp-2   font-danaDemiBold ms-1.5 mb-[1.5px]">مهدی ایلخانی نسب</Typography>
                        </a>
                     </div>
                     <div className=" text-gray-color flex">
                        <CalendarTodayIcon style={{ fontSize: 20 }} className=" me-1" />
                        <span className=" text-[14px]">1403/05/19</span>
                     </div>
                  </div>
                  <div
                     className=" cursor-pointer md:hover:bg-limon-color flex text-limon-color font-danaMedium  text-[17px] md:hover:text-header-color rounded-full transition-colors "
                     style={{ border: "1px solid #fbfb73" }}
                  >
                     <div className=" mx-auto flex">
                        <span>مطالعه مقاله</span>
                        <FaCircleArrowLeft style={{ fontSize: 17 }} className=" ms-2 my-auto" />
                     </div>
                  </div>
               </CardBody>
            </Card>
         ) : (
            <SkeletonLoader />
         )}
      </>
   );
}
