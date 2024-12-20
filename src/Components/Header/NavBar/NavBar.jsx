import { Collapse, Typography, IconButton, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../../contexts/Context";
//
//
export default function NavBar(props) {
   const userDatas = useContext(Context);

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const renderItems = props?.items?.map((item, key) => {
      return (
         <Link to={item._id && !item?.href?.includes("course-info") ? `/course-info/${item.href}` : `${item.href}`} key={key} className=" bg-header-color">
            {/* # ${!item.href.includes("course-info") ? `course-info/${item.href}` : item.href} */}
            <MenuItem className=" block items-center gap-3 rounded-lg  " style={{ marginTop: 10, marginBottom: 10 }}>
               <div className=" block float-right ">
                  <Typography color="white" className="block items-center  text-[16px] text-white text-items py-2.5" style={{ fontFamily: "danaMedium" }}>
                     {item.title}
                  </Typography>
               </div>
            </MenuItem>
         </Link>
      );
   });
   ////
   return (
      <>
         <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
            <MenuHandler>
               <p as="div" variant="small" className="   mx-auto">
                  <ListItem className=" items-center  py-0  text-[16px] justify-between font-danaMedium " selected={isMenuOpen || isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
                     <NavLink
                        to={`/category-info/${props.href}`}
                        className={` text-white dark:!text-theme-color darki flex  px-3 gap-x-2 ${(link) => (link.isActive ? "active" : "")}`}
                        style={{ color: "white" }}
                     >
                        {props.title}
                        <ChevronDownIcon strokeWidth={2.5} className={` my-auto hidden h-6 w-6 transition-transform  lg:block  ${isMenuOpen ? `rotate-180` : ""}`} />
                        <ChevronDownIcon strokeWidth={2.5} className={` my-auto block h-6 w-6 transition-transform  lg:hidden rotate-90    ${isMobileMenuOpen ? `-rotate-1` : ""}`} />
                     </NavLink>
                  </ListItem>
               </p>
            </MenuHandler>
            <MenuList className="hidden max-w-screen-xl rounded-xl lg:block ">
               <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0 me-7 ">{renderItems}</ul>
            </MenuList>
         </Menu>
         <div className="block lg:hidden">
            <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
         </div>
      </>
   );
}
