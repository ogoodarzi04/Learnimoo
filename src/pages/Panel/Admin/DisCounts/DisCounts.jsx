import React, { useEffect, useState } from "react";
import Input from "../../../../Components/Form/Input";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import useForm from "../../../../Hooks/useForm";
import usePost from "../../../../Hooks/usePost";
import Notification from "../../../../Components/Notification/Notification";
//
export default function DisCounts() {
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      discount: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   const setDisCountToAll = (e) => {
      e.preventDefault();
      let updatedDatas = {
         discount: inputs?.discount?.value,
      };
      //
      postdata(`${DOMAIN}offs/all`, updatedDatas, userDatas);
   };
   useEffect(() => {
      if (postpost) {
         if (postpost.message[0].message === "discount must be less than or equal to 100") {
            setTextErrorToast("درصد تخفیف وارد شده باید کمتر یا برابر با 100 باشد");
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
         } else if (!inputs?.discount?.value) {
            setTextErrorToast("لطفا درصد تخفیف را وارد کنید");
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
         } else {
            setSuccessToast(true);
            setShowErrorToast(true);
            setTimeout(() => {
               setSuccessToast(false);
               setShowErrorToast(false);
            }, 4000);
            ClearInputs();
         }
      }
   }, [postpost]);
   //
   return (
      <>
         <div className=" DisCounts text-white">
            <div className=" grid grid-cols-3  px-20 pb-24">
               <AddNewProduct title={"برگزاری کمپین جدید"}>
                  <div className=" grid md:grid-cols-2 p-4 gap-x-20 cursor-pointer !text-gray-400">
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           inputHandeler={inputHandeler}
                           value={inputs?.discount?.value}
                           id="discount"
                           name="discount"
                           placeholder="لطفا درصد تخفیف همگانی را وارد کنید..."
                           element="input"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                        />
                        <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                  </div>
                  <div className=" flex justify-between px-6">
                     <div className=" my-auto text-white"></div>
                     <button className="search-btnd my-auto px-4 py-2.5 text-black text-[18px] " onClick={setDisCountToAll}>
                        <span className=" danaDemiBold">ایجاد کمپین</span>
                     </button>
                  </div>
               </AddNewProduct>
            </div>
         </div>
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={"کمپین با موفقیت ایجاد شد"} />}
      </>
   );
}
