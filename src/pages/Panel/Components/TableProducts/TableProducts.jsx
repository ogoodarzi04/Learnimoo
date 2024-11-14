import React from "react";
import "./TableProducts.css";
//
import {
   Card,
   // Typography,
   CardBody,
   Avatar,
   Chip,
   Tooltip,
} from "@material-tailwind/react";

import ErrBox from "../ErrBox/ErrBox";
import Notif from "../Notif/Notif";
//
export default function TableProducts(props) {
   return (
      <>
         {props?.post?.length ? (
            <>
               <div className="TableProducts mt-4   dark:bg-light-theme-color ">
                  <div className="  relative   mt-16 ">
                     <Card className="h-full w-full rounded-[20px]">
                        <CardBody className="  w-full  dark:bg-light-theme-color rounded-[20px] px-14 pt-14 " style={{ background: " #000000 " }}>
                           <span className=" text-white text-4xl  danaDemiBold  ">{props.title}</span>
                           {props.children}
                        </CardBody>
                     </Card>
                  </div>
               </div>
            </>
         ) : (
            <ErrBox titleErr={"کاربری"} />
         )}
      </>
   );
}
