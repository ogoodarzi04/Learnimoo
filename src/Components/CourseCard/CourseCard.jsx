import React, { useState } from "react";
import "./CourseCard.css";
import { Card, CardHeader, CardBody, CardFooter, Typography, Avatar, Tooltip } from "@material-tailwind/react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";
import { Link } from "react-router-dom";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { MdOutlineGrade } from "react-icons/md";
//
export default function CourseCard({ name, creator, description, cover, courseAverageScore, discount, price, shortName, registers, isSlide, cardStyle, isUserPanelStyle, isPending }) {
   return (
      <>
         {cover ? (
            <Card className={` overflow-hidden rounded-3xl  ${cardStyle?.[1]} dark:bg-white bg-header-color `} style={{ height: isSlide && 400 }}>
               <Link to={`/course-info/${shortName}`}>
                  <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-3xl cursor-pointer relative ">
                     {price === 0 ? "" : <div className=" bg-limon-color absolute rounded-full top-7 right-7 px-[12px] pt-1 pb-[1px] text-[14px]">{discount}%</div>}

                     <img src={`http://learnimoo.filedl.me/courses/covers/${cover}`} className="  bg-cover size-full" alt="ui/ux review check" />
                  </CardHeader>
                  <CardBody className=" text-right ">
                     <Typography color="white" className=" text-[16.5px] danaDemiBold line-clamp-2 mb-4 text-white dark:!text-black ">
                        {name}
                     </Typography>
                     {!isUserPanelStyle && (
                        <>
                           {" "}
                           <Typography className=" text-sm line-clamp-2 opacity-70 text-white dark:!text-black danaDemiBold mb-4">{description}</Typography>
                           <div className=" userTag flex justify-between">
                              <div>
                                 <a href="" className=" opacity-70 flex text-white dark:!text-black ">
                                    <PersonOutlineOutlinedIcon className="" style={{ fontSize: 23 }} />
                                    <Typography className=" text-sm line-clamp-2   danaDemiBold ms-1.5 mt-[1px]">{creator}</Typography>
                                 </a>
                              </div>
                              <div className=" flex ">
                                 {courseAverageScore &&
                                    Array?.(5 - courseAverageScore)
                                       ?.fill(0)
                                       ?.map((item) => {
                                          return (
                                             <div className=" text-orange-500">
                                                <MdOutlineGrade style={{ fontSize: 23 }} />
                                             </div>
                                          );
                                       })}
                                 {courseAverageScore &&
                                    Array?.(courseAverageScore)
                                       ?.fill(0)
                                       ?.map((item) => {
                                          return (
                                             <div className=" text-orange-500">
                                                <GradeIcon style={{ fontSize: 23 }} />
                                             </div>
                                          );
                                       })}
                              </div>
                           </div>
                        </>
                     )}
                  </CardBody>
                  <CardFooter className={`flex items-center justify-between dark:!border-t-blue-gray-100 ${cardStyle?.[0]}`} style={{ borderTop: "1px solid #ffffff1a" }}>
                     {!isUserPanelStyle && (
                        <>
                           <div className="flex items-center -space-x-3 mt-[23px]">
                              <div className=" text-white dark:!text-black  opacity-70">
                                 <PeopleOutlineSharpIcon style={{ fontSize: 23 }} />
                                 {registers}
                              </div>
                           </div>
                           <div>
                              {price > 0 && <p className="  opacity-70 line-through text-sm text-white dark:!text-black ">{price.toLocaleString()}</p>}
                              <p className=" text-limon-color font-bold flex" style={{ fontSize: 16.5 }}>
                                 {price === 0 ? "رایگان" : (price - (price * discount) / 100).toLocaleString()}
                                 {price > 0 && <img className=" !size-8 flex !text-white" src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />}
                              </p>
                           </div>
                        </>
                     )}
                  </CardFooter>
               </Link>
            </Card>
         ) : (
            <SkeletonLoader />
         )}
      </>
   );
}
//
