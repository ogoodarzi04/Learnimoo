import React, { useContext } from "react";
import "./SideBar.css";
import { BsBagCheck } from "react-icons/bs";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Context } from "../../../../contexts/Context";
import { sideBarMenus } from "../../../../datas";
export default function SideBar() {
   let navigate = useNavigate();
   let userDatas = useContext(Context);
   const location = useLocation();
   return (
      <>
         <div className="SideBar bg-[#111219]  w-full !text-gray-400 dark:text-black hidden md:block" style={{ borderLeft: "2px solid #323232" }}>
            <div className="SideBar-title   ">
               <div className="logo-footer ps-14 py-[40px] flex gap-x-5">
                  <div className="logo-img ">
                     <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" className=" md:h-[35px] md:w-[55px] h-[40px] w-[60px] " />
                  </div>
                  <div className="">
                     <p className=" text-gray-200 danaMedium md:text-[25px] dark:!text-blue-gray-900">لرنیمو</p>
                  </div>
               </div>
            </div>
            <p className=" ms-12 mt-12 text-[16.5px]">منو</p>
            <div className="SideBar-menu  py-[10px] mx-auto flex ">
               <ul className=" list-item  list-none  text-[23px] cursor-pointer mx-auto ">
                  {sideBarMenus.map((item) => {
                     return (
                        <li className=" mx-auto  flex ">
                           <Link to={`${item.path}`} className={`item ${location.pathname === item.path && "active-S"}  flex py-[16.5px]  rounded-xl gap-x-4 w-[265px] ps-8 !text-gray-400`}>
                              {item.icon}
                              <span>{item.title}</span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </div>
            <p className=" ms-12 mt-6 text-[16.5px]">سایر</p>
            <div className="SideBar-menu  py-[10px] mx-auto flex ">
               <ul className=" list-item  list-none  text-[23px] cursor-pointer mx-auto ">
                  <li className={` mx-auto flex `}>
                     <Link to={"discounts"} className={`  ${location.pathname === "/p-admin/discounts" && "active-S"} item flex  py-[16.5px] w-[265px] ps-8 rounded-xl gap-x-4 !text-gray-400`}>
                        <RiLogoutCircleRLine className=" my-auto" />
                        <span className=" my-auto">تخفیف همگانی</span>
                     </Link>
                  </li>
                  <li
                     className=" mx-auto  flex mt-3 "
                     onClick={() => {
                        setTimeout(() => {
                           navigate("/");
                           userDatas.logout();
                        }, 1500);
                     }}
                  >
                     <Link className="item flex  py-[16.5px] w-[265px] ps-8 rounded-xl gap-x-4 !text-gray-400">
                        <RiLogoutCircleRLine className=" my-auto" />
                        <span className=" my-auto">خروج</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
}
