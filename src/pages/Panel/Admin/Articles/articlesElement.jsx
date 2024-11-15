import React, { useContext, useEffect, useState } from "react";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent, Checkbox, button } from "@material-tailwind/react";
import useFetch from "../../../../Hooks/useFetch";
import TableProducts from "../../Components/TableProducts/TableProducts";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { List, ListItem, ListItemSuffix, Card } from "@material-tailwind/react";
import { HiTrash } from "react-icons/hi2";
//
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import EditModal from "../../Components/EditModal/EditModal";
import useDelete from "../../../../Hooks/useDelete";
import Notif from "../../Components/Notif/Notif";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";
//
import Input from "../../../../Components/Form/Input";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import useForm from "../../../../Hooks/useForm";
import usePost from "../../../../Hooks/usePost";
import Editor from "../../../../Components/Form/Editor";
import { Link, useLocation } from "react-router-dom";
import { Check } from "@mui/icons-material";
//
export default function ArticlesElement({ isAddNewCmp }) {
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas("http://learnimoo.filedl.me:3000/articles", userDatas);
   };
   useEffect(() => {
      fetchData;
   }, []);
   const [courseCat, setCourseCat] = useState("-1");
   const [categories, setCategories] = useState([]);
   //
   useEffect(() => {
      fetchData();
      //
      fetch("http://learnimoo.filedl.me:3000/category")
         .then((res) => res.json())
         .then((allCat) => {
            setCategories(allCat);
         })
         .catch((err) => {});
   }, []);
   const [isdelete, setIsdelete] = useState(false);
   const [userId, setProductId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);

   //
   const { deletedata, deletepost, setDeletepost, error } = useDelete();
   function deleteModalSubmitAction() {
      deletedata(`http://learnimoo.filedl.me:3000/articles/${userId}`, userDatas);
      setIsdelete(false);
   }
   useEffect(() => {
      fetchData();
   }, [deletepost]);
   //
   const TABLE_HEAD = [`شناسه`, `عنوان مقاله`, `لینک`, `نویسنده`, `وضعیت`, ``, ``];
   //
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      title: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      description: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      shortName: { value: "", isValid: false, error: "لطفا ایمیل را به درستی وارد کنید" },
      body: { value: "", isValid: false, error: "رمز عبور باید حداقل 8 کاراکتر باشد" },
   });
   // const { postdata, postpost, setPostpost, errorrs } = usePost();
   //
   const [articleCover, setArticleCover] = useState({});
   const [articleBody, setArticleBody] = useState("");
   //
   const AddArticle = (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("title", inputs?.title.value);
      formData.append("description", inputs?.description.value);
      formData.append("cover", articleCover);
      formData.append("shortName", inputs?.shortName.value);
      formData.append("body", articleBody);
      formData.append("categoryID", courseCat);
      //
      fetch(`http://learnimoo.filedl.me:3000/articles`, {
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
            if (allValid || !data?.message) {
               ClearInputs();
            }
         });
   };
   //
   const DraftArticle = () => {
      let formData = new FormData();
      formData.append("title", inputs?.title.value);
      formData.append("description", inputs?.description.value);
      formData.append("cover", articleCover);
      formData.append("shortName", inputs?.shortName.value);
      formData.append("body", articleBody);
      formData.append("categoryID", courseCat);
      //
      fetch(`http://learnimoo.filedl.me:3000/articles/draft`, {
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
            if (allValid || !data?.message) {
               ClearInputs();
            }
         });
   };
   ///
   return (
      <>
         <div className=" grid grid-cols-3  px-20 pb-24">
            {isAddNewCmp && (
               <AddNewProduct title={"افزودن مقاله جدید"}>
                  <div className=" grid md:grid-cols-2 p-4 gap-x-20 cursor-pointer !text-gray-400">
                     <div className=" Name-Product relative space-y-2.5 h-[43px] my-[10px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="نام مقاله را وارد کنید"
                           element="input"
                           id="title"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-full "
                           config={{ max: 17, min: 5 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.title.value}
                        />
                        <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className="Price-Product relative  my-[10px] space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="لینک مقاله را وارد کنید"
                           element="input"
                           id="shortName"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-full"
                           type="text"
                           config={{ max: 30, min: 2 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.shortName.value}
                        />
                        <BsCurrencyDollar className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className="Price-Product col-span-2 relative  my-[10px] space-y-2.5 h-[150px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="چکیده"
                           element="textarea"
                           id="description"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-full"
                           type="text"
                           config={{ max: 936500, min: 3 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.description.value}
                        />
                        <BsCurrencyDollar className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className="Price-Product col-span-2 relative   my-[10px] space-y-2.5  rounded-lg ">
                        <Editor placeholder={"محتوای مقاله را وارد کنید..."} content={"محتوا"} articleBody={articleBody} setArticleBody={setArticleBody}></Editor>
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
                           element="input"
                           id="file"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-full"
                           type="file"
                           inputHandeler={inputHandeler}
                           onChange={(e) => setArticleCover(e.target.files[0])}
                        />
                        <BsBagCheck className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                  </div>
                  <div className=" flex justify-between px-6">
                     <div className=" my-auto text-white">
                        <span className=" danaBold"></span>
                     </div>
                     <div className=" flex gap-x-8">
                        <button className="search-btnd px-4 py-2.5 mt-28 h-[44px] text-black text-[18px] " onClick={AddArticle}>
                           <span className=" danaDemiBold my-auto">پیش نویس</span>
                        </button>
                        <button className="search-btnd px-4 py-2.5 mt-28 h-[44px] text-black text-[18px] " onClick={DraftArticle}>
                           <span className=" danaDemiBold my-auto">انتشار</span>
                        </button>
                     </div>
                  </div>
               </AddNewProduct>
            )}
            {/* ///// */}
            <TableProducts post={post} title={"لیست مقاله ها"}>
               {/* fetchData */}
               <table className="mt-10 w-full min-w-max table-auto text-right  ">
                  <thead>
                     <tr>
                        {TABLE_HEAD.map((head, id) => (
                           <th key={head} className="cursor-pointer  py-7">
                              <Typography variant="small" className="flex items-center justify-between gap-2 font-normal leading-none  text-gray-400">
                                 {head}
                              </Typography>
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {post.length > 0 &&
                        post.map((item, index) => {
                           const isLast = index + 1 === post.length - 1;
                           const classes = isLast ? " " : "";
                           //
                           return (
                              <tr key={item.title} className={` text-gray-200 text-right `} style={{ borderTop: "1px solid #424242" }}>
                                 <td className={classes}>
                                    <div className="flex items-center pe-44 ">
                                       <div className="flex flex-col">
                                          <Typography variant="small" className="font-normal">
                                             {index + 1}
                                          </Typography>
                                       </div>
                                    </div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex  ">
                                       {/* <div className=" h-6"></div> */}
                                       {item.title}
                                       <div className="scale-[3] absolute -right-28   rounded-full ">
                                          {item?.cover ? (
                                             <div className=" size-max flex ">
                                                {" "}
                                                <Avatar className=" scale-[0.6] " src={`http://localhost:3000/courses/covers/${item?.cover}`} alt={item.title} />
                                             </div>
                                          ) : (
                                             <FaUserCircle className=" me-3 scale-[1.1] mt-[1.5px] " />
                                          )}
                                       </div>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="flex flex-col">
                                       <Typography variant="small" className="font-normal">
                                          {item.shortName}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="flex flex-col">
                                       <Typography variant="small" className="font-normal">
                                          {item.creator.name}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="flex flex-col">
                                       <Typography variant="small" className="font-normal">
                                          {item.publish === 1 ? "منتشر شده" : "پیش نویس"}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="flex flex-col mx-auto w-max">
                                       <Typography variant="small" className="font-normal">
                                          {item.publish === 1 ? (
                                             <Check />
                                          ) : (
                                             <Link to={`draft?q=${item.shortName}`}>
                                                <button className="search-btnd text-black danaMedium px-3 py-[1px]">ادامه نوشتن</button>
                                             </Link>
                                          )}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td>
                                    <Popover placement="bottom-end" className=" ">
                                       <PopoverHandler>
                                          <IconButton variant="text">
                                             <BsThreeDotsVertical className="h-8 w-8 text-gray-200" />
                                          </IconButton>
                                       </PopoverHandler>
                                       <PopoverContent className=" bg-[#000000]   ">
                                          <Card className="  bg-[#000000] mx-auto ">
                                             <List className=" mx-auto ">
                                                <ListItem
                                                   onClick={() => {
                                                      setIsdelete(true), setProductId(item._id), setProductTitle(item.title);
                                                   }}
                                                   ripple={false}
                                                   className=" logout-act py-1 pr-1 pl-4 justify-center flex mx-auto"
                                                >
                                                   <span className=" me-3">DELETE</span>
                                                   <IconButton variant="text" className=" ">
                                                      <HiTrash color="white" />
                                                   </IconButton>
                                                </ListItem>
                                             </List>
                                          </Card>
                                       </PopoverContent>
                                    </Popover>
                                 </td>
                              </tr>
                           );
                        })}
                  </tbody>
               </table>
            </TableProducts>
            {isdelete && <DeleteModal action={"حذف"} question="آیا از حذف این مقاله اطمینان دارید؟" submitAction={deleteModalSubmitAction} setIsdelete={setIsdelete} />}
            {isdelete ? <Notif productTitle={productTitle} actionName="حذف" /> : ""}
         </div>
      </>
   );
}
