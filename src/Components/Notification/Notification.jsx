import React, { useEffect, useMemo } from "react";
import ReactDom from "react-dom";
//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
export default function Notification(props) {
   //
   useEffect(() => {
      {
         !props.isSuccessToast
            ? props.errorText &&
              toast.error(`${props.errorText}`, {
                 position: "top-left",
                 theme: "dark",
                 rtl: true,
              })
            : toast.success(`${props.succTxt}`, {
                 position: "top-left",
                 theme: "dark",
                 rtl: true,
              });
      }
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
