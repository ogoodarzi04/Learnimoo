import React, { useContext, useEffect, useState } from "react";
import Input from "../../../../Components/Form/Input";
import { FaShareSquare } from "react-icons/fa";
//
export default function DetailEditUser({ userDatas, newName, setNewName, newEmail, newPhone, newUserName, editesubmitModalAction }) {
   return (
      <div className="DetailEditUser">
         <div className="xl:col-span-2 dark:bg-white bg-[rgb(40,41,61)] dark:!text-black text-white p-9  rounded-3xl">
            <div className="pb-4  dark:!border-b-gray-200" style={{ borderBottom: "1px solid rgb(100,116,139)" }}>
               <span className=" danaMedium md:text-[20px] dark:!text-gray-800 text-white">جزییات حساب کاربری</span>
            </div>
            <form id="edit-account-info" className="p-3.5 pt-8">
               <div className="relative mb-11 mt-3">
                  <img
                     src={`${userDatas?.userInfos?.profile ? userDatas?.userInfos?.profile : "https://secure.gravatar.com/avatar/3e56d5ddfaa703e6662609726b19be30?s=256&amp;d=mm&amp;r=g"}`}
                     className="w-32 md:w-64 h-32 md:h-64 rounded-full"
                  />
                  {/* <!--                                                                                                                                                                                          bg-blue-500 hover:bg-blue-600 --> */}
                  <a
                     href="https://gravatar.com/"
                     target="_blank"
                     title="برای تغییر پروفایل وارد وبسایت Gravatar.com شوید."
                     className="absolute bottom-0 right-0 flex-center w-10 md:w-14 h-10 md:h-14 rounded-full bg-blue-600  hover:bg-blue-600    dark:!border-white cursor-pointer transition-colors"
                     style={{ border: "3px solid rgb(40,41,61)" }}
                  >
                     <FaShareSquare className=" mx-auto text-white !mt-[5px]" />
                  </a>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-9 mt-32 ">
                  <div>
                     <label htmlFor="" for="first_name" className=" danaDemiBold dark:!text-gray-900 text-white">
                        نام و نام خانوادگی
                     </label>
                     <input
                        className="withColor  focus:!border-none mt-3.5 md:mt-4 rounded-2xl flex py-[15px] ps-6 text-white dark:!text-gray-700 w-full bg-[rgb(50,51,77)] dark:bg-[rgb(229,231,235)] h-max "
                        placeholder="نام و نام خانوادگی کاربر را وارد کنید"
                        element="input"
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                     />
                  </div>
                  <div>
                     <label htmlFor="" for="first_name" className=" danaDemiBold dark:!text-gray-900 text-white">
                        ایمیل کاربر
                     </label>
                     <Input
                        disabled
                        className="withColor cursor-not-allowed  focus:!border-none mt-3.5 md:mt-4 rounded-2xl flex py-[15px] ps-6 text-white dark:!text-gray-700  w-full bg-[rgb(50,51,77)] dark:bg-[rgb(229,231,235)] h-max "
                        placeholder="ایمیل کاربر را وارد کنید"
                        element="input"
                        id="email"
                        type="text"
                        value={newEmail}
                     />
                  </div>
                  <div>
                     <label htmlFor="" for="first_name" className=" danaDemiBold dark:!text-gray-900 text-white">
                        شماره موبایل
                     </label>
                     <Input
                        disabled
                        className="withColor cursor-not-allowed focus:!border-none mt-3.5 md:mt-4 rounded-2xl flex py-[15px] ps-6 text-white dark:!text-gray-700  w-full bg-[rgb(50,51,77)] dark:bg-[rgb(229,231,235)] h-max "
                        placeholder="شماره تلفن کاربر را وارد کنید"
                        element="input"
                        id="phone"
                        type="number"
                        value={newPhone}
                     />
                  </div>
                  <div>
                     {" "}
                     <label htmlFor="" for="first_name" className=" danaDemiBold dark:!text-gray-900 text-white">
                        نام کاربری
                     </label>
                     <Input
                        disabled
                        className="withColor cursor-not-allowed focus:!border-none mt-3.5 md:mt-4 rounded-2xl flex py-[15px] ps-6 text-white dark:!text-gray-700  w-full bg-[rgb(50,51,77)] dark:bg-[rgb(229,231,235)] h-max "
                        placeholder="نام کاربری کاربر را وارد کنید"
                        element="input"
                        id="username"
                        type="text"
                        value={newUserName}
                     />
                  </div>
               </div>
               <div className=" flex justify-between w-full mt-4">
                  <div>
                     <input type="hidden" name="nonce" value="d77a735c3d" />
                  </div>
                  <button
                     onClick={(e) => {
                        // setIseditemodal(true), setProductId(item._id), setProductTitle(item.name);
                        editesubmitModalAction(e);
                        // setNewName(userDatas?.userInfos?.name);
                     }}
                     type="submit"
                     className=" bg-limon-color  w-full md:w-auto mt-[129px] py-[11.5px] px-[28px] rounded-[12px] text-[20px] danaMedium"
                  >
                     <span className=" my-auto">ثبت اطلاعات</span>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
