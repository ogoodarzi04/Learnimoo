import React, { useContext, useState } from "react";
import "./HeaderPanel.css";
import { RiNotification2Line } from "react-icons/ri";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Context } from "../../../../contexts/Context";
import NotifiCation from "../NotifiCation/NotifiCation";
import { CiMenuFries } from "react-icons/ci";
import SideBar from "../SideBar/SideBar";
//
export default function Header(props) {
   const userDatas = useContext(Context);
   const [showSideBar, setShowSideBar] = useState(false);
   //
   return (
      <>
         <div className={` relative ${props.mb}`}>
            <div className=" absolute  bg-cover top-0 left-0 w-full">
               <svg className=" !w-full brightness-125" viewBox="0 0 1143 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_700)">
                     <path d="M0.486694 0.866669H1144.31V238.805H0.486694V0.866669Z" fill="black" />
                     <g filter="url(#filter0_f_1_700)">
                        <ellipse cx="510.168" cy="139.575" rx="552.153" ry="281.388" transform="rotate(-15 510.168 139.575)" fill="url(#paint0_linear_1_700)" />
                     </g>
                  </g>
                  <defs>
                     <filter className=" " id="filter0_f_1_700" x="-314.858" y="-454.24" width="1650.05" height="1187.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="143.336" result="effect1_foregroundBlur_1_700" />
                     </filter>
                     <linearGradient className=" " id="paint0_linear_1_700" x1="-41.9855" y1="139.575" x2="1062.32" y2="139.575" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#92FE9D" />
                        <stop offset="1" stop-color="#00C9FF" />
                        <stop offset="1" stop-color="#00C9FF" />
                     </linearGradient>
                     <clipPath id="clip0_1_700">
                        <rect className=" " width="1141.91" height={`${props.height}`} fill="white" transform="translate(0.486328 0.866669)" />
                     </clipPath>
                  </defs>
               </svg>
            </div>
            <div className="Wrapp-Header  w-full flex justify-between md:py-[29px]">
               <div className=" Left-side-p  flex me-5 text-white gap-x-5">
                  <button
                     className=" md:!hidden flex lefSide-icons-p !bg-black/40 z-50 relative"
                     onClick={() => {
                        setShowSideBar(true);
                     }}
                  >
                     <CiMenuFries className=" text-white" style={{ fontSize: 23 }} />
                  </button>
                  <button className="   lefSide-icons-p !bg-black/40 z-50 relative">
                     {userDatas?.userInfos?.notifications?.length > 0 ? <div className=" bg-red-500 size-[11px] z-50 rounded-full absolute right-[12px]"></div> : ""}
                     <NotifiCation notifs={userDatas?.userInfos?.notifications}>
                        <RiNotification2Line className=" text-white" style={{ fontSize: 23 }} />
                     </NotifiCation>
                  </button>
                  <div className="xl:flex hidden search-box !bg-black/40  z-50 rounded-[12px]  lg:flex w-max px-4 h-[50px] text-white dark:!text-text-gray-color">
                     <input className="  bg-black/0 px-3 z-50 rounded-[12px]  w-max  text-white dark:!text-text-gray-color" type="text" placeholder="جست جو کنید... " />
                     <button className=" z-50 h-full flex ">
                        <SearchRoundedIcon style={{ fontSize: 26 }} className=" my-auto  text-white dark:!text-text-gray-color " />
                     </button>
                  </div>
               </div>
               <div className="admin-person Right-side me-16 z-50">
                  <div className="img-person flex gap-x-4 ">
                     <img src={`${userDatas?.userInfos?.profile ? userDatas?.userInfos?.profile : "/images/amir.jpg"}`} alt="" className=" size-[46px] rounded-full my-auto" />
                     <div className="admin-name  text-white">
                        <p className=" text-[21px] danaDemiBold">
                           {userDatas?.isLoggedIn && userDatas.userInfos?.name}
                           <p className=" text-[14px] text-gray-300 ">ادمین</p>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {showSideBar && <SideBar setShowSideBar={setShowSideBar} isShowAdminSideBar={true} />}
      </>
   );
}
/* Rectangle 12 */
