import React, { useContext, useEffect, useState } from "react";
import { List, ListItem, Card, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Context } from "../../contexts/Context";
import { Link } from "react-router-dom";

//
export default function UserProfile(props) {
   const userDatas = useContext(Context);

   let myScreen = document.body.style.height;
   //
   return (
      <>
         {props.showProfileUser && (
            <div
               onClick={() => {
                  props.setShowProfileUser((prev) => !prev);
               }}
               className={` fixed size-full bg-black/35 backdrop-blur-[8px] right-0 top-0 z-50`}
            ></div>
         )}
         <div className="relative  z-[55] ">
            <Menu>
               <MenuHandler>
                  <button>{props.menuHnd}</button>
               </MenuHandler>
               {props.showProfileUser && (
                  <MenuList
                     onClick={() => {
                        console.log(myScreen);
                        props.setShowProfileUser((prev) => !prev);
                     }}
                     className="UserProfile  absolute lg:!left-20 !left-6 !top-40 z-50 !bg-header-color dark:!bg-white dark:!text-black rounded-[12px] "
                  >
                     <div className=" flex justify-start ms-8 gap-x-6  py-4 mt-2.5 dark:!text-black">
                        <div className="flex-center rounded-full my-auto p-[1px]  dark:!text-black">
                           <div className="flex-center   rounded-full  !text-gray-color ">
                              <FaCircleUser style={{ fontSize: 50 }} className=" " />
                           </div>
                        </div>
                        <div className="block ">
                           <p className=" text-white danaBold dark:!text-black" style={{ fontSize: 16 }}>
                              {userDatas.isLoggedIn && userDatas.userInfos.name}
                           </p>
                           <p className=" text-[14px] text-limon-color danaDemiBold mt-3">موجودی: 0 تومان</p>
                        </div>
                     </div>
                     <Card className="w-[278px] pb-8 rounded-[12px] bg-header-color dark:bg-white dark:!text-black">
                        <List className=" danaMedium text-[16px] space-y-1.5 ">
                           <Link to={"http://localhost:5173/my-account"} className="text-initial px-6  dark:!border-t-gray-200 " style={{ borderTop: "1px solid #ffffff0d" }}>
                              <ListItem className=" mt-3 dark:!text-black ">
                                 <div className=" ps-3.5 flex  gap-x-3.5 py-3 ">
                                    <AiOutlineHome style={{ fontSize: 23 }} />
                                    <span className=" mt-1.5"> پیشخوان</span>
                                 </div>
                              </ListItem>
                           </Link>
                           <Link to={"http://localhost:5173/my-account/courses"} className="text-initial px-6">
                              <ListItem>
                                 <div className=" ps-3.5 flex  gap-x-3.5 py-3 dark:!text-black">
                                    <BsFolder2Open style={{ fontSize: 23 }} />
                                    <span className=" mt-1.5"> دوره های من</span>
                                 </div>
                              </ListItem>
                           </Link>
                           <Link to={"http://localhost:5173/my-account/tickets"} className="text-initial px-6">
                              <ListItem>
                                 <div className=" ps-3.5 flex  gap-x-3.5 py-3 dark:!text-black">
                                    <HiOutlineChatBubbleLeftRight style={{ fontSize: 23 }} />
                                    <span className=" mt-1.5"> تیکت ها</span>
                                 </div>
                              </ListItem>
                           </Link>
                           <Link to={"http://localhost:5173/my-account/edit-account"} className="text-initial px-6 dark:!border-b-gray-200" style={{ borderBottom: "1px solid #ffffff0d" }}>
                              <ListItem className=" mb-3  dark:!text-black">
                                 <div className=" ps-3.5 flex  gap-x-3.5 py-3">
                                    <HiOutlineUser style={{ fontSize: 23 }} />
                                    <span className=" mt-1.5"> جزییات حساب</span>
                                 </div>
                              </ListItem>
                           </Link>
                        </List>
                        <a
                           href="#"
                           className="text-initial px-8 "
                           onClick={() => {
                              userDatas.logout();
                           }}
                        >
                           <ListItem className=" mt-2 logout-act dark:!text-black">
                              <div className=" ps-3.5 flex  gap-x-3.5 py-3 ">
                                 <RiLogoutCircleRLine style={{ fontSize: 23 }} />
                                 <span className=" danaMedium " style={{ fontSize: 16 }}>
                                    خروج
                                 </span>
                              </div>
                           </ListItem>
                        </a>
                     </Card>
                  </MenuList>
               )}
            </Menu>
         </div>
      </>
   );
}
//
