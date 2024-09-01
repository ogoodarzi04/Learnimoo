import React, { useState } from "react";
import { HiOutlinePhone } from "react-icons/hi2";

// import "./Register.css";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Input from "../../Components/Form/Input";
import CButton from "../../Components/Form/CButton";
import useForm from "../../Hooks/useForm";
import Notification from "../../Components/Notification/Notification";

export default function Login() {
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   //
   const [allValid, inputs, inputHandeler] = useForm({
      phoneNumber: { value: "", isValid: false, error: "لطفا شماره تلفن را به درستی وارد کنید" },
   });
   //
   const submitHandeler = () => {
      if (allValid) {
         // Fetch
         //
         setSuccessToast(true);
         setShowErrorToast(true);
         setTimeout(() => {
            setSuccessToast(false);
            setShowErrorToast(false);
         }, 5000);
         return;
      }

      for (let input in inputs) {
         if (!inputs[input].isValid) {
            setTextErrorToast(inputs[input].error);
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 5000);
         }
      }
   };
   //
   return (
      <>
         <div className="   h-screen py-72 bg-transparent">
            <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sabz-color opacity-30 blur-[120px] rounded-full"></div>
            <div className="Login text-white ">
               <div className="logo-footer flex gap-x-7 mx-auto w-max mb-12 text-white">
                  <div className="logo-img my-auto ">
                     <img src="/img/slazzer-edit-image (2)_prev_ui.png" alt="" className=" md:h-[75px] md:w-[105px] h-[40px] w-[60px] mt-3 " />
                  </div>
                  <div className=" pt-2.5">
                     <p className="font-danaBold font-bold md:text-[45px] ">لرنیمو</p>
                     <i className=" text-[19px]">learnimoo.ir</i>
                  </div>
               </div>
               <Card className="mx-auto w-full max-w-[335px] px-3 py-1.5 h-[296px]   shadow-none rounded-[12px]">
                  <CardBody className="flex flex-col gap-8 text-white ">
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
                           autoFocus={true}
                           element="input"
                           className="withColor  rounded-xl flex py-[12.5px] ps-6  headlinecourse  size-full"
                           type="text"
                           placeholder="شماره موبایل"
                           id="phoneNumber"
                           value={inputs?.phoneNumber.value}
                           config={{ phoneNumber: 11 }}
                           inputHandeler={inputHandeler}
                        />

                        <HiOutlinePhone className=" absolute left-5 align-self-center" style={{ color: "rgb(100, 116, 139)", fontSize: 20 }} />
                     </div>
                     <CButton className=" danaMedium text-[13.5px] py-[12px] rounded-[30px]" color="yellow" variant="gradient" fullWidth={true} onClick={submitHandeler} disabled={false}>
                        ادامه
                     </CButton>
                     {/* <Button className=" danaMedium text-[13.5px] py-[12px] rounded-[30px]" color="yellow" variant="gradient" fullWidth>
                        ادامه
                     </Button> */}
                     <div className="flex items-center justify-between danaMedium text-sm  ">
                        <a href="https://sabzlearn.ir/login/email?after=https%3A%2F%2Fsabzlearn.ir%2F" style={{ color: "rgb(100, 116, 139)" }}>
                           ورود با ایمیل
                        </a>
                        <a href="https://sabzlearn.ir/terms-conditions/" className="underline underline-offset-2" style={{ color: "rgb(100, 116, 139)" }}>
                           حریم خصوصی
                        </a>{" "}
                     </div>
                  </CardBody>
                  <CardFooter className="pt-11 flex">
                     <p className=" text-white text-center text-[16.5px]">
                        با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات{" "}
                        <a href="http://localhost:5173">
                           <strong className=" text-limon-color  danaBold">لرنیمو</strong>{" "}
                        </a>
                        را پذیرفته اید.
                     </p>
                  </CardFooter>
               </Card>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-limon-color opacity-30 blur-[120px] rounded-full"></div>
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={"ورود"} />}
      </>
   );
}
