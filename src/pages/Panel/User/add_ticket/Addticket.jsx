import React, { useEffect, useState } from "react";
import useForm from "../../../../Hooks/useForm";
import Input from "../../../../Components/Form/Input";
import usePost from "../../../../Hooks/usePost";
import useFetch from "../../../../Hooks/useFetch";
import Notification from "../../../../Components/Notification/Notification";
//
export default function Addticket() {
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   //
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      title: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      body: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   //
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   const SendTicket = (e) => {
      e.preventDefault();
      const newUserData = {
         departmentID,
         departmentSubID,
         title: inputs?.title.value,
         body: inputs?.body.value,
         priority,
      };
      //
      postdata("http://learnimoo.filedl.me:3000/tickets", newUserData, userDatas);
   };
   useEffect(() => {
      if (postpost && Object.keys(postpost)?.length > 0) {
         if (!postpost.message) {
            setSuccessToast(true);
            setShowErrorToast(true);
            setTimeout(() => {
               setSuccessToast(false);
               setShowErrorToast(false);
            }, 4000);
         } else {
            setTextErrorToast(postpost?.message[0]?.message);
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
            ClearInputs();
         }
      }
   }, [postpost]);
   //
   const [departMent, setDepartMent] = useState([]);
   const [departMentSub, setDepartMentSub] = useState([]);
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas("http://learnimoo.filedl.me:3000/tickets/departments", userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   useEffect(() => {
      setDepartMent(post);
   }, [post]);
   const [departmentID, setDepartmentID] = useState("-1");
   const { getAllDatas: getAllDatas2, post: post2, isPending: isPending2, err: err2 } = useFetch();
   const getDepartmentsSub = (Id) => {
      getAllDatas2(`http://learnimoo.filedl.me:3000/tickets/departments-subs/${Id}`, userDatas);
      setDepartmentID(Id);
   };
   useEffect(() => {
      setDepartMentSub(post2);
   }, [post2]);
   const [departmentSubID, setDepartmentsSubID] = useState("-1");
   const [priority, setPriority] = useState(-1);
   //
   return (
      <>
         <div className="Addticket mb-8 mt-10">
            <div className="md:p-16">
               {/* <h3 className="md:hidden danaDemiBold dark:!text-gray-700 text-white mb-7">omidKing عزیز؛ خوش اومدی 🙌</h3> */}
               <div className="dark:bg-white bg-[rgb(40,41,61)] p-3.5 md:p-9 rounded-3xl">
                  <div className="flex justify-between items-center pb-3.5 md:pb-4 mb-6 md:mb-7  dark:!border-b-gray-200 " style={{ borderBottom: "1px solid rgb(50,51,77)" }}>
                     <span className="danaMedium md:text-[20px] dark:!text-gray-700 text-white">ارسال تیکت</span>
                  </div>
                  <div id="add-ticket" method="post">
                     <div>
                        <label for="department" className="danaDemiBold dark:!text-gray-700 text-white">
                           دپارتمان
                        </label>
                        <select
                           onChange={(e) => getDepartmentsSub(e.target.value)}
                           name="department"
                           id="department"
                           required=""
                           className="mt-3.5 md:mt-4 w-full py-7 px-4 !border-none danaLight text-sm sm:text-base tracking-tight dark:!text-gray-700 text-white bg-[rgb(50,51,77)] dark:!bg-[rgb(243,244,246)] rounded-xl  focus:border-slate placeholder:text-slate-500 placeholder:text-gray-500 transition-all"
                        >
                           <option value={"-1"}>لطفا دپارتمان مورد نظر را انتخاب نمایید.</option>
                           {departMent.map((item) => (
                              <option value={item._id}>{item.title}</option>
                           ))}
                        </select>
                     </div>
                     <div className=" mt-10">
                        <label for="department" className="danaDemiBold dark:!text-gray-700 text-white">
                           نوع تیکت
                        </label>
                        <select
                           onChange={(e) => setDepartmentsSubID(e.target.value)}
                           name="department"
                           id="department"
                           required=""
                           className="mt-3.5 md:mt-4 w-full py-7 px-4 !border-none danaLight text-sm sm:text-base tracking-tight dark:!text-gray-700 text-white bg-[rgb(50,51,77)] dark:!bg-[rgb(243,244,246)] rounded-xl  focus:border-slate placeholder:text-slate-500 placeholder:text-gray-500 transition-all"
                        >
                           <option value={"-1"}>لطفا نوع تیکت را انتخاب نمایید.</option>
                           {departMentSub.map((item) => (
                              <option value={item._id}>{item.title}</option>
                           ))}
                        </select>
                     </div>
                     <div className=" mt-10">
                        <label for="department" className="danaDemiBold dark:!text-gray-700 text-white">
                           اولویت تیکت
                        </label>
                        <select
                           onChange={(e) => setPriority(e.target.value)}
                           name="priority"
                           id="priority"
                           required=""
                           className="mt-3.5 md:mt-4 w-full py-7 px-4 !border-none danaLight text-sm sm:text-base tracking-tight dark:!text-gray-700 text-white bg-[rgb(50,51,77)] dark:!bg-[rgb(243,244,246)] rounded-xl  focus:border-slate placeholder:text-slate-500 placeholder:text-gray-500 transition-all"
                        >
                           <option value={-1}>لطفا اولویت تیکت را انتخاب نمایید.</option>
                           <option value={1}>بالا</option>
                           <option value={2}>متوسط</option>
                           <option value={3}>کم</option>
                        </select>
                     </div>
                     <div className="mt-10">
                        <label for="title" className="danaDemiBold dark:!text-gray-700 text-white">
                           موضوع تیکت
                        </label>
                        <Input
                           required=""
                           placeholder="موضوع تیکت خود را وارد کنید"
                           element="input"
                           id="title"
                           name="title"
                           className="withColor  focus:!border-none mt-3.5 md:mt-4 rounded-lg flex py-[14px] ps-6 text-white  w-full bg-[rgb(50,51,77)] dark:!bg-[rgb(243,244,246)] h-max "
                           type="text"
                           config={{ max: 200, min: 3 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.title.value}
                        />
                     </div>
                     <div className="mt-10">
                        <label for="text" className="danaDemiBold dark:!text-gray-700 text-white">
                           متن تیکت
                        </label>
                        <Input
                           rows="8"
                           className=" h-[230px] mt-3.5 md:mt-4 w-full p-3 sm:p-5 danaLight text-sm sm:text-base tracking-tight dark:!text-gray-700 text-white bg-[rgb(50,51,77)] dark:!bg-[rgb(243,244,246)] rounded-xl  focus:border-slate placeholder:text-slate-500 placeholder:text-gray-500 transition-all"
                           required=""
                           placeholder="متن تیکت خود را وارد کنید"
                           spellcheck="false"
                           type="text"
                           config={{ max: 700, min: 3 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.body.value}
                           element="textarea"
                           id="body"
                           name="body"
                        />
                        <div className="m--mirror" contenteditable="false" style={{ position: "absolute", width: "0px", height: "0px", padding: "0px", margin: "0px", left: "158px", top: "564px" }}>
                           <div
                              className="m--mirror__wrapper"
                              spellcheck="false"
                              style={{ width: "1314px", height: "232px", overflow: "hidden", position: "relative", pointerEvents: "none", border: "1px solid transparent" }}
                           >
                              <div className="m--mirror__drawing-board" style={{ position: "absolute", left: "0px", width: "1314px", height: "232px", top: "0px", zIndex: "1" }}>
                                 <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative", userSelect: "none" }}></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between gap-5 flex-wrap mt-10">
                        <div className="flex gap-x-3 mr-auto">
                           <button onClick={(e) => SendTicket(e)} className="button-md bg-limon-color text-black px-[19px] py-[7px] rounded-[11px]" type="submit">
                              ارسال
                           </button>
                        </div>
                     </div>
                     <input type="hidden" name="ticket_id" value="" />
                     <input type="hidden" name="nonce" value="4dc8ca8eda" />
                  </div>
               </div>
               <div className="db-overlay invisible opacity-0 fixed w-full h-full top-0 left-0 bg-black/40 z-20 transition-all"></div>
            </div>
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={"تیکت با موفقیت ارسال شد"} />}
      </>
   );
}
