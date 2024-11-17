import { Link } from "react-router-dom";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaCircleSolid } from "react-icons/lia";
import BoxCourseDetails from "../../Components/BoxCourseDetails/BoxCourseDetails";
import { sessionBoxDetails } from "../../datas";
import { FiDownload } from "react-icons/fi";
///
export default function LeftSideSession({ objs, courseSessDet, sessions, courseName }) {
   //
   return (
      <>
         <div className=" md:mt-0 p-8 bg-white dark:!bg-white rounded-[17px] text-white dark:!text-black">
            <div class="flex items-center gap-x-2 mb-[20px] pb-[20px] dark:border-b-white/10 dark:!border-b-[#e5e7eb]" style={{ borderBottom: "1px solid rgb(51,60,76)" }}>
               <IoDocumentTextOutline style={{ fontSize: 30 }} />
               <span class="danaDemiBold text-3xl ms-2">سرفصل های دوره</span>
            </div>
            <div className="overflow-auto scrollbar-thin h-[595px] scrollbar-thin ">
               <div className=" bg-[rgb(51,60,76)] dark:bg-light-theme-color dark:!text-black container">
                  {sessions.map((item, index) => {
                     return (
                        <div className=" px-3">
                           {item.free === 1 ? (
                              <Link className=" !text-white dark:!text-black" to={`/lesson/${courseName}/${item._id}`}>
                                 <div
                                    className=" py-8 space-y-6 cursor-pointer hover:text-[rgb(245,158,11)] dark:hover:!text-[rgb(245,158,11)] dark:!border-b-[#e5e7eb]"
                                    style={{ borderBottom: "1px solid #ffffff1a" }}
                                 >
                                    <div className=" flex gap-x-6   ">
                                       <div>
                                          <span className=" my-auto "> {item.title}</span>
                                       </div>
                                    </div>
                                    <div className=" flex gap-x-3  justify-between w-full ">
                                       <div className="">
                                          <LiaCircleSolid className=" text-[rgb(245,158,11)] my-auto  " style={{ fontSize: 26 }} />
                                       </div>
                                       <div className=" px-[16px] rounded-full py-1.5" style={{ border: "1px solid rgb(255,152,0)" }}>
                                          <span className="  text-[rgb(245,158,11)] my-auto">{item.time}</span>
                                       </div>
                                    </div>
                                 </div>
                              </Link>
                           ) : (
                              <div
                                 className=" py-8 space-y-6 cursor-pointer hover:text-[rgb(245,158,11)] dark:hover:!text-[rgb(245,158,11)] dark:!border-b-[#e5e7eb]"
                                 style={{ borderBottom: "1px solid #ffffff1a" }}
                              >
                                 <div className=" flex gap-x-6   ">
                                    <div>
                                       <span className=" my-auto "> {item.title}</span>
                                    </div>
                                 </div>
                                 <div className=" flex gap-x-3  justify-between w-full ">
                                    <div className="">
                                       <LiaCircleSolid className=" text-[rgb(245,158,11)] my-auto  " style={{ fontSize: 26 }} />
                                    </div>
                                    <div className=" p-[8px] rounded-full " style={{ border: "1px solid rgb(239 68 68)" }}>
                                       <HiOutlineLockClosed className=" text-[rgb(239,68,68)]" style={{ fontSize: 16 }} />
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
         <div className=" BoxCourseDetails !grid !grid-cols-3 gap-x-6  text-white mt-[32px]">
            {sessionBoxDetails.map((box, index) => {
               let newBox = { ...box, ...objs[index] };
               return (
                  <div className=" !col-span-1">
                     {" "}
                     <BoxCourseDetails iconStyle={" w-max mx-auto mb-3 !text-[rgb(245,158,11)]"} desStyle={" mx-auto w-max"} blockStyle={true} box={newBox} />
                  </div>
               );
            })}
         </div>
         <div className=" text-white dark:text-black dark:bg-white bg-header-color rounded-2xl pt-6 px-4 pb-2 md:py-10 md:px-5 text-center mt-5">
            <img className="block mb-4  mx-auto object-cover rounded-full" width="90" height="90" src={`${courseSessDet.creator?.profile}`} alt="محمدامین سعیدی راد" />
            <span className=" danaDemiBold text-3xl mb-2 ">
               {courseSessDet.creator?.name} | {courseSessDet.creator?.role === "ADMIN" && "مدرس دوره"}
            </span>
            <div className="flex items-center cursor-pointer dark:text-[rgb(245,158,11)] text-[rgb(245,158,11)] mx-auto w-max mt-7 ">
               <div
                  className=" px-6 py-2.5 mb-10 md:hover:bg-[rgb(245,158,11)] md:dark:hover:bg-text-[rgb(245,158,11)] md:hover:text-white md:dark:hover:text-white rounded-full transition-colors gap-x-2 md:px-7 md:py-3.5"
                  style={{ border: "1px solid rgb(245,158,11)" }}
               >
                  <span className=" my-auto">مشاهده پروفایل من</span>
               </div>
            </div>
         </div>
         <div class="dark:!bg-white bg-white  dark:border-none border-neutral-100  p-4 sm:p-5 text-center rounded-2xl mt-5 lg:mt-8">
            <div class="flex-center w-[90px] h-[90px] m-auto dark:bg-blue-50 bg-blue-500/10 rounded-full relative mt-2">
               <FiDownload className=" absolute inset-0  m-auto text-blue-500" style={{ fontSize: 32 }} />
            </div>
            <span class="inline-block my-10 text-3xl danaDemiBold  text-white dark:!text-black">دانلود همگانی ویدیو ها</span>
            <div className=" px-2 mb-2.5">
               <button target="_blank" href="https://learnimoo.ir/lesson/17-27464?grdl=true" class="w-full rounded-full py-[11px] text-white bg-blue-400">
                  دانلود
               </button>
            </div>
         </div>
      </>
   );
}
