import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../../Hooks/useFetch";
import Input from "../../../../Components/Form/Input";
import useForm from "../../../../Hooks/useForm";
import usePost from "../../../../Hooks/usePost";
import Notification from "../../../../Components/Notification/Notification";
//
export default function ViewTicket() {
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   //
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      body: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   //
   let location = useLocation();
   let filterUserParam = location.search.split("=")[1];
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}tickets/answer/${filterUserParam}`, userDatas);
      getAllDatas2(`${DOMAIN}tickets/user`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, [filterUserParam]);
   //
   const [mainDataTickets, setMainDataTickets] = useState();
   const { getAllDatas: getAllDatas2, post: post2, isPending: isPending2, err: err2 } = useFetch();
   useEffect(() => {
      let mainDataTicket = post2.find((item) => item?._id == filterUserParam);
      setMainDataTickets(mainDataTicket);
   }, [post2]);
   //
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   const SendAnswer = (e) => {
      e.preventDefault();
      const newUserData = {
         departmentID:
            mainDataTickets.departmentID === "پشتیبانی"
               ? "63b68879f1d06a5090090f60"
               : mainDataTickets.departmentID === "مشاوره"
               ? "63b6888a5763c3034ca862b0"
               : mainDataTickets.departmentID === "مالی"
               ? "63b6888f2bfc084137143ab3"
               : "63b68895d9ea678d88ca3432",
         departmentSubID:
            mainDataTickets.departmentSubID === "پشتیبانی دوره ها"
               ? "63b688c5516a30a651e98156"
               : mainDataTickets.departmentSubID === "پشتیبانی سایت"
               ? "63b688d0e1286a126a8f2ff0"
               : mainDataTickets.departmentSubID === "مشاوره رایگان در زمینه برنامه نویسی"
               ? "63b688ec7707404dd353f69c"
               : mainDataTickets.departmentSubID === "بخش مالی"
               ? "63b68900ed3b8dfe319fcb05"
               : "63b689238ca627836e001837",
         title: mainDataTickets.title,
         body: inputs.body.value,
         priority: mainDataTickets.priority,
      };
      //   postdata(`${DOMAIN}tickets`, newUserData, userDatas);
   };
   //    useEffect(() => {
   //       if (postpost && Object.keys(postpost)?.length > 0) {
   //          if (!postpost.message) {
   //             setSuccessToast(true);
   //             setShowErrorToast(true);
   //             setTimeout(() => {
   //                setSuccessToast(false);
   //                setShowErrorToast(false);
   //             }, 4000);
   //          } else {
   //             setTextErrorToast(postpost?.message[0]?.message);
   //             setShowErrorToast(true);
   //             setTimeout(() => {
   //                setShowErrorToast(false);
   //             }, 4000);
   //             ClearInputs();
   //          }
   //       }
   //    }, [postpost]);
   //
   return (
      <>
         <div className="ViewTicket mt-10">
            <div className=" mb-72">
               <div className=" md:p-16">
                  {/* <h3 className="md:hidden danaDemiBold dark:!text-gray-700 text-white mb-7">{mainDataTickets?.title} عزیز؛ خوش اومدی 🙌</h3> */}
                  <div className="dark:bg-white bg-[rgb(40,41,61)] p-3.5 md:p-9 rounded-3xl">
                     <div className="flex justify-between items-center pb-3.5 md:pb-4 mb-6 md:mb-7  dark:!border-b-gray-200 " style={{ borderBottom: "1px solid rgb(50,51,77)" }}>
                        <span className="danaMedium md:text-[20px] dark:!text-gray-700 text-white">{mainDataTickets?.title}</span>
                     </div>
                     {/* user-text */}
                     {/* <div className="db-overlay  opacity-0 fixed w-full h-full top-0 left-0  z-20 transition-all"> */}
                     <div className=" mt-12 w-11/12 sm:w-2/3  overflow-hidden bg-[rgb(50,51,77)] dark:!bg-[rgb(243,244,246)] dark:!text-gray-700 text-white p-4 rounded-3xl rounded-tr-sm">
                        <h4 className="danaMedium text-3xl mb-1 text-right">{mainDataTickets?.user}</h4>
                        <span className="block text-lg danaLight text-gray-500 dark:text-gray-400 text-right" style={{ direction: "ltr" }}>
                           {mainDataTickets?.createdAt?.slice(0, 10)}
                        </span>
                        <p className="danaLight mt-4 flex-wrap">{post?.ticket}</p>
                     </div>
                     {/* </div> */}
                     {/* user-text */}
                     {/* admin-text */}
                     {post?.answer ? (
                        <>
                           <div className=" mt-4 w-11/12 sm:w-2/3 mr-auto bg-[rgb(78,129,251)]/20 dark:bg-blue-500/30  dark:!text-gray-700 text-white p-4 rounded-3xl rounded-tr-sm">
                              <h4 className="danaMedium text-3xl mb-1 text-left">شهرام خندقی</h4>
                              <span className="block text-lg danaLight text-gray-500 dark:text-gray-400 text-left" style={{ direction: "ltr" }}>
                                 {mainDataTickets?.updatedAt?.slice(0, 10)}
                              </span>
                              <p className="danaLight mt-4"></p>
                              {post?.answer}
                           </div>
                        </>
                     ) : (
                        ""
                     )}
                     <div className=" mt-12">
                        <Input
                           rows="8"
                           className=" h-[190px] mt-3.5 md:mt-4 w-full p-3 sm:p-5 danaLight text-sm sm:text-base tracking-tight dark:!text-gray-700 text-white bg-[rgb(50,51,77)] dark:!bg-[rgb(243,244,246)] rounded-3xl  focus:border-slate placeholder:text-slate-500 placeholder:text-gray-500 transition-all"
                           required=""
                           placeholder="پاسخ ..."
                           spellcheck="false"
                           type="text"
                           config={{ max: 700, min: 3 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.body.value}
                           element="textarea"
                           id="body"
                           name="body"
                        />
                        <div className="flex justify-between gap-5 flex-wrap mt-2">
                           <div className="flex gap-x-3 mr-auto">
                              <button onClick={(e) => SendAnswer(e)} className="button-md bg-limon-color text-black px-[19px] py-[7px] rounded-[11px]" type="submit">
                                 ارسال
                              </button>
                           </div>
                        </div>
                     </div>
                     {/* admin-text */}
                  </div>
               </div>
            </div>
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={"پاسخ با موفقیت ارسال شد"} />}
      </>
   );
}
