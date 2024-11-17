import React, { useContext } from "react";
import "./ErrBox.css";
export default function ErrBox(props) {
   return (
      <div className="ErrBox bg-red-500 text-[32px] text-white py-6 mt-6">
         <p className=" text-center">هیچ {props.titleErr} یافت نشد</p>
      </div>
   );
}
