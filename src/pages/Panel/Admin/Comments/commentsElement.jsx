import React, { useContext, useEffect, useState } from "react";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent, Checkbox } from "@material-tailwind/react";
import useFetch from "../../../../Hooks/useFetch";
import TableProducts from "../../Components/TableProducts/TableProducts";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";
import { List, ListItem, ListItemSuffix, Card } from "@material-tailwind/react";
import { HiTrash } from "react-icons/hi2";
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
//
import Input from "../../../../Components/Form/Input";
import useForm from "../../../../Hooks/useForm";
import usePost from "../../../../Hooks/usePost";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import GradeIcon from "@mui/icons-material/Grade";
import { MdOutlineGrade } from "react-icons/md";
import { Context } from "../../../../contexts/Context";
//
// import "./Users.css";

export default function commentElement({ isAddNewCmp }) {
   const { DOMAIN } = useContext(Context);
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const localStorageBanId = JSON.parse(localStorage.getItem("banItemID"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}comments`, userDatas);
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
      deletedata(`${DOMAIN}comments/${userId}`, userDatas);
      setIsdelete(false);
   }
   useEffect(() => {
      fetchData();
   }, [deletepost]);
   const { editedata, editepost, setEditepost, errorr } = useEdit();
   //
   useEffect(() => {
      fetchData();
   }, [editepost]);
   //
   const TABLE_HEAD = [`شناسه`, `کاربر`, `دوره`, `امتیاز`, `نظر`, ``, `وضعیت`, ``];
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      title: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      name: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      answer: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   //
   useEffect(() => {
      fetchData();
   }, [postpost]);
   //
   const [isBan, setIsBan] = useState(false);
   const [banItems, setBanItems] = useState([]);
   function banModalSubmitAction() {
      const { DOMAIN } = useContext(Context);
      editedata(`${DOMAIN}users/ban/${userId}`, userDatas, {});
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
   //
   function sendAnswerToUser(e) {
      e.preventDefault();
      const newUserData = {
         body: inputs?.answer.value,
      };
      //
      postdata(`${DOMAIN}comments/answer/${userId}`, newUserData, userDatas);
      ClearInputs();
   }
   const [answer, setAnswer] = useState(false);
   function rejectComment(userId) {
      editedata(`${DOMAIN}comments/reject/${userId}`, userDatas, {});
   }
   //
   function acceptComment(userId) {
      editedata(`${DOMAIN}comments/accept/${userId}`, userDatas, {});
   }
   ///
   return (
      <>
         <div className="commentElement  md:px-20 pb-24">
            {/* ///// */}
            <TableProducts post={post} title={"لیست کامنت ها"}>
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
                           const isLast = index + 1 === post.length - 1;
                           const classes = isLast ? " " : "";
                           return (
                              <tr key={item.title} className={`${banItems.includes(item?._id) && "opacity-20"} text-gray-200 text-right `} style={{ borderTop: "1px solid #424242" }}>
                                 <td className={classes}>
                                    <div className="flex items-center pe-20 ">
                                       <div className="flex flex-col">
                                          <Typography variant="small" className="font-normal">
                                             {index + 1}
                                          </Typography>
                                       </div>
                                    </div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex ">{item?.creator?.name}</div>
                                 </td>
                                 <td className=" py-14 relative ">
                                    <div className=" flex ">{item.course}</div>
                                 </td>
                                 <td className=" py-14 relative ">
                                    <div className=" flex ">
                                       {Array(5 - item.score)
                                          .fill(0)
                                          .map((item) => {
                                             return (
                                                <div className=" text-orange-500">
                                                   <MdOutlineGrade style={{ fontSize: 23 }} />
                                                </div>
                                             );
                                          })}
                                       {Array(item.score)
                                          .fill(0)
                                          .map((item) => {
                                             return (
                                                <div className=" text-orange-500">
                                                   <GradeIcon style={{ fontSize: 23 }} />
                                                </div>
                                             );
                                          })}
                                    </div>
                                 </td>
                                 <td className=" py-14 relative ">
                                    <div className=" flex ">
                                       <Popover
                                          placement="bottom"
                                          animate={{
                                             mount: { scale: 1, y: 0 },
                                             unmount: { scale: 0, y: 25 },
                                          }}
                                       >
                                          <PopoverHandler>
                                             <Button className=" search-btnd danaDemiBold !text-2xl !rounded-3xl">
                                                <span className=" text-black danaDemiBold font-bold">مشاهده </span>
                                             </Button>
                                          </PopoverHandler>
                                          <PopoverContent>
                                             {" "}
                                             <div className="p-6">
                                                <span className=" danaDemiBold text-2xl">{item.body}</span>
                                             </div>
                                          </PopoverContent>
                                       </Popover>
                                    </div>
                                 </td>
                                 <td className=" py-14 relative px-10">
                                    {item.answer === 0 ? (
                                       <div className=" flex ">
                                          <button
                                             className=" bg-blue-300 px-3 rounded-xl"
                                             onClick={() => {
                                                acceptComment(item._id);
                                             }}
                                          >
                                             <span className=" m-auto block">تایید</span>
                                             <span className=" m-auto block h-1.5"></span>
                                          </button>
                                       </div>
                                    ) : (
                                       <div className=" flex ">
                                          <button className=" bg-red-300 px-3 rounded-xl" onClick={() => rejectComment(item._id)}>
                                             <span className=" m-auto block">رد</span>
                                             <span className=" m-auto block h-1.5"></span>
                                          </button>
                                       </div>
                                    )}
                                 </td>

                                 <td className=" py-14 relative">
                                    <div className={` flex rounded-full py-3.5 px-2.5 `}>
                                       {item.answer === 0 ? (
                                          <Chip className=" py-[9px]" value={<p className=" m-auto danaDemiBold text-[13px]">پاسخ داده نشده</p>} variant="ghost" color="red" />
                                       ) : (
                                          <Chip className=" py-[9px]" value={<p className=" m-auto danaDemiBold text-[13px]">پاسخ داده شده</p>} variant="ghost" color="green" />
                                       )}
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
                                                      setIsdelete(true), setUserId(item._id), setProductTitle(item?.creator?.name);
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
                                                   className=" ban-act py-1 pr-1 pl-4  justify-center flex mx-auto"
                                                   onClick={() => {
                                                      setIsBan(true), setUserId(item._id), setProductTitle(item?.body);
                                                   }}
                                                >
                                                   <span className=" me-3">BAN</span>
                                                   <IconButton className="" variant="text">
                                                      <FaBan color="white" />
                                                   </IconButton>
                                                </ListItem>
                                                <ListItem
                                                   ripple={false}
                                                   className="answer-act py-1 pr-1 pl-4  justify-center flex mx-auto"
                                                   onClick={() => {
                                                      setAnswer(true), setUserId(item._id), setProductTitle(item?.body);
                                                   }}
                                                >
                                                   <span className=" me-3">ANSWER</span>
                                                   <IconButton className="" variant="text">
                                                      <MdOutlineQuestionAnswer color="white" />
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
            {answer && (
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
                        <DialogTitle>پاسخ کاربر</DialogTitle>
                        <DialogContent className=" !text-black ">
                           <DialogContentText>{productTitle}</DialogContentText>
                           <Input
                              className="nbv"
                              autoFocus
                              required
                              margin="dense"
                              id="answer"
                              name="answer"
                              placeholder="پاسخ..."
                              type="text"
                              fullWidth
                              variant="standard"
                              value={inputs?.answer?.value}
                              // onChange={(e) => s(e.target.value)}
                              inputHandeler={inputHandeler}
                              element="input"
                              config={{ max: 1700, min: 2 }}
                           />
                        </DialogContent>

                        <DialogActions>
                           <Button onClick={() => setAnswer(false)}>لغو</Button>
                           <Button
                              onClick={(e) => {
                                 sendAnswerToUser(e), setAnswer(false);
                              }}
                           >
                              ارسال
                           </Button>
                        </DialogActions>
                     </Dialog>
                  </div>
               </EditModal>
            )}
            {/* /// */}
            {isdelete && <DeleteModal action={"حذف"} question="آیا از حذف این کاربر اطمینان دارید؟" submitAction={deleteModalSubmitAction} setIsdelete={setIsdelete} />}
            {isBan && <DeleteModal action={"انسداد"} question="آیا از مسدود کردن این کاربر اطمینان دارید؟" submitAction={banModalSubmitAction} setIsdelete={setIsBan} />}
            {isdelete ? <Notif productTitle={productTitle} actionName="حذف" /> : ""}
         </div>
      </>
   );
}
