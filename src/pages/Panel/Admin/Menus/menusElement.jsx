import React, { useContext, useEffect, useState } from "react";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent, Checkbox, Menu } from "@material-tailwind/react";
import useFetch from "../../../../Hooks/useFetch";
import TableProducts from "../../Components/TableProducts/TableProducts";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";
import { List, ListItem, ListItemSuffix, Card, Collapse, Button, CardBody } from "@material-tailwind/react";
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
import { MdModeEdit } from "react-icons/md";
import EditModal from "../../Components/EditModal/EditModal";
import { FaCheck } from "react-icons/fa6";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import useEdit from "../../../../Hooks/useEdit";
// import "./Users.css";
export default function menusElement({ isAddNewCmp }) {
   const [parentMenu, setParentMenu] = useState("-1");
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas("http://localhost:3000/v1/menus/all", false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   const [isdelete, setIsdelete] = useState(false);
   const [userId, setUserId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);
   const [iseditemodal, setIseditemodal] = useState(false);
   //
   const { deletedata, deletepost, setDeletepost, error } = useDelete();
   function deleteModalSubmitAction() {
      deletedata(`http://localhost:3000/v1/menus/${userId}`, userDatas);
      setIsdelete(false);
   }
   useEffect(() => {
      fetchData();
   }, [deletepost]);
   //
   const [newTitle, setNewTitle] = useState("");
   const [newHref, setNewHref] = useState("");
   const { editedata, editepost, setEditepost, errorr } = useEdit();
   const editesubmitModalAction = (e) => {
      e.preventDefault();
      let updatedDatas = {
         title: newTitle,
         href: newHref,
         parent: undefined,
      };
      // console.log("data in submit func -->", updatedDatas);
      editedata(`http://localhost:3000/v1/menus/${userId}`, userDatas, updatedDatas);
      fetchData();
      setIseditemodal(false);
   };
   //
   const TABLE_HEAD = [`شناسه`, `نام منو`, `مقصد`, `زیر منو`, ``];
   //
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      title: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      href: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   //
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   useEffect(() => {
      fetchData();
   }, [postpost]);
   //    onChange={(e) => setSessionVideo(e.target.files[0])}
   const AddProducts = (e) => {
      e.preventDefault();
      let updatedDatas = {
         title: inputs?.title.value,
         href: inputs?.href.value,
         parent: parentMenu === "-1" ? undefined : parentMenu,
      };
      //
      postdata(`http://localhost:3000/v1/menus/`, updatedDatas, userDatas);
      fetchData();
      if (allValid || !postpost?.message) {
         ClearInputs();
      }
   };
   //
   useEffect(() => {
      fetchData();
      //
      fetch("http://localhost:3000/v1/courses")
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
                           placeholder="نام منو را وارد کنید..."
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
                           placeholder="مقصد منو را وارد کنید..."
                           element="input"
                           id="href"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           config={{ max: 19, min: 4 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.href.value}
                        />
                        {/* <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} /> */}
                     </div>
                     <div className="Price-Product relative gap-x-3 my-[30px] space-y-2.5 h-[43px] flex">
                        <p className=" my-auto">نام والد</p>
                        <select onChange={(e) => setParentMenu(e.target.value)} className=" bg-black " title="" id="" style={{ border: "1px solid #ffffff" }}>
                           <option value="-1">لطفا والد مد نظر را انتخاب کنید</option>
                           {post.map((item) => (
                              <>{item.parent === undefined && <option Value={item?._id}>{item?.title}</option>}</>
                           ))}
                        </select>
                     </div>
                  </div>
                  <div className=" flex justify-between px-6">
                     <div className=" my-auto text-white"></div>
                     <button className="search-btnd my-auto px-4 py-2.5 text-black text-[18px] " onClick={AddProducts}>
                        <span className=" danaDemiBold">افزودن</span>
                     </button>
                  </div>
               </AddNewProduct>
            )}
            {/* ///// */}
            <TableProducts post={post} title={"لیست منو ها"}>
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
                                    <div className=" flex ">{item.href}</div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex ">{item?.parent ? item?.parent?.title : <FaCheck />}</div>
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
                                                <ListItem
                                                   ripple={false}
                                                   className=" edit-act py-1 pr-1 pl-4  justify-center flex mx-auto"
                                                   onClick={() => {
                                                      setIseditemodal(true), setUserId(item._id), setProductTitle(item.title);
                                                      //
                                                      setNewTitle(item.title);
                                                      setNewHref(item.href);
                                                   }}
                                                >
                                                   <span className=" me-3">EDIT</span>
                                                   <IconButton variant="text">
                                                      <MdModeEdit color="white" />
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
            {iseditemodal && (
               <EditModal>
                  <div className="wrapper-modal danaMedium text-[30px]">
                     <Dialog
                        className="danaMedium text-[30px]"
                        open={open}
                        PaperProps={{
                           component: "form",
                           onSubmit: (event) => {
                              event.preventDefault();
                              const formData = new FormData(event.currentTarget);
                              const formJson = Object.fromEntries(formData.entries());
                           },
                        }}
                     >
                        <DialogTitle>ثبت اطلاعات جدید</DialogTitle>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="title"
                              name="title"
                              label="نام منو جدید "
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newTitle}
                              onChange={(e) => setNewTitle(e.target.value)}
                           />
                        </DialogContent>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="href"
                              name="href"
                              label="مقصد منو جدید"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newHref}
                              onChange={(e) => setNewHref(e.target.value)}
                           />
                        </DialogContent>
                        {/* <select onChange={(e) => setCourseCat(e.target.value)} className=" " name="categoryID" id="categoryID" style={{ border: "1px solid #000000" }}>
                           <option value="-1">لطفا دسته بندی را انتخاب کنید</option>
                           {categories.map((item) => {
                              return <option Value={item._id}>{item.title}</option>;
                           })}
                        </select> */}
                        <DialogActions>
                           <Button onClick={() => setIseditemodal(false)}>لغو</Button>
                           <Button onClick={editesubmitModalAction}>ویرایش</Button>
                        </DialogActions>
                     </Dialog>
                  </div>
               </EditModal>
            )}
            {isdelete && <DeleteModal action={"حذف"} question="آیا از حذف این کاربر اطمینان دارید؟" submitAction={deleteModalSubmitAction} setIsdelete={setIsdelete} />}
            {isdelete ? <Notif productTitle={productTitle} actionName="حذف" /> : ""}
         </div>
      </>
   );
}
