// import React, { useEffect, useMemo, useState,usefe } from 'react'
// //
// import {
//   Card,
//   Typography,
//   CardBody,
//   Avatar,
// } from "@material-tailwind/react";
// //
//  import DeleteModal from '../DeleteModal/DeleteModal';
//  import DetailsModal from '../DetailsModal/DetailsModal';
//  import EditModal from '../EditModal/EditModal';
//  //
// //  import { TABLE_HEAD,TABLE_ROWS } from '../../datas';
//  //
//  import useFetch from '../../useFetch';
//  import useDelete from '../../useDelete';
//  //
// import ErrBox from '../ErrBox/ErrBox';
// import Notif from '../Notif/Notif';
// import ShowcommentModal from '../ShowcommentModal/ShowcommentModal';
// import EditeComment from '../EditeComment/EditeComment';
//  //
// export default function TableOrders({getAllDatas,post}) {

//     const [isdelete,setIsdelete]=useState(false)
//     const [isshowcomment,setIsshowcomment]=useState(false)
//     const [iseditemodal,setIseditemodal]=useState(false)
//     const [productId,setProductId]=useState(null)
//     const [productTitle,setProductTitle]=useState(null)
//     const [isSureDelete,setIsSureDelete]=useState(false)
//    const [Confirm,setIsConfirm]=useState(false)
//   // const [question,setQuestion]=useState('')
//   const [isShowAcceptModal,setIsShowAcceptModal]=useState(false)
//     const [isShowRejectModal, setIsShowRejectModal] = useState(false);
//     //
//     const {deletedata,deletepost,setDeletepost,error}=useDelete()
//     //
//    const deletesubmitModal=()=>{
//      deletedata('http://localhost:8000/api/orders',productId)
//      setIsdelete(false)
//      setIsSureDelete(prev=>!prev)
//      getAllDatas('http://localhost:8000/api/orders')
//      getAllDatas('http://localhost:8000/api/orders')
//     }
//     //
//   const closeAcceptModal = () => setIsShowAcceptModal(false);
//   const closeRejectModal = () => setIsShowRejectModal(false);
//     const acceptComment = () => {
//     // console.log("سفارش تایید شد");

//     fetch(`http://localhost:8000/api/orders/accept/${productId}`, {
//       method: "POST",
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         setIsShowAcceptModal(false);
//         getAllDatas('http://localhost:8000/api/orders');
//       });

//     setIsShowAcceptModal(false);
//   };
//     const rejectComment = () => {

//     fetch(`http://localhost:8000/api/orders/reject/${productId}`, {
//       method: 'POST'
//     }).then(res => res.json())
//     .then(result => {
//       console.log(result);
//       setIsShowRejectModal(false)
//      getAllDatas('http://localhost:8000/api/orders')
//     })
//     setIsShowRejectModal(false);

//   };

// //     useEffect(()=>{
// //       const newDaffta={
// //         // id:1,
// //         body:'dsfafdfdf',
// //         date:5623,
// //         hour:123,
// //         userID:'sd;sdf',
// //         productID:'dsafdsf',
// //         isReply:true,
// //         replyId:true,
// //         isAccept:false,
// //         categoryId:4
// //       }
// //       console.log(newDaffta);
// // fetch(`http://localhost:8000/api/comments`,{
// //   method:"POST",
// //   headers: {
// //     "Content-Type": "application/json"
// //   },
// //   // sub_url: `/accept`,
// //     body: JSON.stringify(newDaffta)
// // })
// // .then(res=>res.json())
// // .then(data=>{
// // console.log(data);
// //   // props.update('http://localhost:8000/api/comments')
// //   // props.update('http://localhost:8000/api/comments')
// //   //   // setEditepost(data)
// // }

// // )
// // .catch(errorr=>console.log(errorr))

// //     },[])

//   ////
//   const TABLE_HEAD = [`اسم کاربر`,`محصول`,`قیمت`,`تخفیف`,`موجودی`,`تاریخ`,`ساعت`];
//   return (
//     <>
//     {post.length? <>
//         <div className='TableProducts mt-4  ms-9 pe-6 bg-gray-white '>
//             <div className=' rounded-[15px] relative  bg-white '>
//     <Card className="h-full w-full ">
//           <CardBody className=" px-0 w-full">
//             <table className="mt-4 w-full min-w-max table-auto text-left ">
//               <thead>
//                 <tr>
//                   {TABLE_HEAD.map((head, id) => (
//                     <th
//                       key={head}
//                       className="cursor-pointer  p-4 "
//                     >
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="flex items-center justify-between gap-2 font-normal leading-none  text-black"
//                       >
//                         {head}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {post.map(
//                   (props) => {
//                     const isLast = props.id === post.length - 1;
//                     const classes = isLast
//                       ? "p-4"
//                       : "p-4 border-b border-blue-gray-50";

//                     return (
//                       <tr key={props.id}>
//                         {/* {console.log(props.price)} */}
//                         <td className={classes}>
//                           <div className="flex items-center gap-3">
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal opacity-70"
//                             >
//                               {props.userID}
//                             </Typography>
//                           </div>
//                         </td>
//                         <td className={classes}>
//                           <div className="flex items-center gap-3">
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal opacity-70"
//                             >
//                               {props.productID}
//                             </Typography>
//                           </div>
//                         </td>
//                         <td className={classes}>
//                           <div className="flex items-center gap-3">
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal opacity-70"
//                             >
//       {/* <button className='search-btn2 text-white  mt-[12px] text-[18px]  '   style={{backgroundColor:'rgb(20, 8, 96)'}}   onClick={()=>{setIsshowcomment(true),setProductId(props.id)}}  >دیدن کامنت</button> */}
//                 {props.off}
//                             </Typography>
//                           </div>
//                         </td>
//                         <td className={classes}>
//                           <div className="flex items-center gap-3">
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal opacity-70"
//                             >
//                 {props.price}
//                             </Typography>
//                           </div>
//                         </td>
//                         <td className={classes}>
//                           <div className="flex items-center gap-3">
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal opacity-70"
//                             >
//                 {props.count}
//                             </Typography>
//                           </div>
//                         </td>
//                         <td className={classes}>
//                           <div className="flex items-center gap-3">
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal opacity-70"
//                             >
//                              {props.date}
//                             </Typography>
//                           </div>
//                         </td>
//                         <td className={classes}>
//                           <div className="flex items-center gap-3">
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal opacity-70"
//                             >

//                              {props.hour}
//                             </Typography>
//                           </div>
//                         </td>
//                          <td className='flex gap-x-6 md:w-max mx-auto'>
//                          {props.isAccept === 0 ? (
//                  <button className='search-btn2 text-white  mt-[12px] text-[18px] bg-teal-500 '  onClick={()=>{setProductId(props.id),setProductTitle(props.title),setIsShowAcceptModal(true);}} >تایید</button>
//                   ) : (
//                     <button
//                     className='search-btn2 text-white  mt-[12px] text-[18px] bg-blue '  onClick={()=>{setProductId(props.id),setProductTitle(props.title), setIsShowRejectModal(true);}}
//                     >
//                       رد
//                     </button>
//                   )}

//       <button className='search-btn2 text-white  mt-[12px] text-[18px] bg-red-700 ' onClick={()=>{setIsdelete(true),setProductId(props.id),setProductTitle(props.title)}}>حذف</button>
//       <button className='search-btn2 text-white  mt-[12px] text-[18px]  '   style={{backgroundColor:'rgb(20, 8, 96)'}}   onClick={()=>{setIseditemodal(true),setProductId(props.id)}}  >ویرایش</button>
//       <button className='search-btn2 text-white  mt-[12px] text-[18px] bg-orange-400 '   onClick={()=>{setIseditemodal(true),setProductId(props.id)}}  >پاسخ</button>
//                         </td>
//                       </tr>
//                     );
//                   },
//                 )}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//             </div>
//         </div>
//     {iseditemodal&&<EditeComment iseditemodal={iseditemodal} setIseditemodal={setIseditemodal} isEdit={productId} items={post} update={getAllDatas} />}
//         {isshowcomment&&<ShowcommentModal isshowcomment={isshowcomment} setIsshowcomment={setIsshowcomment} idComment={productId} items={post} />}
//         {isdelete?<DeleteModal isdelete={isdelete} setIsdelete={setIsdelete} submitModal={deletesubmitModal} deleteTitle={productTitle}  question={`آیا از حذف این سفارش اطمینان دارید؟`}/>:''}
//         {isShowAcceptModal&&<DeleteModal question={`آیا از تایید این سفارش اطمینان دارید؟`}
//         cancelAction={closeAcceptModal}
//         submitAction={acceptComment}
//         />}
//          {isShowRejectModal&&<DeleteModal question={`آیا از رد این سفارش اطمینان دارید؟`}
//         cancelAction={closeRejectModal}
//         submitAction={rejectComment}
//         />}
//         </>:<ErrBox titleErr={'سفارشی'} />
//         }
//         {isSureDelete?<Notif productTitle={productTitle}/>:''}
//         </>
//   )
// }
