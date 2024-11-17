import React, { useEffect, useMemo } from "react";
import ReactDom from "react-dom";
//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
export default function Notif(props) {
   // console.log(props.productTitle)
   //
   useEffect(() => {
      props.productTitle &&
         toast.success(`با موفقیت  ${props.actionName} شد  "${props.productTitle}" کاربر `, {
            position: "bottom-right",
         });
   }, [props.productTitle]);
   return ReactDom.createPortal(
      <>
         <div>
            <ToastContainer />
         </div>
      </>,
      document.getElementById("notif")
   );
}
