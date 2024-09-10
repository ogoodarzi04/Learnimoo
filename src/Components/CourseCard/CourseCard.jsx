import React, { useState } from "react";
import "./CourseCard.css";
import { Card, CardHeader, CardBody, CardFooter, Typography, Avatar, Tooltip } from "@material-tailwind/react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";
import { Link } from "react-router-dom";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
//
export default function CourseCard() {
   const [isShowCourseCard, setIsShowCourseCard] = useState(true);

   return (
      <>
         {isShowCourseCard ? (
            <Card className=" overflow-hidden rounded-3xl dark:bg-white bg-header-color ">
               <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-3xl cursor-pointer  ">
                  <a href="">
                     <img src="/img/ezgif.com-jpg-to-webp-converted-6-1-768x432.webp" alt="ui/ux review check" />
                  </a>
               </CardHeader>
               <CardBody className=" text-right ">
                  <Typography color="white" className=" md:text-[16.5px] font-danaDemiBold line-clamp-2 mb-4 text-white dark:!text-black ">
                     آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام [منتورشیپ]
                  </Typography>
                  <Typography className=" text-sm line-clamp-2 opacity-70 text-white dark:!text-black font-danaDemiBold mb-4">
                     دنیای هک و امنیت به اندازه کافی پر چالش و جذاب هست و اگرشما بخواید وارد این حوزه...
                  </Typography>
                  <div className=" userTag flex justify-between">
                     <div>
                        <a href="" className=" opacity-70 flex text-white dark:!text-black ">
                           <PersonOutlineOutlinedIcon className="" style={{ fontSize: 23 }} />
                           <Typography className=" text-sm line-clamp-2   font-danaDemiBold ms-1.5 mt-[1px]">اشکان مقدس</Typography>
                        </a>
                     </div>
                     <div className=" text-orange-500">
                        5
                        <GradeIcon style={{ fontSize: 23 }} />
                     </div>
                  </div>
               </CardBody>
               <CardFooter className="flex items-center justify-between dark:!border-t-blue-gray-100" style={{ borderTop: "1px solid #ffffff1a" }}>
                  <div className="flex items-center -space-x-3 mt-[23px]">
                     <div className=" text-white dark:!text-black  opacity-70">
                        <PeopleOutlineSharpIcon style={{ fontSize: 23 }} />
                        2126
                     </div>
                  </div>
                  <div>
                     <p className="  opacity-70 line-through text-sm text-white dark:!text-black ">481,500</p>
                     <p className=" text-limon-color font-bold" style={{ fontSize: 16.5 }}>
                        240,750
                     </p>
                  </div>
               </CardFooter>
            </Card>
         ) : (
            <SkeletonLoader />
         )}
      </>
   );
}
