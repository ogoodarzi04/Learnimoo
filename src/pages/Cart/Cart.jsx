import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { GiTrophyCup } from "react-icons/gi";
import { Context } from "../../contexts/Context";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import PopularCourse from "../../Components/PopularCourse/PopularCourse";
import usePost from "../../Hooks/usePost";
import Notification from "../../Components/Notification/Notification";
import ShopCart from "../../Components/shopCart/shopCart";
import DataPay from "../../Components/dataPay/dataPay";
//
export default function Cart() {
   const { DOMAIN } = useContext(Context);
   const userDatasCourse = JSON.parse(localStorage.getItem("user"));
   const userDatas = useContext(Context);
   let initDatas = userDatas?.userInfos?.courses;
   // const [cartCourses, setCartCourses] = useState(() => {
   //    const savedItems = localStorage.getItem("userDeleteCourse");
   //    return savedItems ? JSON.parse(savedItems) : initDatas;
   // });
   const [cartCourses, setCartCourses] = useState([]);

   useEffect(() => {
      setCartCourses(initDatas);
   }, [initDatas]);

   const [resultPrices, setResultPrices] = useState("");
   const [resultOffsPrices, setResultOffsPrices] = useState("");
   const [inputOffCode, setInputOffCode] = useState("");
   const [stepOff, setStepOff] = useState("");
   useEffect(() => {
      if (cartCourses?.length > 0) {
         setResultPrices(
            cartCourses.reduce((current, next) => {
               return current + next?.price;
            }, 0)
         );
         setResultOffsPrices(
            cartCourses.reduce((current, next) => {
               let percentPrice = (next?.price * 5) / 100;
               return current + next?.price - percentPrice;
            }, 0)
         );
      }
      //
   }, [cartCourses]);
   const [isAcceptRules, setIsAcceptRules] = useState(false);
   const [showOffCode, setShowOffCode] = useState(false);
   //
   const [showErrorToast, setShowErrorToast] = useState(false);
   const [textErrorToast, setTextErrorToast] = useState("");
   const [successToast, setSuccessToast] = useState(false);
   // const DeleteCourse = (Id) => {
   //    let newItems = cartCourses.filter((item) => item._id !== Id);
   //    setCartCourses(newItems);
   //    localStorage.setItem("userDeleteCourse", JSON.stringify(newItems));
   // };
   const [courseId, setCourseId] = useState("-1");
   const [validRules, setValidRules] = useState(false);
   const [successTxt, setSuccessTxt] = useState("");
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   const SendOffCode = () => {
      const newUserData = {
         course: courseId,
      };
      postdata(`${DOMAIN}offs/${inputOffCode}`, newUserData, userDatasCourse);
   };
   //
   useEffect(() => {
      if (postpost) {
         if (postpost.message === "This code already used.") {
            setTextErrorToast(`این کد قبلا استفاده شده !`);
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
         } else if (postpost.message === "Code is not valid") {
            setTextErrorToast(`این کد معتبر نیست !`);
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
         } else if (postpost.message === `Cast to ObjectId failed for value "-1" (type string) at path "course" for model "Off"`) {
            setTextErrorToast(`لطفا دوره مورد نظر برای اعمال تخفیف را انتخاب کنید!`);
            setShowErrorToast(true);
            setTimeout(() => {
               setShowErrorToast(false);
            }, 4000);
         } else {
            let mainPriceCourse = initDatas.find((item) => {
               return item?._id === courseId;
            });
            const newUserDataRegister = {
               price: mainPriceCourse?.price - (mainPriceCourse?.price * 51) / 100,
            };
            // postdata(`${DOMAIN}courses/${courseId}/register`, newUserDataRegister, userDatasCourse);
            //
            fetch(`${DOMAIN}courses/${courseId}/register`, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userDatasCourse.token}`,
               },

               body: JSON.stringify(newUserDataRegister),
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.message === "you are already registered to this course.") {
                     setTextErrorToast(`شما قبلا در این دوره ثبت نام شدید !`);
                     setShowErrorToast(true);
                     setTimeout(() => {
                        setShowErrorToast(false);
                     }, 4000);
                  } else {
                     setSuccessTxt("کد تخفیف اعمال شد");
                     setValidRules(true);
                     //
                     setSuccessToast(true);
                     setShowErrorToast(true);
                     setTimeout(() => {
                        setSuccessToast(false);
                        setShowErrorToast(false);
                     }, 4000);
                  }
               })
               .catch((errorrs) => console.log(errorrs));
         }
      }
   }, [postpost]);
   const completeBuy = () => {
      if (cartCourses.length > 0) {
         setSuccessTxt("به درگاه پرداخت منتقل شدید");
         setSuccessToast(true);
         setShowErrorToast(true);
         setTimeout(() => {
            setSuccessToast(false);
            setShowErrorToast(false);
         }, 4000);
      }
   };
   //
   return (
      <>
         <Header />
         <div className="Cart grid  relative container mt-14">
            <div className="flex items-center gap-x-2 my-5 md:my-8 py-2.5 sm:py-7 px-4 md:px-6 dark:bg-white bg-header-color  text-red-500 rounded-3xl">
               <GiTrophyCup className=" text-4xl md:!text-[25px]" />
               <p className="text-sm md:!text-[17px] danaDemiBold ms-1.5">با افزودن هر یک دوره به سبد خرید، 5 درصد تخفیف بیشتری دریافت کنید(تا سقف 30 درصد).</p>
            </div>
            <div className=" grid md:grid-cols-6 gap-x-12">
               <div className=" md:col-span-4">
                  {" "}
                  <ShopCart cartCourses={cartCourses} />
               </div>
               <div className=" md:col-span-2 mt-[20px] md:mt-0">
                  <DataPay
                     resultPrices={resultPrices}
                     resultOffsPrices={resultOffsPrices}
                     isAcceptRules={isAcceptRules}
                     setIsAcceptRules={setIsAcceptRules}
                     completeBuy={completeBuy}
                     setShowOffCode={setShowOffCode}
                     showOffCode={showOffCode}
                     inputOffCode={inputOffCode}
                     setInputOffCode={setInputOffCode}
                     SendOffCode={SendOffCode}
                     setCourseId={setCourseId}
                     initDatas={initDatas}
                  />
               </div>
            </div>
            <div className=" grid  bg-[rgb(36,42,56)] dark:!bg-white !rounded-[14px] mt-20 relative pb-10">
               <PopularCourse
                  topStyle="!mt-0"
                  navColor="bg-limon-color rounded-t-[14px] mb-8 h-[73px]"
                  arrowStyle="!text-black my-auto !text-[13px]"
                  roundedColor=" !border-black  !py-[8px] !px-[0px]"
                  msArrow="!me-11 left-0 absolute md:relative"
                  gapX={40}
                  pxCard={"px-10 !mt-[0px]"}
                  cardStyle={["!border-none", "!rounded-none"]}
                  //
                  title={
                     <div className=" flex gap-x-3.5 text-black mt-8 w-full absolute md:relative right-8">
                        <HiOutlineRocketLaunch className=" my-auto !font-bold text-5xl" />
                        <p className=" text-2xl md:text-[20px] my-auto ">دوره های مخصوص شما</p>
                     </div>
                  }
                  des=""
                  color=""
                  btnHref="/AllCourses"
               ></PopularCourse>
            </div>
         </div>
         <Footer />
         {showErrorToast && <Notification errorText={textErrorToast} isSuccessToast={successToast} succTxt={successTxt} />}
      </>
   );
}
