import React, { useContext, useEffect, useState } from "react";
import Charts from "../../Components/Charts/Charts";
import TabsChart from "../../Components/TabsChart/TabsChart";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import "./MainAdmin.css";
import Users from "../Users/Users";
import UsersElement from "../Users/usersElement";
import useFetch from "../../../../Hooks/useFetch";
import { noticePanelBox } from "../../../../datas";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/HeaderPanel/HeaderPanel";
//
export default function MainAdmin() {
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`http://learnimoo.filedl.me:3000/infos/p-admin`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   // console.log(post.infos);
   //
   return (
      <>
         <div className="MainAdmin relative mt-12 text-white  ">
            <div className=" md:grid-cols-3 grid text-white   left-0 right-0 top-3  gap-x-20 z-50 px-20 ">
               {noticePanelBox.map((item) => {
                  return (
                     <div className=" bg-black/50 !z-50 backdrop-blur-xl  rounded-[25px] flex relative">
                        <div className="pt-10 pb-14   px-16">
                           <p className=" text-gray-300 text-[26px]">{item.title}</p>
                           <p className=" text-white text-5xl danaBold mt-9">{item.count}</p>
                           <div className=" flex mt-6 gap-x-5">
                              <div className={`  text-[18px]  ${item.progress ? "text-[#92fe9d] bg-green-300/15" : "text-red-400 bg-red-500/15"} rounded-full `}>
                                 <div className=" flex gap-x-2 px-6 mt-2 ">
                                    <p>{item.progress ? `${item.progress}%` : `${item.regress}%`}</p>
                                    <p className=" my-auto">{item.progress ? <GoArrowUpRight className=" my-auto" /> : <GoArrowDownRight className=" my-auto " />}</p>
                                 </div>
                              </div>
                              <p className=" text-gray-300 text-[18px] my-auto">{item.updatedTime}</p>
                           </div>
                        </div>
                        <div className=" inset-0 self-center place-self-center  right-[190px] flex  absolute">{item.svg}</div>
                     </div>
                  );
               })}
            </div>
            {/* /// */}
            <div className=" text-3xl danaDemiBold font-bold ms-20 mt-14">
               <span className=" text-[#00c9ff]">{post.adminName} </span>
               <span>خوش آمدید</span>
            </div>
            <div className=" Charts md:grid-cols-3 grid gap-x-20  px-20 mt-11">
               <div className="  col-span-2  rounded-[20px]" style={{ background: "#000000 " }}>
                  <Charts title={"بررسی فروش"} type={"line"} tabs={<TabsChart />} />
               </div>
               <div className="  col-span-1 rounded-[20px]" style={{ background: "#000000 " }}>
                  <Charts
                     title={"محاسبه"}
                     type={"bar"}
                     tabs={
                        <div className="Selection flex me-6 bg-icon-color/20">
                           <Select label="Jan-Jun '22" className=" ">
                              <Option>Material Tailwind HTML</Option>
                           </Select>
                        </div>
                     }
                  />
               </div>
            </div>
            <div className=" grid grid-cols-3  ">
               <UsersElement isAddNewCmp={false} post={post.lastUsers} fetchData={fetchData} titleHdr={"لیست کاربران اخیر"} />
            </div>
         </div>
      </>
   );
}
