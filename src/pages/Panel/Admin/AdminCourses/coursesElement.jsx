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
//
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { DialogContentText, TextField } from "@mui/material";
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
import { Context } from "../../../../contexts/Context";
//
// import "./Users.css";
export default function CoursesElement({ isAddNewCmp }) {
   const { DOMAIN } = useContext(Context);
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}courses`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   const [courseCat, setCourseCat] = useState("-1");
   const [categories, setCategories] = useState([]);
   //

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

   const [isdelete, setIsdelete] = useState(false);
   const [iseditemodal, setIseditemodal] = useState(false);
   const [userId, setUserId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);

   //
   const { deletedata, deletepost, setDeletepost, error } = useDelete();
   function deleteModalSubmitAction() {
      deletedata(`${DOMAIN}courses/${userId}`, userDatas);
      setIsdelete(false);
   }
   useEffect(() => {
      fetchData();
   }, [deletepost]);
   //
   const [newName, setNewName] = useState();
   const [newDescription, setNewDescription] = useState();
   const [newShortName, setNewShortName] = useState();
   const [newPrice, setNewPrice] = useState();
   //
   const editesubmitModalAction = (e) => {
      let formData = new FormData();
      formData.append("name", newName);
      formData.append("description", newDescription);
      formData.append("cover", courseCover);
      formData.append("shortName", newShortName);
      formData.append("price", newPrice);
      formData.append("status", "start");
      formData.append("categoryID", courseCat);
      // console.log("data in submit func -->", updatedDatas);
      fetch(`${DOMAIN}courses/${userId}`, {
         method: "PUT",
         headers: {
            Authorization: `Bearer ${userDatas.token}`,
         },
         body: formData,
      })
         .then((res) => res.json())
         .then((data) => {
            fetchData();
            fetchData();
         });
      setIseditemodal(false);
   };

   //
   const TABLE_HEAD = [`شناسه`, `نام دوره`, `قیمت`, `مدرس`, `دسته بندی`, `لینک`, `وضعیت`, ``];
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      name: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      description: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      shortName: { value: "", isValid: false, error: "لطفا ایمیل را به درستی وارد کنید" },
      price: { value: "", isValid: false, error: "رمز عبور باید حداقل 8 کاراکتر باشد" },
   });
   // const { postdata, postpost, setPostpost, errorrs } = usePost();
   //
   const [courseCover, setCourseCover] = useState({});
   //
   const AddProducts = (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("name", inputs?.name.value);
      formData.append("description", inputs?.description.value);
      formData.append("cover", courseCover);
      formData.append("shortName", inputs?.shortName.value);
      formData.append("price", inputs?.price.value);
      formData.append("status", "start");
      formData.append("categoryID", courseCat);
      //

      fetch(`${DOMAIN}courses`, {
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
   //
   return (
      <>
         <div className="   md:px-20 pb-24">
            {isAddNewCmp && (
               <AddNewProduct title={"افزودن دوره جدید"}>
                  <div className=" space-y-14 md:space-y-10 md:grid md:grid-cols-2 p-4 md:gap-x-20 cursor-pointer !text-gray-400">
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="نام دوره را وارد کنید"
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
                     <div className="Name-Product relative md:!mt-0 space-y-2.5 h-[43px] rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="قیمت دوره را وارد کنید"
                           element="input"
                           id="price"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-max"
                           type="text"
                           // config={{ email: inputs?.email.value }}
                           inputHandeler={inputHandeler}
                           value={inputs?.price.value}
                        />
                        <MdOutlineEmail className="icon-products absolute left-4 top-3 " style={{ fontSize: 17 }} />
                     </div>
                     <div className="Price-Product relative  my-[10px] space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="لینک دوره را وارد کنید"
                           element="input"
                           id="shortName"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-max"
                           type="text"
                           config={{ max: 30, min: 2 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.shortName.value}
                        />
                        <BsCurrencyDollar className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className="Price-Product relative  my-[10px] space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="توضیحات دوره را وارد کنید"
                           element="input"
                           id="description"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-max"
                           type="text"
                           config={{ max: 500, min: 3 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.description.value}
                        />
                        <BsCurrencyDollar className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className="Price-Product relative gap-x-3 my-[10px] space-y-2.5 h-[43px] flex">
                        <p className=" my-auto">دسته بندی دوره</p>
                        <select onChange={(e) => setCourseCat(e.target.value)} className=" bg-black " name="" id="" style={{ border: "1px solid #ffffff" }}>
                           <option value="-1">لطفا دسته بندی را انتخاب کنید</option>
                           {categories.map((item) => {
                              return <option Value={item._id}>{item.title}</option>;
                           })}
                        </select>
                     </div>
                     <div className="Popularity-Product relative  md:my-[10px] space-y-2.5 h-[43px]  rounded-lg" style={{ borderBottom: "1px solid #ffffff" }}>
                        {" "}
                        <input
                           placeholder="عکس دوره مورد نظر را وارد کنید"
                           element="input"
                           id="file"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black h-max"
                           type="file"
                           inputHandeler={inputHandeler}
                           onChange={(e) => setCourseCover(e.target.files[0])}
                        />
                        <BsBagCheck className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                  </div>
                  <div className=" flex justify-between px-6">
                     <div className=" my-auto text-white">
                        <span className=" danaBold"></span>
                     </div>
                     <button className="search-btnd px-4 py-2.5 mt-28 h-[44px] text-black text-[18px] " onClick={AddProducts}>
                        <span className=" danaDemiBold my-auto">ثبت محصول</span>
                     </button>
                  </div>
               </AddNewProduct>
            )}
            {/* ///// */}
            <TableProducts post={post} title={"لیست دوره ها"}>
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
                                       {item.name}
                                       <div className="scale-[3] absolute -right-28   rounded-full ">
                                          {item?.cover ? (
                                             <div className=" size-max flex ">
                                                {" "}
                                                <Avatar className=" scale-[0.6] " src={`https://learnimo.liara.run/courses/covers/${item?.cover}`} alt={item.name} />
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
                                          {item.price === 0 ? "رایگان" : item.price.toLocaleString()}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="flex flex-col">
                                       <Typography variant="small" className="font-normal">
                                          {item.creator}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="flex flex-col">
                                       <Typography variant="small" className="font-normal">
                                          {item?.categoryID?.title}
                                       </Typography>
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
                                    <div className="w-max">
                                       <Chip
                                          variant="ghost"
                                          className={` text-[15px] rounded-full px-4 py-2  danaMedium font-thin ${
                                             item.isComplete ? "text-amber-400 bg-amber-500/15" : "text-[#92fe9d] bg-green-300/15 "
                                          }`}
                                          value={item.isComplete ? "تکمیل شده" : "در حال برگزاری"}
                                       />
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
                                                      setNewName(item.name);
                                                      setNewDescription(item.description);
                                                      setNewShortName(item.shortName);
                                                      setNewPrice(item.price);
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
                              id="name"
                              name="name"
                              label="نام دوره جدید "
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
                              id="description"
                              name="description"
                              label="توضیحات"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newDescription}
                              onChange={(e) => setNewDescription(e.target.value)}
                           />
                        </DialogContent>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <input
                              autoFocus
                              required
                              element="input"
                              margin="dense"
                              id="file"
                              name="file"
                              label="عکس"
                              type="file"
                              fullWidth
                              variant="standard"
                              onChange={(e) => setCourseCover(e.target.files[0])}
                              placeholder="عکس دوره مورد نظر را وارد کنید"
                           />
                        </DialogContent>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="shortName"
                              name="shortName"
                              label="نام کوتاه"
                              type="text"
                              fullWidth
                              variant="standard"
                              value={newShortName}
                              onChange={(e) => setNewShortName(e.target.value)}
                           />
                        </DialogContent>
                        <DialogContent>
                           <DialogContentText>برای تغییر اطلاعات عکس محصول ،لطفا فایل جدید مورد نظر را اینجا آپلود کنید</DialogContentText>
                           <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="price"
                              name="price"
                              label="قیمت"
                              type="number"
                              fullWidth
                              variant="standard"
                              value={newPrice}
                              onChange={(e) => setNewPrice(e.target.value)}
                           />
                        </DialogContent>
                        <select onChange={(e) => setCourseCat(e.target.value)} className=" " name="categoryID" id="categoryID" style={{ border: "1px solid #000000" }}>
                           <option value="-1">لطفا دسته بندی را انتخاب کنید</option>
                           {categories.map((item) => {
                              return <option Value={item._id}>{item.title}</option>;
                           })}
                        </select>
                        <DialogActions>
                           <Button onClick={() => setIseditemodal(false)}>لغو</Button>
                           <Button onClick={editesubmitModalAction}>ویرایش</Button>
                        </DialogActions>
                     </Dialog>
                  </div>
               </EditModal>
            )}
            {isdelete && <DeleteModal action={"حذف"} question="آیا از حذف این دوره اطمینان دارید؟" submitAction={deleteModalSubmitAction} setIsdelete={setIsdelete} />}
            {isdelete ? <Notif productTitle={productTitle} actionName="حذف" /> : ""}
         </div>
      </>
   );
}
