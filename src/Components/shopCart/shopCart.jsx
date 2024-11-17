import React, { useContext, useEffect, useState } from "react";
//
import { Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineGift } from "react-icons/hi2";
import { HiMiniCheck } from "react-icons/hi2";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { RiCloseCircleFill } from "react-icons/ri";
//
export default function shopCart({ cartCourses }) {
   return (
      <div className="shopCart">
         {" "}
         {
            <div className="UserBasket  lg:!left-[123px] !left-10 !top-40 z-50 !bg-header-color dark:!bg-white dark:!text-black rounded-[14px] ">
               <div className="flex items-center justify-between px-5 py-4  bg-limon-color text-black mb-[18px] rounded-t-[14px]">
                  <div className=" flex gap-x-3">
                     <HiOutlineShoppingBag className=" !danaBold" style={{ fontSize: 33 }} />
                     <span className="danaBold text-3xl my-auto">سبد خرید</span>
                  </div>
               </div>
               <Card className="  rounded-[14px] bg-header-color dark:bg-white dark:!text-black">
                  <div className=" danaMedium text-[16px] space-y-1.5 ">
                     <div className="cart-body pl-10 pr-7 mr-2.5 space-y-[18px]  overflow-y-auto direction-ltr child:direction-rtl ">
                        {cartCourses?.map((item) => {
                           // console.log(item);
                           return (
                              <div className=" w-full md:dark:!border-b-[#e5e7eb] md:!border-b-[#ffffff1a]">
                                 <div className="cart-item items-center gap-x-3 pb-[18px] grid md:grid-cols-2">
                                    <div className=" relative">
                                       <RiCloseCircleFill
                                          // onClick={(e) => DeleteCourse(item._id)}
                                          className=" text-white absolute text-3xl top-4 right-4 md:hidden block"
                                       />
                                       <Link to={`https://learnimoo.filedl.me/course-info/${item?.shortName}`} className="shrink-0 flex text-white dark:!text-black">
                                          <img className=" md:h-36 aspect-video rounded-[15px] md:rounded-[8px]" src={`http://learnimoo.filedl.me/courses/covers/${item?.cover}`} alt={item?.name} />
                                          <div className=" ms-8 my-auto hidden md:block">
                                             <p className="line-clamp-2 danaMedium text-2x !text-white dark:!text-black">{item?.name}</p>
                                          </div>
                                       </Link>
                                    </div>
                                    <div className=" text-left mt-4 md:mt-0">
                                       <div className=" ms-8 my-auto block md:hidden">
                                          <p className="line-clamp-2 danaMedium text-2x text-right !text-white dark:!text-black">{item?.name}</p>
                                       </div>
                                       <button className="text-gray-400 hover:text-red-500 mr-auto" onclick="sthe_remove_item_from_cart(70 , `a50c64cdb6`)">
                                          <div className="flex  gap-x-[63px] dark:text-limon-color text-limon-color">
                                             {item?.price === 0 ? (
                                                <div className="flex items-center gap-x-1">
                                                   <span className="danaMedium text-[17px]">رایگان!</span>
                                                </div>
                                             ) : (
                                                <span className="danaMedium text-[17px] flex">
                                                   {item?.price?.toLocaleString()}
                                                   <img className=" size-8 flex !text-white" src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                                                </span>
                                             )}
                                             <HiOutlineTrash
                                                // onClick={(e) => DeleteCourse(item._id)}
                                                className=" text-gray-400 hover:text-red-600 hidden md:block"
                                                style={{ fontSize: 15.5 }}
                                             />
                                          </div>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </Card>
            </div>
         }
         <div className=" rounded-[14px] overflow-hidden md:mt-14 mt-[20px] text-black ">
            <div className="flex items-center justify-between px-4 md:px-6 h-24 bg-limon-color ">
               <div className="flex items-center gap-x-2 text-3xl">
                  <HiOutlineGift style={{ fontSize: 32 }} />
                  <span className="md:text-3xl danaBold">هدیه لرنیمو</span>
               </div>
            </div>
            <div className="gifts-container flex flex-col gap-y-6 lg:flex-row justify-between bg-header-color dark:!bg-white text-white dark:!text-black py-[20px] px-4 md:px-6">
               <div className="flex flex-col items-center lg:block">
                  <span className="block text-sm danaBold mb-6">به ازای مقدار خریدتان هدیه دریافت کنید</span>
                  <div className="flex items-center gap-x-2"></div>
                  <div className="flex items-center gap-x-5 mt-4">
                     <div className="flex items-center gap-x-1 text-limon-color">
                        <HiMiniCheck style={{ fontSize: 20 }} />
                        <span className="text-lg danaBold mt-2">کانال الماسی</span>
                     </div>
                  </div>
               </div>
               <div className="relative flex flex-col h-21 lg:h-auto lg:w-1/2">
                  {/* <!-- Right property :  100 - ((Step Price * 100%) / Last Step Price) --> */}
                  {/* <!-- Active Steps :  Width Property Formula >= (Step Price * 100%) / Last Step Price --> */}
                  <div className="upselling-step upselling-step--active " style={{ right: "0%" }}>
                     <div className="upselling-step__price flex ">
                        <span className="text-lg danaMedium text-limon-color">1,980,000</span>
                        <img className=" size-8 flex " src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                     </div>
                     <div className=" flex relative mt-2.5">
                        <div className="absolute inset-0 m-auto bg-limon-color h-[2px] " style={{ width: "90%" }}></div>
                        <HiMiniCheckCircle className=" text-limon-color text-4xl" />
                     </div>
                     <div className="upselling-step__gift text-limon-color flex gap-x-2 mt-3">
                        <HiOutlineGift style={{ fontSize: 21 }} />
                        <span className="text-xl danaDemiBold mt-2">کانال الماسی</span>
                     </div>
                  </div>
                  {/* <!-- Width Property = (User Total Amount * 100%) / Last Step Price) --> */}
               </div>
            </div>
         </div>
      </div>
   );
}
