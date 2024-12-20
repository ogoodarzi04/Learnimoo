import React, { useContext, useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineLockClosed } from "react-icons/hi2";
// import "./Register.css";
import { Card, CardBody, CardFooter, input, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Form/Input";
import CButton from "../../Components/Form/CButton";
import useForm from "../../Hooks/useForm";
import Notification from "../../Components/Notification/Notification";
import { Context } from "../../contexts/Context";

export default function Login() {
   const { DOMAIN } = useContext(Context);
   const userDatas = useContext(Context);
   //
   let navigate = useNavigate();
   //
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   //
   const [allValid, inputs, inputHandeler] = useForm({
      // phoneNumber: { value: "", isValid: false, error: "لطفا شماره تلفن را به درستی وارد کنید" },
      username: { value: "", isValid: false, error: "در نام کاربری فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      email: { value: "", isValid: false, error: "لطفا ایمیل را به درستی وارد کنید" },
      password: { value: "", isValid: false, error: "رمز عبور باید حداقل 8 کاراکتر باشد" },
   });
   //

   const submitHandeler = () => {
      //
      fetch(`${DOMAIN}auth/login`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            identifier: inputs?.username.value,
            password: inputs?.password.value,
         }),
      })
         .then((res) => res.json())
         .then((result) => {
            if (result === "there is no user with this email or username") {
               setTextErrorToast(`کاربری با این ایمیل یا یوزرنیم وجود ندارد`);
               setShowErrorToast(true);
               setTimeout(() => {
                  setShowErrorToast(false);
               }, 4000);
            } else if (result.message === "password is not correct") {
               setTextErrorToast(`رمز عبور صحیح نمیباشد`);
               setShowErrorToast(true);
               setTimeout(() => {
                  setShowErrorToast(false);
               }, 4000);
            } else {
               userDatas.login({}, result.accessToken);

               setSuccessToast(true);
               setShowErrorToast(true);
               setTimeout(() => {
                  setSuccessToast(false);
                  setShowErrorToast(false);
                  navigate("/");
               }, 4000);
            }
         });
   };
   //
   return (
      <>
         <div className=" h-screen py-72 bg-transparent ">
            <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sabz-color opacity-30 blur-[120px] rounded-full"></div>
            <div className="Login text-white dark:!text-black ">
               <div className="logo-footer flex gap-x-7 mx-auto w-max mb-12 text-white dark:!text-black">
                  <div className="logo-img my-auto ">
                     <img src="/images/slazzer-edit-image (2)_prev_ui.png" alt="" className=" md:h-[75px] md:w-[105px] h-[40px] w-[60px] mt-3 " />
                  </div>
                  <div className=" pt-2.5">
                     <p className="font-danaBold font-bold md:text-[45px] ">لرنیمو</p>
                     <i className=" text-[19px]">learnimoo.ir</i>
                  </div>
               </div>
               <Card className="mx-auto w-full max-w-[335px] px-3 py-1.5 h-[367px]  dark:!bg-white shadow-none rounded-[12px]">
                  <CardBody className="flex flex-col gap-8 text-white dark:!text-gray-800">
                     <Typography className=" text-[20px] danaBold text-center">ورود با موبایل</Typography>
                     <Typography className=" danaDemiBold text-[16.5px] flex mx-auto" variant="paragraph">
                        حساب کاربری ندارید؟
                        <Link to="/Register">
                           <Typography color="yellow" className=" danaDemiBold text-[16.5px]">
                              ثبت نام کنید
                           </Typography>
                        </Link>
                     </Typography>
                     <div className={`flex relative`}>
                        <Input
                           element="input"
                           id="username"
                           autoFocus={true}
                           className="withColor pe-14  rounded-xl flex py-[12.5px] ps-6  headlinecourse  size-full dark:!bg-light-theme-color"
                           type="text"
                           value={inputs?.username.value}
                           placeholder="نام کاربری یا آدرس ایمیل"
                           config={{ max: 17, min: 3 }}
                           inputHandeler={inputHandeler}
                        />
                        <HiOutlineUser className=" absolute left-5 align-self-center" style={{ color: "rgb(100, 116, 139)", fontSize: 20 }} />
                     </div>
                     <div className={`flex relative`}>
                        {
                           <Input
                              id="password"
                              element="input"
                              className="withColor pe-14  rounded-xl flex py-[12.5px] ps-6  headlinecourse  size-full dark:!bg-light-theme-color"
                              type="password"
                              placeholder="رمز عبور"
                              value={inputs?.password.value}
                              config={{ min: 7 }}
                              inputHandeler={inputHandeler}
                           />
                        }
                        <HiOutlineLockClosed className=" absolute left-5 align-self-center" style={{ color: "rgb(100, 116, 139)", fontSize: 20 }} />
                     </div>
                     <CButton className=" danaMedium text-[13.5px] py-[12px] rounded-[30px]" color="yellow" variant="gradient" fullWidth={true} onClick={submitHandeler} disabled={false}>
                        ادامه
                     </CButton>

                     <div className="flex items-center justify-between danaMedium text-sm  ">
                        <a href="https://learnimoo.ir/login/email?after=https%3A%2F%2Flearnimoo.ir%2F" style={{ color: "rgb(100, 116, 139)" }}>
                           ورود با ایمیل
                        </a>
                        <a href="https://learnimoo.ir/terms-conditions/" className="underline underline-offset-2" style={{ color: "rgb(100, 116, 139)" }}>
                           حریم خصوصی
                        </a>{" "}
                     </div>
                  </CardBody>
                  <CardFooter className="pt-11 flex">
                     <p className=" text-white dark:!text-gray-800 text-center text-[16.5px]">
                        با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات{" "}
                        <a href="http://localhost:5173">
                           <strong className=" text-yellow-600  danaBold">لرنیمو</strong>{" "}
                        </a>
                        را پذیرفته اید.
                     </p>
                  </CardFooter>
               </Card>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-limon-color opacity-30 blur-[120px] rounded-full"></div>
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={"ورود با موفقیت انجام شد "} />}
      </>
   );
}
