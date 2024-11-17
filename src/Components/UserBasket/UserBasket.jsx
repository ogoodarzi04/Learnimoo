import React, { useContext, useEffect, useState } from "react";
import { List, ListItem, Card, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { Context } from "../../contexts/Context";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";
//
export default function UserBasket(props) {
   // let initDatas = JSON.parse(localStorage.getItem("userDeleteCourse"));
   // const [cartCourses, setCartCourses] = useState(() => {
   //    const savedItems = localStorage.getItem("userDeleteCourse");
   //    return savedItems ? JSON.parse(savedItems) : initDatas;
   // });
   const [cartCourses, setCartCourses] = useState([]);
   useEffect(() => {
      setCartCourses(props?.products);
   }, []);
   const [resultPrices, setResultPrices] = useState("");
   useEffect(() => {
      setResultPrices(
         cartCourses.reduce((current, next) => {
            return current + next?.price;
         }, 0)
      );
   }, [cartCourses]);
   // const DeleteCourse = (Id) => {
   //    let newItems = cartCourses.filter((item) => item._id !== Id);
   //    setCartCourses(newItems);
   //    localStorage.setItem("userDeleteCourse", JSON.stringify(newItems));
   // };
   return (
      <>
         {props.showBasketUser && (
            <div
               onClick={() => {
                  props.setShowBasketUser((prev) => !prev);
               }}
               className={` fixed size-full bg-black/35 backdrop-blur-[8px] right-0 top-0 z-50`}
            ></div>
         )}
         <div className="relative  z-[55] ">
            <Menu>
               <MenuHandler>
                  <button>{props.menuShopHnd}</button>
               </MenuHandler>
               {props.showBasketUser && (
                  <MenuList
                     onClick={() => {
                        // console.log(myScreen);
                        props.setShowBasketUser((prev) => !prev);
                     }}
                     className="UserBasket  absolute lg:!left-[123px] !left-10 !top-40 z-50 !bg-header-color dark:!bg-white dark:!text-black rounded-[12px] "
                  >
                     <div className="flex items-center justify-between px-5 py-4 dark:bg-green-50 bg-green-500/10 text-green-500 mb-3 rounded-t-2xl">
                        <span className="danaBold">سبد خرید من</span>
                        <span className="danaDemiBold text-gray-500">{cartCourses.length} دوره</span>
                     </div>
                     <Card className="w-[340px] pb-8 rounded-[12px] bg-header-color dark:bg-white dark:!text-black">
                        <List className=" danaMedium text-[16px] space-y-1.5 ">
                           <div className="cart-body pl-5 pr-2.5 mr-2.5 space-y-6  overflow-y-auto direction-ltr child:direction-rtl ">
                              {cartCourses.map((item) => {
                                 //  console.log(item);
                                 return (
                                    <div>
                                       <div className="cart-item flex items-center gap-x-3 text-white dark:!text-black">
                                          <Link to={`https://learnimoo.filedl.me/course-info/${item?.shortName}`} className="shrink-0 text-white dark:!text-black">
                                             <img className=" h-24 aspect-video rounded-lg" src={`http://learnimoo.filedl.me/courses/covers/${item?.cover}`} alt={item?.name} />
                                          </Link>
                                          <div className="flex flex-col justify-between">
                                             <p className="line-clamp-2 danaMedium text-sm">{item?.name}</p>
                                             <div className="flex items-center gap-x-2 dark:text-gray-500 text-gray-400">
                                                {item?.price === 0 ? (
                                                   <div className="flex items-center gap-x-1">
                                                      <span className="danaMedium text-sm">رایگان!</span>
                                                   </div>
                                                ) : (
                                                   <span className="danaMedium text-sm flex">
                                                      {item?.price.toLocaleString()}
                                                      <img className=" size-8 flex !text-white" src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                                                   </span>
                                                )}
                                             </div>
                                          </div>
                                          <button className="text-gray-400 hover:text-red-500 mr-auto" onclick="sthe_remove_item_from_cart(70 , `a50c64cdb6`)">
                                             <HiOutlineTrash
                                                style={{ fontSize: 15.5 }}
                                                className=" text-gray-400 hover:text-red-600"
                                                //  onClick={(e) => DeleteCourse(item?._id)}
                                             />
                                          </button>
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </List>
                        <div className="mt-3 px-[14.5px] dark:!border-t-[#e5e7eb]" style={{ borderTop: "1px solid #ffffff1a" }}>
                           <div className="flex items-center justify-between dark:!border-white/10 pt-[18px] mb-[23px] text-white dark:!text-black danaMedium">
                              <span className=" text-[16px]">مبلغ قابل پرداخت:</span>
                              <div className="flex items-center gap-x-1">
                                 {
                                    <div className=" flex">
                                       <span className="text-[17px] danaDemiBold font-bold dark:!text-black">{resultPrices?.toLocaleString()}</span>
                                       <img className=" size-8 flex !text-white " src="http://learnimoo.filedl.me/courses/covers/Toman.png" alt="" />
                                    </div>
                                 }
                              </div>
                           </div>
                           <Link to={"https://learnimoo.filedl.me/cart"} className="w-full text-white dark:!text-black">
                              <button className=" h-[49px] bg-limon-color hover:opacity-75 px-7 w-full" style={{ borderRadius: " 30px" }}>
                                 <a href=" ">
                                    <div className=" text-[15px]  danaBold flex gap-x-4 mx-auto w-max">
                                       <span className=" my-auto">مشاهده سبد خرید</span>
                                    </div>
                                 </a>
                              </button>
                           </Link>
                        </div>
                     </Card>
                  </MenuList>
               )}
            </Menu>
         </div>
      </>
   );
}
//
