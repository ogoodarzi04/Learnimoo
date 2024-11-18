import React, { useContext } from "react";
// import "./SideBar.css";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Context } from "../../../../contexts/Context";
import { sideBarUserMenus } from "../../../../datas";
import "./SideBarUser.css";
export default function SideBarUser(props) {
   let navigate = useNavigate();
   let userDatas = useContext(Context);
   const location = useLocation();
   return (
      <>
         <div className="SideBar w-full dark:!text-black text-white ">
            <div className="SideBar-title   ">
               <div className="logo-footer  py-[40px] flex gap-x-5 relative">
                  <Link to={"/"}>
                     <div className="logo-img ">
                        <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" className=" md:h-[60px] md:w-[80px] h-[35px] w-[100px] " />
                     </div>
                  </Link>
                  <div className=" my-auto">
                     <p className=" text-white danaMedium md:text-[44px] text-[25px]  dark:!text-blue-gray-900">لرنیمو</p>
                  </div>
                  {props.hiddenStyle}
               </div>
            </div>
            <div className="SideBar-user-menu  py-[10px]  flex ">
               <ul className=" list-item  list-none   cursor-pointer space-y-4">
                  {sideBarUserMenus.map((item) => {
                     return (
                        <li className=" mx-auto  flex  ">
                           <Link
                              to={`${item.path}`}
                              className={`items ${location.pathname === item.path && "active-user-S"}  flex py-[5px]  rounded-xl gap-x-4 w-[219px] text-white dark:!text-black ps-5`}
                           >
                              {item.icon}
                              <span className=" mt-1.5">{item.title}</span>
                           </Link>
                        </li>
                     );
                  })}
                  <li
                     className=" mx-auto  flex "
                     onClick={() => {
                        setTimeout(() => {
                           navigate("/");
                           userDatas.logout();
                        }, 1500);
                     }}
                  >
                     <Link className="items  flex py-[5px]  rounded-xl gap-x-4 w-[219px]  text-white dark:!text-black ps-5">
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
