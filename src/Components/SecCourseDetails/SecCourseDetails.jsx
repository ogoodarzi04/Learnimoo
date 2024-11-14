import React, { useContext, useEffect, useState } from "react";
import Video from "../Video/Video";
import { HiOutlineAcademicCap, HiOutlineUser } from "react-icons/hi2";
import { IoBook, IoBookOutline } from "react-icons/io5";
import usePost from "../../Hooks/usePost";
import Notification from "../Notification/Notification";
import { Context } from "../../contexts/Context";
import { Link, useParams } from "react-router-dom";
//
export default function SecCourseDetails(props) {
   // console.log(props?.sessions[0]);
   const dataInfos = useContext(Context);
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   //
   const RegisterCourse = (e) => {
      e.preventDefault();
      const newUserData = {
         price: props.courseDetails.price,
      };
      postdata(`http://localhost:3000/v1/courses/${props.courseDetails._id}/register`, newUserData, userDatas);
   };
   useEffect(() => {
      if (postpost && Object.keys(postpost)?.length > 0) {
         if (postpost.message === "you are already registered to this course.") {
            setTextErrorToast(`این دوره قبلا اضافه شده !`);
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
         } else {
            setSuccessToast(true);
            setShowErrorToast(true);
            setTimeout(() => {
               setSuccessToast(false);
               setShowErrorToast(false);
            }, 4000);
         }
      }
   }, [postpost]);
   //
   return (
      <div className=" SecCourseDetails p-7 lg:p-0 rounded-2xl lg:rounded-none dark:bg-white lg:dark:bg-light-theme-color bg-header-color lg:bg-theme-color flex flex-col-reverse lg:grid lg:grid-cols-2 mt-[42px] gap-x-12">
         <div className="Explain-Course dark:text-gray-900 overflow-hidden danaDemiBold ">
            <p className=" title-course text-[26px] mt-8 lg:mt-0">{props.courseDetails.name}</p>
            <p className=" des-course mt-7 text-[18px]">{props.courseDetails.description}</p>
            <div className=" flex flex-col-reverse sm:flex-row sm:justify-between mt-32  relative">
               <div>
                  {dataInfos?.userInfos?.courses?.find((item) => {
                     return item?._id === props?.courseDetails?._id;
                  }) ? (
                     <p className=" text-3xl flex gap-x-2 mt-10">
                        <HiOutlineUser style={{ fontSize: 33 }} />
                        <p className=" my-auto">شما دانشجوی دوره هستید</p>
                     </p>
                  ) : (
                     <button className=" h-[52px] bg-limon-color hover:opacity-75 px-7 w-full" style={{ borderRadius: " 30px" }} onClick={(e) => RegisterCourse(e)}>
                        <a href=" ">
                           <div className="  font-danaBold flex gap-x-4 mx-auto w-max">
                              <span className="button-xl button-secondary text-[15px]  ">
                                 <HiOutlineAcademicCap style={{ fontSize: 24 }} />
                              </span>
                              <span className=" my-auto">افزودن به سبد خرید</span>
                           </div>
                        </a>
                     </button>
                  )}
               </div>
               <div className=" flex gap-x-4 mx-auto  sm:left-1 sm:absolute sm:top-7 mb-6 sm:mb-0">
                  {dataInfos?.userInfos?.courses?.find((item) => {
                     return item?._id === props?.courseDetails?._id;
                  }) ? (
                     <Link to={`http://localhost:5173/lesson/${props?.courseName}/${props?.sessions[0]?._id}`}>
                        <button className=" h-[52px] bg-limon-color hover:opacity-75 px-20 w-full" style={{ borderRadius: " 30px" }}>
                           <div className="  font-danaBold flex gap-x-4 mx-auto w-max">
                              <span className="button-xl button-secondary text-[15px]  ">
                                 <IoBookOutline style={{ fontSize: 24 }} />
                              </span>
                              <span className=" my-auto">مشاهده دوره</span>
                           </div>
                        </button>
                     </Link>
                  ) : (
                     <div>
                        {props?.courseDetails?.price > 0 && <p className="  opacity-70 line-through text-sm text-white dark:!text-black ">{props?.courseDetails?.price.toLocaleString()}</p>}
                        <p className=" text-limon-color font-bold flex" style={{ fontSize: 16.5 }}>
                           {props?.courseDetails?.price === 0 ? "رایگان" : (props?.courseDetails?.price - (props?.courseDetails?.price * props?.courseDetails?.discount) / 100).toLocaleString()}
                           {props?.courseDetails?.price > 0 && <img className=" !size-8 flex !text-white" src="http://localhost:3000/courses/covers/Toman.png" alt="" />}
                        </p>
                     </div>
                  )}
               </div>
            </div>
         </div>
         <div className="Video-Course">
            <Video isHeight={""} cover={props.courseDetails.cover} />
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={"به سبد خرید شما اضافه شد"} />}
      </div>
   );
}
