import React, { useContext, useEffect, useState } from "react";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent, Checkbox } from "@material-tailwind/react";
import useFetch from "../../../../Hooks/useFetch";
import TableProducts from "../../Components/TableProducts/TableProducts";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";
import { List, ListItem, ListItemSuffix, Card } from "@material-tailwind/react";
import { HiTrash } from "react-icons/hi2";
//
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import useDelete from "../../../../Hooks/useDelete";
import Notif from "../../Components/Notif/Notif";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";
//
import Input from "../../../../Components/Form/Input";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import useForm from "../../../../Hooks/useForm";
import usePost from "../../../../Hooks/usePost";
// import "./Users.css";
export default function SessionsElement({ isAddNewCmp }) {
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas("http://learnimoo.filedl.me:3000/courses/sessions", userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   const [isdelete, setIsdelete] = useState(false);
   const [userId, setUserId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);
   //
   const { deletedata, deletepost, setDeletepost, error } = useDelete();
   function deleteModalSubmitAction() {
      deletedata(`http://learnimoo.filedl.me:3000/courses/sessions/${userId}`, userDatas);
      setIsdelete(false);
   }
   useEffect(() => {
      fetchData();
   }, [deletepost]);
   const TABLE_HEAD = [`شناسه`, `نام جلسه`, `مدت زمان`, `دوره`, ``];
   //
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      title: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      time: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   useEffect(() => {
      fetchData();
   }, [postpost]);
   //
   const [sessionVideo, setSessionVideo] = useState({});
   const [isSsessionFree, setIsSsessionFree] = useState(1);
   //    onChange={(e) => setSessionVideo(e.target.files[0])}
   const AddProducts = (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("title", inputs?.title.value);
      formData.append("time", parseInt(inputs?.time.value));
      formData.append("video", sessionVideo);
      formData.append("free", isSsessionFree);
      //
      fetch(`http://learnimoo.filedl.me:3000/courses/${sessionCourse}/sessions`, {
         method: "POST",
         headers: {
            Authorization: `Bearer ${userDatas.token}`,
         },
         body: formData,
      })
         .then((res) => res.json())
         .then((data) => {
            // console.log(data);
            fetchData();
            if (allValid || !data?.message) {
               ClearInputs();
            }
         });
   };
   //
   const [courses, setCourses] = useState([]);
   const [sessionCourse, setSessionCourse] = useState("-1");
   useEffect(() => {
      fetchData();
      //
      fetch("http://learnimoo.filedl.me:3000/courses")
         .then((res) => res.json())
         .then((allCat) => {
            setCourses(allCat);
         })
         .catch((err) => {});
   }, []);
   /////
   return (
      <>
         <div className=" grid grid-cols-3  px-20 pb-24">
            {isAddNewCmp && (
               <AddNewProduct title={"افزودن قسمت جدید"}>
                  <div className=" grid md:grid-cols-2 p-4 gap-x-20 cursor-pointer !text-gray-400">
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="نام جلسه را وارد کنید..."
                           element="input"
                           id="title"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           config={{ max: 28, min: 4 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.title.value}
                        />
                        <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="مدت زمان جلسه را وارد کنید..."
                           element="input"
                           id="time"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           config={{ max: 19, min: 4 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.time.value}
                        />
                        {/* <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} /> */}
                     </div>
                     <div className="Price-Product relative gap-x-3 my-[30px] space-y-2.5 h-[43px] flex">
                        <p className=" my-auto">نام دوره</p>
                        <select onChange={(e) => setSessionCourse(e.target.value)} className=" bg-black " title="" id="" style={{ border: "1px solid #ffffff" }}>
                           <option value="-1">لطفا دوره مد نظر را انتخاب کنید</option>
                           {courses.map((item) => {
                              return <option Value={item._id}>{item.name}</option>;
                           })}
                        </select>
                     </div>
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg my-11" style={{ borderBottom: "1px solid #ffffff" }}>
                        <input
                           placeholder="ویدیو جلسه را آپلود کنید..."
                           element="input"
                           type="file"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           onChange={(e) => setSessionVideo(e.target.files[0])}
                        />
                        {/* <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} /> */}
                     </div>
                  </div>
                  <div className=" flex justify-between px-6">
                     <div className=" my-auto text-white">
                        <span className=" danaBold">وضعیت جلسه</span>
                        <div className="ChekBox flex gap-x-5 ">
                           <div className=" flex">
                              <span className=" my-auto">رایگان</span>
                              <input
                                 onInput={(e) => setIsSsessionFree(e.target.value)}
                                 value={"1"}
                                 type="radio"
                                 name="condition"
                                 color="green"
                                 className=" cursor-pointer my-auto h-7 w-7 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                              />
                           </div>
                           <div className=" flex">
                              <span className=" my-auto">غیررایگان</span>
                              <input
                                 onInput={(e) => setIsSsessionFree(e.target.value)}
                                 value={"0"}
                                 type="radio"
                                 name="condition"
                                 color="green"
                                 className=" cursor-pointer my-auto h-7 w-7 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                              />
                           </div>
                        </div>
                     </div>
                     <button className="search-btnd my-auto px-4 py-2.5 text-black text-[18px] " onClick={AddProducts}>
                        <span className=" danaDemiBold">افزودن</span>
                     </button>
                  </div>
               </AddNewProduct>
            )}
            {/* ///// */}
            <TableProducts post={post} title={"لیست جلسات"}>
               {/* fetchData */}
               <table className="mt-10 w-full min-w-max table-auto text-right  ">
                  <thead>
                     <tr>
                        {TABLE_HEAD.map((head, id) => (
                           <th key={head} className="cursor-pointer  py-7">
                              <Typography variant="small" className="flex items-center justify-between gap-2 font-normal leading-none  text-gray-400  text-center">
                                 {head}
                              </Typography>
                           </th>
                        ))}
                        c
                     </tr>
                  </thead>
                  <tbody>
                     {post.length > 0 &&
                        post.map((item, index) => {
                           // console.log(item);
                           const isLast = index + 1 === post.length - 1;
                           const classes = isLast ? " " : "";
                           return (
                              <tr key={item.title} className={` text-gray-200 text-center `} style={{ borderTop: "1px solid #424242" }}>
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
                                    <div className=" flex ">{item.title}</div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex ">{item.time}</div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex ">{item?.course?.name}</div>
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
                                                      setIsdelete(true), setUserId(item._id), setProductTitle(item.name);
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
            {isdelete && <DeleteModal action={"حذف"} question="آیا از حذف این کاربر اطمینان دارید؟" submitAction={deleteModalSubmitAction} setIsdelete={setIsdelete} />}
            {isdelete ? <Notif productTitle={productTitle} actionName="حذف" /> : ""}
         </div>
      </>
   );
}
