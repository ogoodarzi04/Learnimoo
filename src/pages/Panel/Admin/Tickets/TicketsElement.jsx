import React, { useContext, useEffect, useState } from "react";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent, Checkbox } from "@material-tailwind/react";
import useFetch from "../../../../Hooks/useFetch";
import TableProducts from "../../Components/TableProducts/TableProducts";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";
import { List, ListItem, ListItemSuffix, Card } from "@material-tailwind/react";
//
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { DialogContentText } from "@mui/material";
import EditModal from "../../Components/EditModal/EditModal";
//
import Input from "../../../../Components/Form/Input";
import useForm from "../../../../Hooks/useForm";
import usePost from "../../../../Hooks/usePost";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { Context } from "../../../../contexts/Context";
//
export default function TicketsElement({ isAddNewCmp }) {
   const { DOMAIN } = useContext(Context);
   const TABLE_HEAD = ["شناسه", "کاربر", "عنوان", "نوع تیکت", "مشاهده", "دوره", "اولویت", "وضعیت"];
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      answer: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   //
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}tickets`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   const [ticketId, setTicketId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   useEffect(() => {
      fetchData();
   }, [postpost]);
   //
   function sendAnswerToUser(e) {
      e.preventDefault();
      const newUserData = {
         body: inputs?.answer?.value,
         ticketID: ticketId,
      };
      //
      postdata(`${DOMAIN}tickets/answer`, newUserData, userDatas);
      ClearInputs();
   }
   const [answer, setAnswer] = useState(false);
   ///
   return (
      <>
         <div className="commentElement  md:px-20 pb-24">
            {/* ///// */}
            <TableProducts post={post} title={"لیست تیکت ها"}>
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
                              <tr key={item.title} className={` text-gray-200 text-right `} style={{ borderTop: "1px solid #424242" }}>
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
                                    <div className=" flex ">{item?.user}</div>
                                 </td>
                                 <td className=" py-14 relative ">
                                    <div className=" flex ">{item?.title}</div>
                                 </td>
                                 <td className=" py-14 relative ">
                                    <div className=" flex ">{item?.departmentSubID}</div>
                                 </td>
                                 <td className=" py-14 relative px-10 ">
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
                                 <td className=" py-14 relative px-10 ">
                                    <div className=" flex  ">{item?.course ? item?.course : "__"}</div>
                                 </td>
                                 <td className=" py-14 relative px-10 ">
                                    <div className=" flex ">{item?.priority === 1 ? "بالا" : item?.priority === 2 ? "متوسط" : "کم"}</div>
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
                                                   ripple={false}
                                                   className="answer-act py-1 pr-1 pl-4  justify-center flex mx-auto"
                                                   onClick={() => {
                                                      setAnswer(true), setTicketId(item._id), setProductTitle(item?.body);
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
         </div>
      </>
   );
}
