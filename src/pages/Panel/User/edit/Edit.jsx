import React, { useContext, useEffect, useState } from "react";
import Input from "../../../../Components/Form/Input";
import useForm from "../../../../Hooks/useForm";
import { Context } from "../../../../contexts/Context";
import useEdit from "../../../../Hooks/useEdit";
import Notification from "../../../../Components/Notification/Notification";
import DetailEditUser from "../../Components/DetailEditUser/DetailEditUser";
//
export default function Edit() {
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      password: { value: "", isValid: false, error: "رمز عبور باید حداقل 8 کاراکتر باشد" },
      // confirmpassword: { value: "", isValid: false, error: "رمز عبور باید حداقل 8 کاراکتر باشد" },
   });
   //
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   //
   const [newUserName, setNewUserName] = useState();
   const [newName, setNewName] = useState();
   const [newEmail, setNewEmail] = useState();
   const [newPhone, setNewPhone] = useState();
   const userDatas = useContext(Context);
   const userToken = JSON.parse(localStorage.getItem("user"));
   useEffect(() => {
      setNewUserName(userDatas?.userInfos?.username);
      setNewName(userDatas?.userInfos?.name);
      setNewEmail(userDatas?.userInfos?.email);
      setNewPhone(userDatas?.userInfos?.phone);
   }, [userDatas]);
   //
   const { editedata, editepost, setEditepost, errorr } = useEdit();
   const editesubmitModalAction = (e) => {
      e.preventDefault();
      const updatedDatas = {
         username: newUserName,
         name: newName,
         email: newEmail,
         password: inputs?.password?.value,
         phone: newPhone,
      };
      editedata(`http://learnimoo.filedl.me:3000/users`, userToken, updatedDatas);
   };
   useEffect(() => {
      if (editepost)
         if (editepost?.message) {
            if (editepost.message[0].message === "رمز عبور الزامی است") {
               setTextErrorToast(editepost.message[0].message);
               setShowErrorToast(true);
               setTimeout(() => {
                  setShowErrorToast(false);
               }, 4000);
            } else if (editepost.message[0].message === "رمز عبور باید حداقل 8 کاراکتر باشد") {
               setTextErrorToast(editepost.message[0].message);
               setShowErrorToast(true);
               setTimeout(() => {
                  setShowErrorToast(false);
               }, 4000);
            } else if (editepost.message[0].message === "نام الزامی است") {
               setTextErrorToast(editepost.message[0].message);
               setShowErrorToast(true);
               setTimeout(() => {
                  setShowErrorToast(false);
               }, 4000);
            }
         } else {
            setSuccessToast(true);
            setShowErrorToast(true);
            setTimeout(() => {
               setSuccessToast(false);
               setShowErrorToast(false);
            }, 4000);
         }
   }, [editepost]);
   ///
   return (
      <>
         <div className="Edit md:px-16 py-10">
            <div className=" grid md:grid-cols-3 gap-x-16 pb-4">
               <div className=" md:col-span-2 ">
                  <DetailEditUser
                     userDatas={userDatas}
                     newName={newName}
                     setNewName={setNewName}
                     newEmail={newEmail}
                     newPhone={newPhone}
                     newUserName={newUserName}
                     editesubmitModalAction={editesubmitModalAction}
                  />
               </div>
               <div className=" md:col-span-1 mt-16 md:mt-0">
                  <div className="xl:col-span-1 dark:bg-white bg-[rgb(40,41,61)]  pt-4 px-4 pb-[140px] rounded-3xl">
                     <div className="pb-4 py-2.5  dark:!border-b-gray-200" style={{ borderBottom: "1px solid rgb(100,116,139)" }}>
                        <span className=" danaMedium md:text-[20px] dark:!text-gray-900 text-white">تغییر رمز عبور</span>
                     </div>
                     <form id="edit-account-password" className="p-3.5 pt-12">
                        <div className="space-y-5 md:space-y-6">
                           {/* <div>
                           <div>
                              <label for="old_pass" className=" danaDemiBold dark:text-gray-700 text-white">
                                 رمز عبور فعلی
                              </label>
                              <Input
                                 className="withColor  focus:!border-none mt-3.5 md:mt-4 rounded-2xl flex py-[15px] ps-6 text-white  w-full bg-[rgb(50,51,77)] dark:bg-gray-400 h-max mb-3"
                                 placeholder="رمز فعلی را وارد کنید"
                                 element="input"
                                 type="text"
                                 config={{ max: 18, min: 4 }}
                                 inputHandeler={inputHandeler}
                                 value={inputs?.password.value}
                                 id="password"
                                 name="password"
                              />
                           </div>
                           <a href="https://sabzlearn.ir/login/lost-password" className="dark:text-gray-500 text-gray-400 text-sm ">
                              رمز عبور را فراموش کرده اید؟
                           </a>
                        </div> */}
                           <div>
                              <label for="new_pass" className=" danaDemiBold dark:!text-gray-900 text-white">
                                 رمز عبور جدید
                              </label>
                              <Input
                                 className="withColor  focus:!border-none mt-3.5 md:mt-4 rounded-2xl flex py-[15px] ps-6 text-white  w-full bg-[rgb(50,51,77)] dark:bg-[rgb(229,231,235)] h-max "
                                 placeholder="رمز جدید را وارد کنید"
                                 element="input"
                                 type="text"
                                 config={{ max: 18, min: 4 }}
                                 inputHandeler={inputHandeler}
                                 value={inputs?.password?.value}
                                 id="password"
                                 name="password"
                              />
                           </div>
                        </div>
                        <div className=" flex justify-between w-full mt-4">
                           <div>
                              <input type="hidden" name="nonce" value="454034387a" />
                           </div>
                           {/* <button onClick={(e) => EditPassword(e)} type="submit" className=" bg-limon-color  w-full md:w-auto mt-10 py-[11.5px] px-[28px] rounded-[12px] text-[20px] danaMedium">
                           <span className=" my-auto">تغییر رمز </span>
                        </button> */}
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={"تغییرات اعمال شد"} />}
      </>
   );
}
