import React, { useContext, useEffect, useState } from "react";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent, Checkbox } from "@material-tailwind/react";
import useFetch from "../../../../Hooks/useFetch";
import TableProducts from "../../Components/TableProducts/TableProducts";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { List, ListItem, ListItemSuffix, Card } from "@material-tailwind/react";
import { HiTrash } from "react-icons/hi2";
import { MdModeEdit, MdOutlineEmail } from "react-icons/md";
import { FaBan } from "react-icons/fa6";
//
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { DialogContentText, TextField } from "@mui/material";
import useEdit from "../../../../Hooks/useEdit";
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
//
// import "./Users.css";

export default function CategoryElement({ isAddNewCmp }) {
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}category`, userDatas);
   };

   useEffect(() => {
      fetchData();
   }, []);

   const [isdelete, setIsdelete] = useState(false);
   const [iseditemodal, setIseditemodal] = useState(false);
   const [userId, setProductId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);
   //
   const [newName, setNewName] = useState();
   const [newCatName, setNewCatName] = useState();
   //
   const { deletedata, deletepost, setDeletepost, error } = useDelete();
   function deleteModalSubmitAction() {
      deletedata(`${DOMAIN}category/${userId}`, userDatas);
      setIsdelete(false);
   }
   useEffect(() => {
      fetchData();
   }, [deletepost]);
   const { editedata, editepost, setEditepost, errorr } = useEdit();
   const editesubmitModalAction = (e) => {
      const updatedDatas = {
         title: newCatName,
         name: newName,
      };
      // console.log("data in submit func -->", updatedDatas);
      editedata(`${DOMAIN}category/${userId}`, userDatas, updatedDatas);
      setIseditemodal(false);
   };
   //
   useEffect(() => {
      fetchData();
   }, [editepost]);
   //
   const TABLE_HEAD = [`شناسه`, `نام دسته بندی`, ``];

   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      title: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      name: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   //
   useEffect(() => {
      fetchData();
   }, [postpost]);

   const AddProducts = (e) => {
      e.preventDefault();
      const newUserData = {
         title: inputs?.title.value,
         name: inputs?.name.value,
      };
      //
      postdata(`${DOMAIN}category`, newUserData, userDatas);
      if (allValid || !postpost?.message) {
         ClearInputs();
      }
   };
   //

   //
   return (
      <>
         <div className=" grid grid-cols-3  px-20 pb-24">
            {isAddNewCmp && (
               <AddNewProduct title={"افزودن دسته بندی جدید"}>
                  <div className=" grid md:grid-cols-2 p-4 gap-x-20 cursor-pointer !text-gray-400">
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="نام دسته بندی را وارد کنید..."
                           element="input"
                           id="title"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           config={{ max: 17, min: 5 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.title.value}
                        />
                        <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="نام کوتاه را وارد کنید..."
                           element="input"
                           id="name"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           config={{ max: 17, min: 5 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.name.value}
                        />
                        <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                  </div>
                  <div className=" flex justify-between px-6">
                     <div className=" my-auto text-white ">
                        <span className=" danaBold"></span>
                     </div>
                     <button className="search-btnd my-auto px-4 py-2.5 text-black text-[18px] " onClick={AddProducts}>
                        <span className=" danaDemiBold">افزودن</span>
                     </button>
                  </div>
               </AddNewProduct>
            )}

            {/* ///// */}
            <TableProducts post={post} title={"لیست دسته بندی ها"}>
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
                                                      setIsdelete(true), setProductId(item._id), setProductTitle(item.name);
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
                                                      setIseditemodal(true), setProductId(item._id), setProductTitle(item.name);
                                                      //
                                                      setNewCatName(item.title);
                                                      setNewName(item.name);
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
                        className="danaMedium text-[30px] text-black"
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
                        <DialogContent className=" !text-black ">
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              className="nbv"
                              autoFocus
                              required
                              margin="dense"
                              id="username"
                              name="username"
                              label="نام کوتاه دسته بندی"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newName}
                              onChange={(e) => setNewName(e.target.value)}
                           />
                        </DialogContent>
                        <DialogContent className=" !text-black">
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              className=" !text-black"
                              autoFocus
                              required
                              margin="dense"
                              id="name"
                              name="name"
                              label="نام دسته بندی"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newCatName}
                              onChange={(e) => setNewCatName(e.target.value)}
                           />
                        </DialogContent>
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
