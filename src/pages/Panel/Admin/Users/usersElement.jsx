import React, { useContext, useEffect, useState } from "react";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent, Checkbox } from "@material-tailwind/react";
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
import "./Users.css";
export default function UsersElement({ isAddNewCmp, post, fetchData, titleHdr }) {
   const localStorageBanId = JSON.parse(localStorage.getItem("banItemID"));
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const [isBan, setIsBan] = useState(false);
   const [isdelete, setIsdelete] = useState(false);
   const [iseditemodal, setIseditemodal] = useState(false);
   const [userId, setUserId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);
   //
   const [newUserName, setNewUserName] = useState();
   const [newName, setNewName] = useState();
   const [newEmail, setNewEmail] = useState();
   const [newPassword, setNewPassword] = useState();
   const [newPhone, setNewPhone] = useState();
   //
   const { deletedata, deletepost, setDeletepost, error } = useDelete();
   function deleteModalSubmitAction() {
      deletedata(`${DOMAIN}users/${userId}`, userDatas);
      setIsdelete(false);
   }
   useEffect(() => {
      fetchData();
   }, [deletepost]);
   const { editedata, editepost, setEditepost, errorr } = useEdit();
   const [banItems, setBanItems] = useState([]);
   function banModalSubmitAction() {
      editedata(`${DOMAIN}users/ban/${userId}`, userDatas, false);
      setIsBan(false);
      let mainBanItem = banItems.some((item) => item == userId);
      if (!mainBanItem) {
         setBanItems((prevState) => [...prevState, userId]);
      }
   }
   useEffect(() => {
      localStorage.setItem("banItemID", JSON.stringify(banItems));
   }, [banItems]);

   useEffect(() => {
      setBanItems(localStorageBanId);
   }, []);

   const editesubmitModalAction = (e) => {
      const updatedDatas = {
         username: newUserName,
         name: newName,
         email: newEmail,
         password: newPassword,
         phone: newPhone,
      };
      // console.log("data in submit func -->", updatedDatas);
      editedata(`${DOMAIN}users`, userDatas, updatedDatas);
      setIseditemodal(false);
      fetchData();
   };
   //
   const TABLE_HEAD = ["شناسه", "نام و نام خانوادگی", "شماره", "ایمیل", "نقش"];
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      name: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      username: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      phone: { value: "", isValid: false, error: "لطفا شماره تلفن را به درستی وارد کنید" },
      email: { value: "", isValid: false, error: "لطفا ایمیل را به درستی وارد کنید" },
      password: { value: "", isValid: false, error: "رمز عبور باید حداقل 8 کاراکتر باشد" },
   });
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   //
   useEffect(() => {
      fetchData();
   }, [postpost]);

   const AddProducts = (e) => {
      e.preventDefault();
      // console.log(inputs);
      const newUserData = {
         name: inputs?.name.value,
         username: inputs?.username.value,
         email: inputs?.email.value,
         password: inputs?.password.value,
         confirmPassword: inputs?.password.value,
         phone: inputs?.phone.value,
      };
      //
      postdata(`${DOMAIN}auth/register`, newUserData, false);

      if (allValid || !postpost?.message) {
         ClearInputs();
      }
   };
   //
   const [userRole, setUserRole] = useState(false);
   const ChangeUserRole = (userId) => {
      const newUserRole = {
         id: userId,
         role: userRole ? "USER" : "ADMIN",
      };
      editedata(`${DOMAIN}users/role`, userDatas, newUserRole);
      fetchData();
   };
   useEffect(() => {
      fetchData();
   }, [editepost]);
   //
   return (
      <>
         <div className=" grid grid-cols-3  md:px-20 pb-24">
            {isAddNewCmp && (
               <AddNewProduct title={"افزودن کاربر جدید"}>
                  <div className=" grid md:grid-cols-2 p-4 gap-x-20 cursor-pointer !text-gray-400">
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="نام و نام خانوادگی کاربر را وارد کنید"
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
                     <div className="Stock-Product   relative  space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="ایمیل کاربر را وارد کنید"
                           element="input"
                           id="email"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-max"
                           type="text"
                           config={{ email: inputs?.email.value }}
                           inputHandeler={inputHandeler}
                           value={inputs?.email.value}
                        />
                        <MdOutlineEmail className="icon-products absolute left-4 top-3 " style={{ fontSize: 17 }} />
                     </div>
                     <div className="Price-Product relative  my-[10px] space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="شماره تلفن کاربر را وارد کنید"
                           element="input"
                           id="phone"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-max"
                           type="number"
                           config={{ phone: 11 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.phone.value}
                        />
                        <BsCurrencyDollar className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className="Popularity-Product relative  my-[10px] space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        {" "}
                        <Input
                           placeholder="نام کاربری کاربر را وارد کنید"
                           element="input"
                           id="username"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-max"
                           type="text"
                           config={{ max: 17, min: 3 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.username.value}
                        />
                        <BsBagCheck className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className="Sales-Product  relative  space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="رمز عبور کاربر را وارد کنید"
                           element="input"
                           id="password"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-max"
                           type="text"
                           config={{ min: 7 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.password.value}
                        />
                        <BsBagCheck className=" icon-products absolute left-4 top-3 " style={{ fontSize: 17 }} />
                     </div>
                  </div>
                  <div className=" flex justify-between px-6">
                     <div className=" my-auto text-white ">
                        <span className=" danaBold">جنسیت</span>
                        <div className="ChekBox flex gap-x-5">
                           <div className=" flex">
                              <span className=" my-auto">مرد</span>
                              <Checkbox
                                 color="green"
                                 ripple={false}
                                 className=" my-auto h-7 w-7 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                              />
                           </div>
                           <div className=" flex">
                              <span className=" my-auto">زن</span>
                              <Checkbox
                                 color="green"
                                 ripple={false}
                                 className=" my-auto h-7 w-7 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                              />
                           </div>
                           <div className=" flex">
                              <span className=" my-auto">سایر</span>
                              <Checkbox
                                 color="green"
                                 ripple={false}
                                 className=" my-auto h-7 w-7 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                              />
                           </div>
                        </div>
                     </div>
                     <button className="search-btnd my-auto px-4 py-2.5 text-black text-[18px] " onClick={AddProducts}>
                        <span className=" danaDemiBold">ثبت محصول</span>
                     </button>
                  </div>
               </AddNewProduct>
            )}
            {/* ///// */}
            <TableProducts post={post} title={titleHdr}>
               {/* fetchData */}
               <table className="mt-10 w-full min-w-max table-auto text-right ">
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
                     {/* {console.log(post?.lastUsers)} */}
                     {post?.length > 0 &&
                        post?.map((item, index) => {
                           const isLast = index + 1 === post?.lastUsers?.length - 1;
                           const classes = isLast ? " " : "";
                           return (
                              <tr key={item?.name} className={`${banItems.includes(item?._id) && "opacity-20"} text-gray-200 text-right `} style={{ borderTop: "1px solid #424242" }}>
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
                                       {item?.name}
                                       <div className="scale-[3] absolute -right-28   rounded-full ">
                                          {item?.profile ? (
                                             <div className=" size-max flex ">
                                                {" "}
                                                <Avatar className=" scale-[0.6] " src={item?.profile} alt={item.title} />
                                             </div>
                                          ) : (
                                             <FaUserCircle className=" me-3 scale-[1.1] mt-[1.5px] " />
                                          )}
                                       </div>
                                       {/* <span className=" my-auto">{props.price}</span> */}
                                    </div>
                                 </td>

                                 <td className={classes}>
                                    <div className="flex flex-col">
                                       <Typography variant="small" className="font-normal">
                                          {item?.phone}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="flex flex-col">
                                       <Typography variant="small" className="font-normal">
                                          {item?.email}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="flex flex-col">
                                       <Typography variant="small" className="font-normal">
                                          {item?.role}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className=" py-14 relative ">
                                    <div
                                       className=" flex "
                                       onClick={() => {
                                          ChangeUserRole(item._id), setUserRole((prev) => !prev);
                                       }}
                                    >
                                       <Button className=" search-btnd danaDemiBold !text-2xl !rounded-3xl">
                                          <span className=" text-black danaDemiBold font-bold">تغییر نقش</span>
                                       </Button>
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
                                                      setIseditemodal(true), setUserId(item._id), setProductTitle(item.name);
                                                      //
                                                      setNewUserName(item.username);
                                                      setNewName(item.name);
                                                      setNewEmail(item.email);
                                                      setNewPassword(item.password);
                                                      setNewPhone(item.phone);
                                                   }}
                                                >
                                                   <span className=" me-3">EDIT</span>
                                                   <IconButton variant="text">
                                                      <MdModeEdit color="white" />
                                                   </IconButton>
                                                </ListItem>
                                                <ListItem
                                                   ripple={false}
                                                   className=" ban-act py-1 pr-1 pl-4  justify-center flex mx-auto"
                                                   onClick={() => {
                                                      setIsBan(true), setUserId(item._id), setProductTitle(item.name);
                                                   }}
                                                >
                                                   <span className=" me-3">BAN</span>
                                                   <IconButton className="" variant="text">
                                                      <FaBan color="white" />
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
            {isBan && <DeleteModal action={"انسداد"} question="آیا از مسدود کردن این کاربر اطمینان دارید؟" submitAction={banModalSubmitAction} setIsdelete={setIsBan} />}
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
                              id="username"
                              name="username"
                              label="نام کاربری"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newUserName}
                              onChange={(e) => setNewUserName(e.target.value)}
                           />
                        </DialogContent>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="name"
                              name="name"
                              label="نام و نام خانوادگی"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newName}
                              onChange={(e) => setNewName(e.target.value)}
                           />
                        </DialogContent>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="email"
                              name="email"
                              label="ایمیل"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newEmail}
                              onChange={(e) => setNewEmail(e.target.value)}
                           />
                        </DialogContent>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="password"
                              name="password"
                              label="رمز عبور"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                           />
                        </DialogContent>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="phone"
                              name="phone"
                              label="شماره موبایل"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newPhone}
                              onChange={(e) => setNewPhone(e.target.value)}
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
            {isdelete ? <Notif productTitle={productTitle} actionName="حذف" /> : ""}
            {isBan ? <Notif productTitle={productTitle} actionName="بن" /> : ""}
         </div>
      </>
   );
}
