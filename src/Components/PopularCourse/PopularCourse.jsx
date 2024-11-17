import React, { useContext, useEffect, useRef, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import TitleSection from "../TitleSection/TitleSection";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./PopularCourse.css";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import useFetch from "../../Hooks/useFetch";
import { Context } from "../../contexts/Context";

export default function PopularCourse(props) {
   const { DOMAIN } = useContext(Context);
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}courses/popular`, false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   return (
      <div className={`PopularCourse-Wrapper mt-64 ${props.topStyle} overflow-hidden relative`}>
         <div className={`TitleSec ${props.navColor}`}>
            <TitleSection
               isLeftSideShadow={false}
               title={props.title}
               des={props.des}
               color={props.color}
               btnHref={"/AllCourses"}
               leftBtnText={
                  <div className={` gap-x-6 flex ${props.msArrow}`}>
                     <div
                        className={` ${props.roundedColor} prev cursor-pointer rounded-full py-[12px] px-4 md:hover:bg-limon-color dark:md:hover:!bg-yellow-600 dark:hover:text-white md:hover:text-gray-color transition-all dark:!border-yellow-600`}
                        style={{ border: "1px solid rgb(255,235,59)" }}
                     >
                        <ArrowForwardIosIcon style={{ fontSize: 21 }} className={`${props.arrowStyle}`} />
                     </div>
                     <div
                        className={` ${props.roundedColor} next cursor-pointer rounded-full py-[12px] px-4 md:hover:bg-limon-color dark:md:hover:!bg-yellow-600 dark:hover:text-white md:hover:text-gray-color  transition-all dark:!border-yellow-600`}
                        style={{ border: "1px solid rgb(255,235,59)" }}
                     >
                        <ArrowBackIosNewIcon style={{ fontSize: 21 }} className={`${props.arrowStyle}`} />
                     </div>
                  </div>
               }
            />
         </div>
         <div className={`CardsSec mt-[43px] ${props.pxCard}`}>
            <Swiper
               navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
               }}
               slidesPerView={1}
               spaceBetween={props.gapX}
               loop={true}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               // navigation={true}
               breakpoints={{
                  640: {
                     slidesPerView: 2,
                     spaceBetween: 30,
                  },
                  768: {
                     slidesPerView: 2,
                     spaceBetween: 30,
                  },
                  1024: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                  },
                  1278: {
                     slidesPerView: 4,
                     spaceBetween: 30,
                  },
               }}
               modules={[Navigation, Autoplay]}
               className="mySwiper"
            >
               {post.map((item) => {
                  return (
                     <div className=" ">
                        <SwiperSlide className=" rounded-3xl ">
                           <CourseCard {...item} isSlide={true} cardStyle={props.cardStyle} />
                        </SwiperSlide>
                     </div>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
}
//
