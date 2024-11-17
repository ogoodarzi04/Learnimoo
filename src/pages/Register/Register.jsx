import React, { useContext, useEffect, useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import "./Register.css";
import { Card, CardBody, CardFooter, input, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Form/Input";
import CButton from "../../Components/Form/CButton";
import useForm from "../../Hooks/useForm";
import Notification from "../../Components/Notification/Notification";
import usePost from "../../Hooks/usePost";
import { Context } from "../../contexts/Context";
export default function Register() {
   const { DOMAIN } = useContext(Context);
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   //
   const [allValid, inputs, inputHandeler] = useForm({
      username: { value: "", isValid: false, error: "در نام کاربری فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      phone: { value: "", isValid: false, error: "لطفا شماره تلفن را به درستی وارد کنید" },
      email: { value: "", isValid: false, error: "لطفا ایمیل را به درستی وارد کنید" },
      password: { value: "", isValid: false, error: "رمز عبور باید حداقل 8 کاراکتر باشد" },
   });
   //
   let navigate = useNavigate();
   const userDatas = useContext(Context);
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   const submitHandeler = () => {
      // if (allValid) {
      const newData = {
         name: inputs?.username.value,
         username: inputs?.username.value,
         email: inputs?.email.value,
         password: inputs?.password.value,
         confirmPassword: inputs?.password.value,
         phone: inputs?.phone.value,
      };
      postdata(`${DOMAIN}auth/register`, newData, false);
      //
      // }
   };
   useEffect(() => {
      if (postpost && Object.keys(postpost)?.length > 0) {
         if (postpost.message === "username or email is duplicate.") {
            setTextErrorToast(`نام کاربری یا ایمیل تکراری است`);
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
         }
         if (postpost.message === "this phone number banned!") {
            setTextErrorToast(`کاربر با این شماره تماس مسدود شده است`);
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
         }
         if (postpost.accessToken) {
            userDatas.login(postpost.user, postpost.accessToken);
            setSuccessToast(true);
            setShowErrorToast(true);
            setTimeout(() => {
               setSuccessToast(false);
               setShowErrorToast(false);
               navigate("/");
            }, 4000);
         }
         for (let input in inputs) {
            if (!inputs[input].isValid) {
               setTextErrorToast(inputs[input].error);
               setShowErrorToast(true);
               setTimeout(() => {
                  setShowErrorToast(false);
               }, 4000);
            }
         }
      }
   }, [postpost]);

   return (
      <>
         <div className="   h-screen py-40 bg-transparent ">
            <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sabz-color opacity-30 blur-[120px] rounded-full"></div>
            <div className="Register text-white dark:!text-black  ">
               <div className="logo-footer flex gap-x-7 mx-auto w-max mb-12 text-white dark:!text-black ">
                  <div className="logo-img my-auto ">
                     <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" className=" md:h-[75px] md:w-[105px] h-[40px] w-[60px] mt-3 " />
                  </div>
                  <div className=" pt-2.5">
                     <p className="font-danaBold font-bold md:text-[45px] ">لرنیمو</p>
                     <i className=" text-[19px]">learnimoo.ir</i>
                  </div>
               </div>
               <Card className="mx-auto w-full max-w-[335px] px-3 py-1.5 h-[468px]  shadow-none rounded-[12px] dark:!bg-white">
                  <CardBody className="flex flex-col gap-8 text-white dark:!text-gray-800">
                     <Typography className=" text-[20px] danaBold text-center">عضویت</Typography>
                     <Typography className=" danaDemiBold text-[16.5px] flex mx-auto" variant="paragraph">
                        قبلا ثبت نام کرده اید؟
                        <Link to="/login">
                           <Typography color="yellow" className=" danaDemiBold text-[16.5px]">
                              وارد شوید
                           </Typography>
                        </Link>
                     </Typography>
                     <div className={`flex relative`}>
                        <Input
                           element="input"
                           id="username"
                           autoFocus={true}
                           className="withColor pe-16  rounded-xl flex py-[12.5px] ps-6  headlinecourse  size-full dark:!bg-light-theme-color"
                           type="text"
                           value={inputs?.username.value}
                           placeholder="نام کاربری "
                           config={{ max: 17, min: 3 }}
                           inputHandeler={inputHandeler}
                        />
                        <HiOutlineUser className=" absolute left-5 align-self-center" style={{ color: "rgb(100, 116, 139)", fontSize: 20 }} />
                     </div>
                     <div className={`flex relative`}>
                        {
                           <Input
                              element="input"
                              id="phone"
                              className="withColor pe-16  rounded-xl flex py-[12.5px] ps-6  headlinecourse  size-full dark:!bg-light-theme-color"
                              type="text"
                              value={inputs?.phone.value}
                              placeholder="شماره موبایل"
                              config={{ phone: 11 }}
                              inputHandeler={inputHandeler}
                           />
                        }
                        <HiOutlinePhone className=" absolute left-5 align-self-center" style={{ color: "rgb(100, 116, 139)", fontSize: 20 }} />
                     </div>
                     <div className={`flex relative`}>
                        {
                           <Input
                              // value={}
                              id="email"
                              element="input"
                              className="withColor pe-16  rounded-xl flex py-[12.5px] ps-6  headlinecourse  size-full dark:!bg-light-theme-color"
                              type="text"
                              value={inputs?.email.value}
                              placeholder="آدرس ایمیل"
                              config={{ email: inputs?.email.value }}
                              inputHandeler={inputHandeler}
                           />
                        }
                        <HiOutlineMail className=" absolute left-5 align-self-center" style={{ color: "rgb(100, 116, 139)", fontSize: 20 }} />
                     </div>
                     <div className={`flex relative`}>
                        {
                           <Input
                              id="password"
                              element="input"
                              className="withColor pe-16  rounded-xl flex py-[12.5px] ps-6  headlinecourse  size-full dark:!bg-light-theme-color"
                              type="password"
                              placeholder="رمز عبور"
                              value={inputs?.password.value}
                              config={{ min: 7, max: 19 }}
                              inputHandeler={inputHandeler}
                           />
                        }
                        <HiOutlineLockClosed className=" absolute left-5 align-self-center" style={{ color: "rgb(100, 116, 139)", fontSize: 20 }} />
                     </div>
                     <CButton className=" danaMedium text-[13.5px] py-[12px] rounded-[30px]" color="yellow" variant="gradient" fullWidth={true} onClick={submitHandeler} disabled={false}>
                        ادامه
                     </CButton>
                     {/* <Button className=" danaMedium text-[13.5px] py-[12px] rounded-[30px]" color="yellow" variant="gradient" fullWidth>
                        ادامه
                     </Button> */}
                  </CardBody>
                  <CardFooter className="pt-11 flex">
                     <p className=" text-white dark:!text-gray-800 text-center text-[16.5px]">
                        با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات{" "}
                        <a href="http://localhost:5173">
                           <strong className=" text-limon-color dark:text-yellow-600  danaBold">لرنیمو</strong>{" "}
                        </a>
                        را پذیرفته اید.
                     </p>
                  </CardFooter>
               </Card>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-limon-color opacity-30 blur-[120px] rounded-full"></div>
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={"عضویت با موفقیت انجام شد "} />}
      </>
   );
}
