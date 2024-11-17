import React, { useContext, useState } from "react";
//
import { HiAcademicCap, HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Context } from "../../contexts/Context";
import Notification from "../Notification/Notification";
import { TbArrowBackUp } from "react-icons/tb";
import { Alert } from "@material-tailwind/react";
import usePost from "../../Hooks/usePost";
import { Check } from "@mui/icons-material";
//
export default function CommentTextarea(props) {
   const { DOMAIN } = useContext(Context);
   const [showTextArea, SetShowTextArea] = useState(false);
   const [changeComment, setChangeComment] = useState(false);
   //
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [showSuccessToast, setShowSuccessToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   //
   const [commentText, setCommentText] = useState("");
   const [courseName, setCourseName] = useState(props.courseName);
   //
   const [commentScore, setCommentScore] = useState("-1");
   let userData = useContext(Context);
   //
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   const token = JSON.parse(localStorage.getItem("user"));
   return (
      <>
         <div className="CommentTextarea bg-header-color dark:bg-white rounded-2xl p-4 sm:p-5  mt-8 text-white dark:!text-black " id="course-comments">
            <div className="flex items-center justify-between mb-6 sm:mb-7 mt-2">
               <div className="flex items-center gap-x-3 relative">
                  <span className="absolute -right-6 sm:-right-[22px] block w-2.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
                  <HiChatBubbleLeftRight className=" hidden md:inline-block text-red-500  " style={{ fontSize: 38 }} />
                  <div className=" danaDemiBold text-[20px] md:text-[25px]">نظرات</div>
               </div>
               {/* <!-- New Comment Button --> */}
               <button
                  onClick={() => {
                     if (userData.isLoggedIn) {
                        SetShowTextArea(true);
                     } else {
                        SetShowTextArea(false);
                        setShowErrorToast(true);
                        setTimeout(() => {
                           setShowErrorToast(false);
                        }, 4000);
                        setTextErrorToast("لطفا ابتدا در سایت وارد شوید");
                     }
                  }}
                  className=" bg-limon-color hover:opacity-75 px-[12px] py-[5.5px]"
                  style={{ borderRadius: " 30px" }}
               >
                  <div className=" danaMedium flex  mx-auto w-max text-header-color gap-x-3">
                     <span className=" mt-1.5 text-[13px]" onClick={() => SetShowTextArea(true)}>
                        ایجاد نظر جدید
                     </span>
                     <span className=" my-auto flex">
                        <HiOutlineChatBubbleBottomCenterText className=" my-auto" style={{ fontSize: 20 }} />
                     </span>
                  </div>
               </button>
            </div>
            {!showTextArea ? (
               <div id="comment-alert" className=" text-limon-color dark:text-yellow-700 bg-amber-600/15 dark:bg-yellow-50  p-4 !md:p-5 rounded-lg  md:danaDemiBold mb-6 text-[14px] mt-12">
                  دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید نخواهد شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح کنید.
               </div>
            ) : (
               ""
            )}

            <div id="comment-form" className="active2 ">
               {showTextArea ? (
                  <div className="flex gap-x-6 mb-4 sm:mb-5 mt-11 transition-all ">
                     <div className="flex-center rounded-full my-auto p-[1px] bg-gray-400 dark:bg-text-gray-color">
                        <div className="flex-center  rounded-full m-auto dark:!text-light-theme-color" style={{ color: "rgb(51 60 76)" }}>
                           <FaCircleUser style={{ fontSize: 47 }} className=" " />
                        </div>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="font-danaMedium">omidKing</span>
                        <span className="font-danaLight text-sm opacity-70" id="comment-to">
                           ثبت نظر جدید
                        </span>
                     </div>
                  </div>
               ) : (
                  ""
               )}
               {showTextArea ? (
                  <>
                     {" "}
                     <input type="hidden" value="4125" id="comment-id" />
                     <input type="hidden" value="no" id="comment-is-reply" />
                     <div className="flex transition-all  items-center gap-x-1.5 md:gap-x-2.5 bg-red-500 text-white px-4 py-3 rounded-lg mb-3 mt-9">
                        <div className=" shrink-0">
                           <HiOutlineExclamationTriangle style={{ fontSize: 25 }} />
                        </div>
                        <div>
                           <p className="text-sm md:font-danaMedium">لطفا پرسش مربوط به هر درس یا ویدئو دوره را در صفحه همان ویدئو مطرح کنید.</p>
                        </div>
                     </div>
                     <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        rows="6"
                        id="comment-textarea"
                        className="  transition-all headlinecourse w-full dark:bg-light-theme-color  block p-4 md:p-4 mt-[13px]  danaMedium text-sm rounded-xl mb-10"
                        placeholder="نظر خود را بنویسید ..."
                     ></textarea>
                     <div className="Price-Product relative gap-x-3 my-[10px] space-y-2.5 h-[43px] flex dark:!text-black text-white">
                        <select onChange={(e) => setCommentScore(e.target.value)} className=" bg-black dark:!bg-gray-300 rounded-[7px]" name="" id="" style={{ border: "1px solid rgb(255,235,59)" }}>
                           <option value="-1">امتیاز خود را ثبت کنید</option>
                           <option Value="5">عالی</option>;<option Value="4">خیلی خوب</option>;<option Value="3">خوب</option>;<option Value="2">ضعیف</option>;<option Value="1">بد</option>;
                        </select>
                     </div>
                     <div className="flex gap-x-6 md:gap-x-4 justify-end mt-4">
                        <button
                           onClick={() => SetShowTextArea(false)}
                           className="flex-grow sm:grow-0  px-24 py-[5.5px] md:hover:bg-limon-color text-limon-color hover:text-header-color transition-colors "
                           id="comment-submit-btn"
                           style={{ borderRadius: " 30px", border: "1px solid rgb(255,235,59)" }}
                        >
                           <div className="  danaMedium flex  mx-auto w-max  cursor-pointer ">
                              <span className=" mt-1.5 text-[13px]"> لغو</span>
                           </div>
                        </button>
                        <button
                           onClick={() => {
                              const updatedDatas = {
                                 body: commentText,
                                 courseShortName: courseName,
                                 score: commentScore,
                              };
                              postdata(`${DOMAIN}comments`, updatedDatas, token);
                              setCommentText("");
                              if (commentText) {
                                 setShowErrorToast(true);
                                 setShowSuccessToast(true);
                                 setTimeout(() => {
                                    setShowErrorToast(false);
                                    setShowSuccessToast(false);
                                 }, 4000);
                              } else {
                                 setShowErrorToast(true);
                                 setTimeout(() => {
                                    setShowErrorToast(false);
                                 }, 4000);
                                 setTextErrorToast("لطفا متن دیدگاه را وارد کنید !");
                              }
                           }}
                           className="flex-grow sm:grow-0  bg-limon-color hover:opacity-75 px-24 py-[5.5px]"
                           id="comment-submit-btn"
                           style={{ borderRadius: " 30px" }}
                        >
                           <div className=" danaMedium flex  mx-auto w-max text-header-color ">
                              <span className=" mt-1.5 text-[13px]"> ارسال</span>
                           </div>
                        </button>
                     </div>
                  </>
               ) : (
                  ""
               )}
            </div>

            <div className=" block pb-2.5 mt-16 ">
               <div className=" space-y-7">
                  {props.comments.map((comment) => {
                     return (
                        <div className="comments-box rounded-xl  headlinecourse w-full dark:bg-light-theme-color ">
                           <div className="flex-center p-9 justify-between gap-x-5 flex rounded-full  my-auto text-gray-color">
                              <div className=" flex gap-x-6">
                                 <div className="flex-center relative  size-max p-2  rounded-full " style={{ border: "1px solid rgb(255, 204, 0)" }}>
                                    <HiAcademicCap style={{ fontSize: 21 }} className=" p-1.5 absolute -right-2 -top-[1.5px] bg-[rgb(255,204,0)] text-white rounded-full"></HiAcademicCap>
                                    <FaCircleUser style={{ fontSize: 48 }} className=" bg-[#ffffff] rounded-full" />
                                 </div>
                                 <div className=" block my-2.5 space-y-2">
                                    <p className="  text-white dark:!text-black danaDemiBold">
                                       <span className=" text-white dark:!text-blue-gray-700"> {comment?.creator?.name}</span> | {comment?.creator?.role === "ADMIN" ? "ادمین" : "دانشجو"}
                                    </p>
                                    <p className="  text-gray-color text-[14px] ">{comment?.createdAt.slice(0, 10)}</p>
                                 </div>
                              </div>
                              <div className=" my-auto">
                                 <button
                                    onClick={() => SetShowTextArea(false)}
                                    className="flex-grow sm:grow-0 p-[7px] md:hover:bg-[rgb(63,156,255)] text-[rgb(63,156,255)] hover:text-white transition-colors "
                                    id="comment-submit-btn"
                                    style={{ borderRadius: " 30px", border: "1px solid rgb(63, 156, 255)" }}
                                 >
                                    <div className="  danaMedium flex  mx-auto w-max  cursor-pointer ">
                                       <span className=" ">
                                          <TbArrowBackUp style={{ fontSize: 23 }} />
                                       </span>
                                    </div>
                                 </button>
                              </div>
                           </div>
                           <div className="px-8">
                              <div className=" py-7 dark:!text-blue-gray-700 dark:!border-t-gray-300" style={{ borderTop: "1px solid #ffffff1a" }}>
                                 <span>{comment?.body}</span>
                              </div>
                           </div>
                           {/* answer-comment */}
                           {comment?.answerContent ? (
                              <div className=" px-8 pb-8">
                                 <div class=" space-y-4 ">
                                    <div id={comment._id} class="p-4 md:p-5 !bg-[rgb(36,42,56)] dark:!bg-[rgb(229,231,235)] rounded-xl">
                                       <div class="flex items-center justify-between pb-4 mb-4 dark:!border-b-black/10" style={{ borderBottom: "1px solid #ffffff1a" }}>
                                          <div class="flex items-center gap-x-3.5">
                                             <div class=" !border-blue-500 sm:flex-center w-15 h-15 border rounded-full relative">
                                                <div class="absolute -top-0.5 -right-0.5 flex-center w-5 h-5 bg-blue-500 rounded-full p-3">
                                                   <Check className=" m-auto absolute inset-0" />
                                                </div>{" "}
                                                <img src={`${comment?.answerContent?.creator?.profile}`} class="w-20 h-20 block object-cover rounded-full" />
                                             </div>
                                             <div class="flex flex-col gap-1">
                                                <div class="flex items-center gap-x-1 ">
                                                   <span class="inline-block max-w-40 truncate">{comment?.answerContent?.creator?.name}</span>
                                                   <strong class="danaDemiBold">| {comment?.answerContent?.creator?.role}</strong>
                                                </div>
                                                <span class="danaLight text-sm opacity-70">{comment?.answerContent?.updatedAt.slice(0, 10)}</span>
                                             </div>
                                          </div>
                                       </div>
                                       <p class="danaLight text-sm sm:text-base break-words"></p>
                                       <p>{comment?.answerContent?.body}</p>
                                    </div>
                                 </div>
                              </div>
                           ) : (
                              ""
                           )}
                        </div>
                     );
                  })}
               </div>
               {props.comments.length > 0 ? (
                  <div>
                     <button
                        onClick={() => setChangeComment((prev) => !prev)}
                        className=" h-[52px] bg-limon-color hover:opacity-75 px-7 mt-14 flex mx-auto w-full sm:w-max"
                        style={{ borderRadius: " 30px" }}
                     >
                        <div className="  font-danaBold flex gap-x-4 m-auto w-max text-header-color">
                           <span className=" my-auto">مشاهده{!changeComment ? " بیشتر" : " کمتر"}</span>
                           <span className={` my-auto ${changeComment ? " rotate-180" : ""}`}>
                              <IoIosArrowDown style={{ fontSize: 24 }} />
                           </span>
                        </div>
                     </button>
                  </div>
               ) : (
                  <Alert color="amber" className=" text-2xl">
                     هنوز کامنتی برای این دوره ثبت نشده است.
                  </Alert>
               )}
            </div>
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={showSuccessToast} succTxt={"نظر شما ارسال شد و بعد از تایید مدیریت نمایش داده خواهد شد."} />}
      </>
   );
}
