import React, { useContext, useEffect, useState } from "react";
import { Select, Option, Avatar, Chip, Tooltip, Popover, PopoverHandler, PopoverContent, Checkbox } from "@material-tailwind/react";
import useFetch from "../../../../Hooks/useFetch";
import TableProducts from "../../Components/TableProducts/TableProducts";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";
import { List, ListItem, ListItemSuffix, Card } from "@material-tailwind/react";
import { HiTrash } from "react-icons/hi2";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import useDelete from "../../../../Hooks/useDelete";
import Notif from "../../Components/Notif/Notif";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";
//
import Input from "../../../../Components/Form/Input";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import useForm from "../../../../Hooks/useForm";
import usePost from "../../../../Hooks/usePost";
//
export default function DiscountElement({ isAddNewCmp }) {
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas("http://localhost:3000/v1/offs", userDatas);
   };

   useEffect(() => {
      fetchData();
   }, []);

   const [isdelete, setIsdelete] = useState(false);
   const [userId, setProductId] = useState(null);
   const [productTitle, setProductTitle] = useState(null);

   const { deletedata, deletepost, setDeletepost, error } = useDelete();
   function deleteModalSubmitAction() {
      deletedata(`http://localhost:3000/v1/offs/${userId}`, userDatas);
      setIsdelete(false);
   }
   useEffect(() => {
      fetchData();
   }, [deletepost]);
   //
   const TABLE_HEAD = [`شناسه`, `سازنده`, `میزان تخفیف به درصد`, `حداکثر استفاده`, `دفعات استفاده`, `کد`, ``];
   const [allValid, inputs, inputHandeler, ClearInputs] = useForm({
      code: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      percent: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
      max: { value: "", isValid: false, error: "در نام کاربر فقط استفاده از حداقل  4 و حداکثر 18 کاراکتر حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است." },
   });
   const { postdata, postpost, setPostpost, errorrs } = usePost();
   //
   useEffect(() => {
      fetchData();
   }, [postpost]);

   const AddProducts = (e) => {
      e.preventDefault();
      const newUserData = {
         code: inputs?.code.value,
         percent: +inputs?.percent.value,
         max: inputs?.max.value,
         course: offCourse,
      };
      //
      postdata("http://localhost:3000/v1/offs", newUserData, userDatas);
      if (allValid || !postpost?.message) {
         ClearInputs();
      }
   };
   //
   const [courses, setCourses] = useState([]);
   const [offCourse, setOffCourse] = useState("-1");
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
   //
   return (
      <>
         <div className=" grid grid-cols-3  px-20 pb-24">
            {isAddNewCmp && (
               <AddNewProduct title={"افزودن دسته بندی جدید"}>
                  <div className=" grid md:grid-cols-2 p-4 gap-x-20 cursor-pointer !text-gray-400">
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="کد تخفیف را وارد کنید..."
                           element="input"
                           id="code"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           config={{ max: 17, min: 5 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.code.value}
                        />
                        <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg " style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="درصد تخفیف را وارد کنید..."
                           element="input"
                           id="percent"
                           type="number"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           config={{ max: 17, min: 5 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.percent.value}
                        />
                        <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className=" Name-Product relative space-y-2.5 h-[43px] rounded-lg my-[11px]" style={{ borderBottom: "1px solid #ffffff" }}>
                        <Input
                           placeholder="حداکثر استفاده از کد تخفیف..."
                           element="input"
                           id="max"
                           type="text"
                           className="withColor rounded-lg flex py-[7px] ps-6 text-white  w-full bg-black  h-max "
                           config={{ max: 17, min: 5 }}
                           inputHandeler={inputHandeler}
                           value={inputs?.max.value}
                        />
                        <ModeEditOutlineOutlinedIcon className=" icon-products absolute left-4 top-3" style={{ fontSize: 17 }} />
                     </div>
                     <div className="Price-Product relative gap-x-3 my-[12px] space-y-2.5 h-[43px] flex">
                        <p className=" my-auto">نام دوره</p>
                        <select onChange={(e) => setOffCourse(e.target.value)} className=" bg-black " title="" id="" style={{ border: "1px solid #ffffff" }}>
                           <option value="-1">لطفا دوره مد نظر را انتخاب کنید</option>
                           {courses.map((item) => {
                              return <option Value={item._id}>{item.name}</option>;
                           })}
                        </select>
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
                                    <div className=" flex ">{item.creator}</div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex ">{+item.percent}</div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex ">{item.max}</div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex ">{item.uses}</div>
                                 </td>
                                 <td className=" py-14 relative">
                                    <div className=" flex ">{item.code}</div>
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
