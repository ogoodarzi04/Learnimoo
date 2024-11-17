import React, { useEffect, useMemo, useState, usefe } from "react";
//
import { Card, Typography, CardBody, Avatar, Dialog, Button } from "@material-tailwind/react";
//
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
//
//  import { TABLE_HEAD,TABLE_ROWS } from '../../datas';
//
import useFetch from "../../useFetch";
import useDelete from "../../useDelete";
//
import ErrBox from "../ErrBox/ErrBox";
import Notif from "../Notif/Notif";
import ShowcommentModal from "../ShowcommentModal/ShowcommentModal";
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize } from "@mui/material";
import useEdit from "../../useEdit";
import usePost from "../../usePost";
//
export default function TableComments({ getAllDatas, post }) {
   const [isdelete, setIsdelete] = useState(false);
   const [isshowcomment, setIsshowcomment] = useState(false);
   const [iseditemodal, setIseditemodal] = useState(false);
   const [productId, setProductId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);
   const [isSureDelete, setIsSureDelete] = useState(false);
   const [updatedComment, setUpdatedComment] = useState("");
   const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
   const [isShowRejectModal, setIsShowRejectModal] = useState(false);
   //
   const { deletedata, deletepost, setDeletepost, error } = useDelete();
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   //
   const deleteModalSubmitAction = () => {
      deletedata("http://localhost:8000/v1/comments", productId);
      setIsdelete(false);
      setIsSureDelete((prev) => !prev);
      getAllDatas("http://localhost:8000/v1/comments");
      getAllDatas("http://localhost:8000/v1/comments");
   };
   //
   const closeAcceptModal = () => setIsShowAcceptModal(false);
   const closeRejectModal = () => setIsShowRejectModal(false);
   const acceptComment = () => {
      console.log("کامنت تایید شد");
      postdata(`http://localhost:8000/v1/comments/accept/${productId}`);
      setIsShowAcceptModal(false);
      getAllDatas("http://localhost:8000/v1/comments");
      getAllDatas("http://localhost:8000/v1/comments");
      setIsShowAcceptModal(false);
   };
   const rejectComment = () => {
      postdata(`http://localhost:8000/v1/comments/reject/${productId}`);
      setIsShowRejectModal(false);
      getAllDatas("http://localhost:8000/v1/comments");
      getAllDatas("http://localhost:8000/v1/comments");
      setIsShowRejectModal(false);
   };

   //     useEffect(()=>{
   //       const newData={
   //         // id:1,
   //         body:'dsfafdfdf',
   //         date:'5623',
   //         hour:'123',
   //         userID:20,
   //         productID:8,
   //         isReply:0,
   //         replyID:0,
   //         isAccept:0,
   //         score:12,
   //         helpfulltrue:0,
   //         helpfullfalse:0,
   //       }
   //       console.log(newData);
   // fetch(`http://localhost:8000/v1/comments`,{
   //   method:"POST",
   //   headers: {
   //     "Content-Type": "application/json"
   //   },
   //   // sub_url: `/accept`,
   //     body: JSON.stringify(newData)
   // })
   // .then(res=>res.json())
   // .then(data=>{
   // console.log(data);
   //   // props.update('http://localhost:8000/v1/comments')
   //   // props.update('http://localhost:8000/v1/comments')
   //   //   // setEditepost(data)
   // }

   // )
   // .catch(errorr=>console.log(errorr))

   //     },[])
   const { editedata, editepost, setEditepost, errorr } = useEdit();
   const editesubmitModal = (e) => {
      const updatedDatas = {
         body: updatedComment,
      };
      editedata(`http://localhost:8000/v1/comments/${productId}`, updatedDatas);
      getAllDatas("http://localhost:8000/v1/comments");
      getAllDatas("http://localhost:8000/v1/comments");
      setIseditemodal(false);
   };
   ////
   const TABLE_HEAD = [`اسم کاربر`, `محصول`, `کامنت`, `تاریخ`, `ساعت`];
   return (
      <>
         {post.length ? (
            <>
               <div className="TableProducts mt-4  ms-9 pe-6 bg-gray-white ">
                  <div className=" rounded-[15px] relative  bg-white ">
                     <Card className="h-full w-full ">
                        <CardBody className=" px-0 w-full">
                           <table className="mt-4 w-full min-w-max table-auto text-left ">
                              <thead>
                                 <tr>
                                    {TABLE_HEAD.map((head, id) => (
                                       <th key={head} className="cursor-pointer  p-4 ">
                                          <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none  text-black">
                                             {head}
                                          </Typography>
                                       </th>
                                    ))}
                                 </tr>
                              </thead>
                              <tbody>
                                 {post.map((props) => {
                                    const isLast = props.id === post.length - 1;
                                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                    return (
                                       <tr key={props.id}>
                                          <td className={classes}>
                                             <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                                   {props.userID}
                                                </Typography>
                                             </div>
                                          </td>
                                          <td className={classes}>
                                             <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                                   {props.productID}
                                                </Typography>
                                             </div>
                                          </td>
                                          <td className={classes}>
                                             <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                                   <button
                                                      className="search-btn2 text-white  mt-[12px] text-[18px]  "
                                                      style={{ backgroundColor: "rgb(20, 8, 96)" }}
                                                      onClick={() => {
                                                         setIsshowcomment(true), setProductId(props.id);
                                                      }}
                                                   >
                                                      دیدن کامنت
                                                   </button>
                                                </Typography>
                                             </div>
                                          </td>
                                          <td className={classes}>
                                             <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                                   {props.date}
                                                </Typography>
                                             </div>
                                          </td>
                                          <td className={classes}>
                                             <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                                   {props.hour}
                                                </Typography>
                                             </div>
                                          </td>
                                          <td className="flex gap-x-6 md:w-max mx-auto">
                                             {props.isAccept === 0 ? (
                                                <button
                                                   className="search-btn2 text-white  mt-[12px] text-[18px] bg-teal-500 "
                                                   onClick={() => {
                                                      setProductId(props.id), setProductTitle(props.title), setIsShowAcceptModal(true);
                                                   }}
                                                >
                                                   تایید
                                                </button>
                                             ) : (
                                                <button
                                                   className="search-btn2 text-white  mt-[12px] text-[18px] bg-blue "
                                                   onClick={() => {
                                                      setProductId(props.id), setProductTitle(props.title), setIsShowRejectModal(true);
                                                   }}
                                                >
                                                   رد
                                                </button>
                                             )}

                                             <button
                                                className="search-btn2 text-white  mt-[12px] text-[18px] bg-red-700 "
                                                onClick={() => {
                                                   setIsdelete(true), setProductId(props.id), setProductTitle(props.title);
                                                }}
                                             >
                                                حذف
                                             </button>
                                             <button
                                                className="search-btn2 text-white  mt-[12px] text-[18px]  "
                                                style={{ backgroundColor: "rgb(20, 8, 96)" }}
                                                onClick={() => {
                                                   setIseditemodal(true), setProductId(props.id), setUpdatedComment(props.body);
                                                }}
                                             >
                                                ویرایش
                                             </button>
                                             <button
                                                className="search-btn2 text-white  mt-[12px] text-[18px] bg-orange-400 "
                                                onClick={() => {
                                                   setProductId(props.id);
                                                }}
                                             >
                                                پاسخ
                                             </button>
                                          </td>
                                       </tr>
                                    );
                                 })}
                              </tbody>
                           </table>
                        </CardBody>
                     </Card>
                  </div>
               </div>
               {iseditemodal && (
                  <EditModal>
                     <div className="wrapper-modal">
                        <Dialog
                           open={open}
                           PaperProps={{
                              component: "form",
                              onSubmit: (event) => {
                                 event.preventDefault();
                                 const formData = new FormData(event.currentTarget);
                                 const formJson = Object.fromEntries(formData.entries());
                                 //  handleClose();
                              },
                           }}
                        >
                           <DialogTitle>ثبت اطلاعات جدید</DialogTitle>
                           <DialogContent>
                              <DialogContentText>برای تغییر کامنت مورد نظر متن این فیلد را تغییر دهید</DialogContentText>
                              <TextareaAutosize
                                 dir="rtl"
                                 autoFocus
                                 required
                                 margin="dense"
                                 id="comment"
                                 name="comment"
                                 label="متن کامنت"
                                 type="text"
                                 // fullWidth
                                 variant="standard"
                                 value={updatedComment}
                                 onChange={(e) => setUpdatedComment(e.target.value)}
                                 className=" size-full mt-4 border-2 py-1.5 px-2"
                              />
                           </DialogContent>
                           <DialogActions>
                              <Button onClick={() => setIseditemodal(false)}>لغو</Button>
                              <Button onClick={editesubmitModal}>ویرایش</Button>
                           </DialogActions>
                        </Dialog>
                     </div>
                  </EditModal>
               )}
               {isshowcomment && <ShowcommentModal isshowcomment={isshowcomment} setIsshowcomment={setIsshowcomment} idComment={productId} items={post} />}
               {isdelete && <DeleteModal question="آیا از حذف این کامنت اطمینان دارید؟" submitAction={deleteModalSubmitAction} cancelAction={closeAcceptModal} setIsdelete={setIsdelete} />}
               {isShowAcceptModal && <DeleteModal question={`آیا از تایید این کامنت اطمینان دارید؟`} cancelAction={closeAcceptModal} submitAction={acceptComment} setIsdelete={setIsdelete} />}
               {isShowRejectModal && <DeleteModal question={`آیا از رد این کامنت اطمینان دارید؟`} cancelAction={closeRejectModal} submitAction={rejectComment} setIsdelete={setIsdelete} />}
            </>
         ) : (
            <ErrBox titleErr={"کامنتی"} />
         )}
         {isSureDelete ? <Notif productTitle={productTitle} /> : ""}
      </>
   );
}
