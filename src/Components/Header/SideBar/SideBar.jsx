import React, { useState } from "react";
import ReactDom from "react-dom";
import { Drawer, Button, Typography, IconButton, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
//
import NavBar from "../NavBar/NavBar";
import { navListMenuItems } from "../../../datas";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
export function SideBar(props) {
   const [open, setOpen] = useState(true);
   return ReactDom.createPortal(
      <>
         <Drawer open={open} placement="right" className="px-[17px]">
            <div className="mb-2 flex items-center justify-between py-[20px] " style={{ borderBottom: "0.5px solid #ffffff1a" }}>
               <Typography>
                  <div className="logo-img  mt-2.5  ">
                     <a href={"http://localhost:5173/"}>
                        <img src="/img/slazzer-edit-image (2)_prev_ui.png" alt="" style={{ width: "7rem" }} />
                     </a>
                  </div>
               </Typography>
               <div className=" flex gap-x-5">
                  <button className=" lefSide-icons2 bg-icon-color text-white flex">
                     <LightModeOutlinedIcon style={{ fontSize: 23 }} />
                  </button>{" "}
                  <button className=" lefSide-icons2 bg-icon-color text-white flex" onClick={() => props.setShowSideBar(false)}>
                     <CloseIcon style={{ fontSize: 23 }} />
                  </button>
               </div>
            </div>
            <div>
               <div className="search-box2 bg-icon-color rounded-full  text-white flex">
                  <input type="text" placeholder="جست جو کنید... " />
                  <button className="  h-full flex">
                     <SearchRoundedIcon style={{ fontSize: 26 }} />
                  </button>
               </div>
               <div className="Navbar  mt-[18px]  space-y-[5px]">
                  {navListMenuItems.map((item) => {
                     return <NavBar title={item.title} items={item.subMenu} key={item.id} path={item.path}></NavBar>;
                  })}
               </div>
            </div>
         </Drawer>
      </>,
      document.getElementById("SideBar")
   );
}
