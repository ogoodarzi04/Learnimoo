import React, { useContext, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import useFetch from "../../../../Hooks/useFetch";
import { Link } from "react-router-dom";
import { Context } from "../../../../contexts/Context";
//
export default function TicketElement({ isLeftSideElem, isSlice, titleSec }) {
   const { DOMAIN } = useContext(Context);
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}tickets/user`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   //
   return (
      <div className=" Tickets ">
         <div className="bg-[rgb(40,41,61)] dark:!bg-white  md:p-8 rounded-3xl ">
            <div className="flex justify-between items-center p-4 md:pb-4 mb-6 md:mb-7 dark:!border-b-gray-200" style={{ borderBottom: "1px solid rgb(50,51,77)" }}>
               <span className="danaMedium md:text-[20px] dark:!text-gray-700 text-white">{titleSec}</span>
               {isLeftSideElem ? (
                  <Link to={"http://localhost:5173/my-account/tickets"} className="flex items-center gap-x-1.5 text-blue-500  text-sm">
                     همه تیکت ها
                     <FiArrowLeft style={{ fontSize: 17 }} className=" my-auto" />
                  </Link>
               ) : (
                  ""
               )}
            </div>
            <div className=" mt-8 ">
               {isSlice
                  ? post.slice(0, 4).map((item) => (
                       <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 dark:hover:bg-gray-100 hover:bg-[rgb(50,51,77)] rounded-xl transition-colors">
                          <Link to={`http://localhost:5173/my-account/view_ticket?id=${item._id}`} className="dark:!text-gray-700 text-white w-full sm:max-w-sm sm:truncate">
                             {item.departmentID}
                          </Link>
                          <div className="flex items-center gap-3">
                             <span className=" text-[12px] text-[rgb(127,140,207)] ">{item.createdAt.slice(0, 10)}</span>
                             {item.answer === 1 ? (
                                <span className=" text-[12px] py-1 px-2.5  text-yellow-400 dark:!text-gray-500  bg-yellow-400/10 rounded">پاسخ داده شده</span>
                             ) : (
                                <span className=" text-[12px] py-1 px-2.5  text-blue-400  bg-blue-400/10 rounded">در حال بررسی</span>
                             )}
                          </div>
                       </div>
                    ))
                  : post.map((item) => (
                       <div className="flex  items-center justify-between flex-wrap gap-y-3 p-3 dark:hover:bg-gray-100 hover:bg-[rgb(50,51,77)] rounded-xl transition-colors">
                          <Link to={`http://localhost:5173/my-account/view_ticket?id=${item._id}`} className="dark:!text-gray-900 text-white w-full sm:max-w-sm sm:truncate">
                             #{item._id.slice(0, 5)}
                             {item.title}
                          </Link>
                          <div className="flex items-center gap-x-7">
                             <span className=" text-[12px] text-[rgb(119,124,148)] ">{item.createdAt.slice(0, 10)}</span>
                             <span className=" text-[12px] py-1 px-2.5  text-gray-400  bg-yellow-400/10 rounded">{item.departmentSubID}</span>
                             {item.answer === 1 ? (
                                <span className=" text-[12px] py-1 px-2.5 dark:!text-gray-500 text-yellow-400   bg-yellow-400/10 rounded">پاسخ داده شده</span>
                             ) : (
                                <span className=" text-[12px] py-1 px-2.5  text-blue-400  bg-blue-400/10 rounded">در حال بررسی</span>
                             )}
                          </div>
                       </div>
                    ))}
            </div>
         </div>
      </div>
   );
}
