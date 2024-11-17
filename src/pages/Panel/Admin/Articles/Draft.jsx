import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../../../Hooks/useFetch";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import Editor from "../../../../Components/Form/Editor";
import { useLocation } from "react-router-dom";
import { Context } from "../../../../contexts/Context";
//
export default function Draft() {
   const { DOMAIN } = useContext(Context);
   let location = useLocation();
   let filterDraftArticle = location.search.split("=")[1];
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}articles/${filterDraftArticle}`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, [filterDraftArticle]);
   //
   const [draftTitle, setDraftTitle] = useState("");
   const [draftDes, setDraftDes] = useState("");
   const [draftCover, setDraftCover] = useState();
   const [draftShortName, setDraftShortName] = useState("");
   const [draftBody, setDraftBody] = useState("");
   const [draftCategoryID, setDraftCategoryID] = useState("");
   useEffect(() => {
      // setBanItems((prevState) => [...prevState, userId]);
      setDraftTitle(post.title);
      setDraftDes(post.description);
      setDraftCover(post.cover);
      setDraftShortName(post.shortName);
      setDraftBody(post?.body);
      setDraftCategoryID(post?.categoryID);
   }, [post]);
   //
   const [courseCat, setCourseCat] = useState("-1");
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetchData();
      //
      fetch(`${DOMAIN}category`)
         .then((res) => res.json())
         .then((allCat) => {
            setCategories(allCat);
         })
         .catch((err) => {});
   }, []);

   const AddArticle = () => {
      let formData = new FormData();
      formData.append("title", draftTitle);
      formData.append("description", draftDes);
      formData.append("cover", draftCover);
      formData.append("shortName", draftShortName);
      formData.append("body", draftBody);
      formData.append("categoryID", courseCat);
      //
      fetch(`${DOMAIN}articles`, {
         method: "POST",
         headers: {
            Authorization: `Bearer ${userDatas.token}`,
         },
         body: formData,
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            fetchData();
         });
   };
   //
   const DraftArticle = () => {
      let formData = new FormData();
      formData.append("title", draftTitle);
      formData.append("description", draftDes);
      formData.append("cover", draftCover);
      formData.append("shortName", draftShortName);
      formData.append("body", draftBody);
      formData.append("categoryID", courseCat);
      //
      fetch(`${DOMAIN}articles/draft`, {
         method: "POST",
         headers: {
            Authorization: `Bearer ${userDatas.token}`,
         },
         body: formData,
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            fetchData();
         });
   };
   ///
   return (
      <>
         <div className=" px-28 py-8 pb-32">
            <div className=" grid md:grid-cols-2 p-4 gap-x-20 cursor-pointer !text-gray-400">
               <div className=" Name-Product relative space-y-2.5 h-[43px] my-[10px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                  <input
                     placeholder="نام مقاله را وارد کنید"
                     type="text"
                     className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-full pe-12"
                     onChange={(e) => setDraftTitle(e.target.value)}
                     value={draftTitle}
                  />
                  <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
               </div>
               <div className="Price-Product relative  my-[10px] space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                  <input
                     placeholder="لینک مقاله را وارد کنید"
                     className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-full pe-12"
                     type="text"
                     onChange={(e) => setDraftShortName(e.target.value)}
                     value={draftShortName}
                  />
                  <BsCurrencyDollar className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
               </div>
               <div className="Price-Product col-span-2 relative  my-[10px] space-y-2.5 h-[150px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                  <input
                     value={draftDes}
                     placeholder="چکیده"
                     className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-full pe-12"
                     type="text"
                     onChange={(e) => setDraftDes(e.target.value)}
                  />
                  <BsCurrencyDollar className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
               </div>
               <div className="Price-Product col-span-2 relative   my-[10px] space-y-2.5  rounded-lg ">
                  <Editor placeholder={"محتوای مقاله را وارد کنید..."} content={"محتوا"} articleBody={draftBody || ""} setArticleBody={setDraftBody}></Editor>
               </div>
               <div className="Price-Product relative gap-x-3 my-[30px] space-y-2.5 h-[43px] flex">
                  <p className=" my-auto">دسته بندی مقاله</p>
                  <select onChange={(e) => setCourseCat(e.target.value)} className=" bg-black " title="" id="" style={{ border: "1px solid #ffffff" }}>
                     <option value="-1">لطفا دسته بندی را انتخاب کنید</option>
                     {categories.map((item) => {
                        return <option Value={item._id}>{item.title}</option>;
                     })}
                  </select>
               </div>
               <div className="Popularity-Product relative  my-[30px] space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                  {" "}
                  <input
                     placeholder="عکس مقاله مورد نظر را وارد کنید"
                     className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-full pe-12"
                     type="file"
                     // value="تامنیل-2-768x403.png"
                     onChange={(e) => setDraftCover(e.target.files[0])}
                  />
                  <BsBagCheck className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
               </div>
            </div>
            <div className=" flex justify-between px-6 ">
               <div className=" my-auto text-white">
                  <span className=" danaBold"></span>
               </div>
               <div className=" flex gap-x-8">
                  <button className="search-btnd px-4 py-2.5 mt-10 h-[44px] text-black text-[18px] " onClick={AddArticle}>
                     <span className=" danaDemiBold my-auto">پیش نویس</span>
                  </button>
                  <button className="search-btnd px-4 py-2.5 mt-10 h-[44px] text-black text-[18px] " onClick={DraftArticle}>
                     <span className=" danaDemiBold my-auto">انتشار</span>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
