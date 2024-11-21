import React, { useContext, useEffect, useState } from "react";
//
import { Button, Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { IoIosArrowUp } from "react-icons/io";
//
export default function dataPay({
   resultPrices,
   resultOffsPrices,
   isAcceptRules,
   setIsAcceptRules,
   completeBuy,
   setShowOffCode,
   showOffCode,
   inputOffCode,
   setInputOffCode,
   SendOffCode,
   setCourseId,
   initDatas,
}) {
   return (
      <div className="dataPay">
         {" "}
         <div className="flex  py-[16.9px] items-center justify-between px-4 md:px-6 h-15 bg-limon-color text-black  rounded-t-[14px]">
            <div className="flex items-center gap-x-3">
               <HiOutlineCreditCard className=" text-5xl" />
               <span className="md:text-3xl danaBold">اطلاعات پرداخت</span>
            </div>
         </div>
         <div className=" dark:bg-white bg-header-color py-5 px-4 md:px-6  rounded-b-[14px] ">
            <div className="space-y-4 dark:!text-gray-500 text-white  dark:!border-b-[#e5e7eb] pb-4 mb-4" style={{ borderBottom: "1px solid #ffffff1a" }}>
               <div className="flex items-center justify-between">
                  <span className="danaMedium">مبلغ کل</span>
                  <div className="flex items-center gap-x-1">
                     <span className="danaDemiBold ">{resultPrices?.toLocaleString()}</span>
                     <img className=" size-8 flex " src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                  </div>
               </div>
               <div className="flex items-center justify-between text-red-500">
                  <span className="danaMedium">تخفیف</span>
                  <div className="flex items-center gap-x-1">
                     <div>
                        <span className="text-sm">(17%)</span>
                        <span className="danaDemiBold">150,000</span>
                     </div>
                     <img className=" size-8 flex " src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                  </div>
               </div>
               <div className="flex items-center justify-between text-red-500">
                  <span className="danaMedium">تخفیف پلکانی</span>
                  <div className="flex items-center gap-x-1">
                     <div>
                        <span className="text-sm">(15%)</span>
                        <span className="danaDemiBold">{"stepOff"}</span>
                     </div>
                     <img className=" size-8 flex " src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                  </div>
               </div>
               <div className="flex items-center justify-between ">
                  <span className="danaMedium">موجودی کیف پول</span>
                  <div className="flex items-center gap-x-1">
                     <span className="danaDemiBold">0</span>
                     <img className=" size-8 flex " src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                  </div>
               </div>
               <div className="offer-item hidden  items-center justify-between text-sm sm:text-base dark:text-gray-500 text-white">
                  <div className="flex items-center gap-x-2">
                     <span className="danaMedium">
                        کوپن <span className="offer-percent"></span>
                     </span>
                  </div>
                  <div className="flex items-center gap-x-1">
                     <span className="offer-total danaDemiBold"></span>
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-between mb-3 text-white dark:!text-black">
               <span className="danaDemiBold xl:text-3xl">مجموع:</span>
               <div className="flex items-center gap-x-1">
                  <span className="danaDemiBold  text-3xl xl:text-4xl grand-total flex">
                     {resultOffsPrices?.toLocaleString()}
                     <img className=" size-8 flex " src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                  </span>
               </div>
            </div>
            <div className="flex items-center mb-5">
               <div className="checkbox">
                  <Checkbox
                     color="blue"
                     id="approve_privacy_policy"
                     className="checkbox__input p-[7px] bg-[rgb(51,60,76)] dark:!bg-gray-300"
                     name="approve_privacy_policy"
                     value={isAcceptRules}
                     required=""
                     onChange={() => setIsAcceptRules((prev) => !prev)}
                  />
               </div>
               <span className="text-sm xl:!text-[16px] md:text-gray-400 text-gray-500 select-none ">قوانین را مطالعه نموده ام.</span>
               <Link to="/conditions/" className="text-xs xl:text-xl text-blue-500 my-auto">
                  <span className=" !mt-3">(مشاهده)</span>
               </Link>
            </div>
            {isAcceptRules ? (
               <div className=" px-3 ">
                  <Button onClick={() => completeBuy()} variant="contained" color="yellow" className=" py-[13px] danaMedium text-[16px] w-full rounded-full">
                     تکمیل خرید
                  </Button>
               </div>
            ) : (
               <div className=" px-3 cursor-not-allowed ">
                  <Button variant="contained" disabled color="yellow" className=" py-[13px] danaMedium text-[16px] w-full rounded-full">
                     تکمیل خرید
                  </Button>
               </div>
            )}
         </div>
         <div className=" mt-10 px-10 lg:block bg-header-color dark:bg-white dark:bg-darker rounded-[14px] text-center text-gray-400 dark:!text-black">
            <div className=" flex justify-between py-[19px]  dark:!border-gray-200 rounded-[14px]">
               <div className="flex gap-x-3 ">
                  <span className=" danaDemiBold  my-auto">کد تخفیف دارید؟</span>
               </div>
               <div className=" my-auto flex cursor-pointer" onClick={() => setShowOffCode((prev) => !prev)}>
                  <IoIosArrowUp style={{ fontSize: 23 }} className={`${!showOffCode ? "rotate-180" : ""}`} />
               </div>
            </div>
            {showOffCode ? (
               <div className=" pb-[19px] dark:!border-t-[#e5e7eb]" style={{ borderTop: "1px solid #ffffff1a" }}>
                  <div className="offer-form mt-[19px]">
                     <div className="relative">
                        <input
                           id="coupon-input"
                           type="text"
                           className="w-full h-24 pe-4  text-sm dark:bg-gray-100 bg-[rgb(51,60,76)] rounded-lg"
                           placeholder="کد تخفیف را وارد کنید"
                           value={inputOffCode}
                           onInput={(e) => setInputOffCode(e.target.value)}
                        />
                        <button
                           onClick={(e) => SendOffCode()}
                           className="button-sm h-[37px] px-[13px]  text-gray-200 absolute left-4 top-0 bottom-0 my-auto coupon-check bg-blue-500 rounded-full text-[15px]"
                        >
                           اعمال تخفیف
                        </button>
                     </div>
                  </div>
               </div>
            ) : (
               ""
            )}
         </div>
         <div>
            {inputOffCode ? (
               <div className="Price-Product  relative gap-x-3 my-[10px] space-y-2.5 h-[43px] flex dark:!text-black text-white">
                  <p className=" my-auto  ">برای کدام دوره؟</p>
                  <select onChange={(e) => setCourseId(e.target.value)} className=" bg-black dark:!bg-gray-300 !border-limon-color" name="" id="" style={{ border: "1px solid #ffffff" }}>
                     <option value="-1">لطفا دوره مورد نظر را انتخاب کنید</option>
                     {initDatas?.map((item) => {
                        return <option Value={item?._id}>{item?.name}</option>;
                     })}
                  </select>
               </div>
            ) : (
               ""
            )}
         </div>
      </div>
   );
}
