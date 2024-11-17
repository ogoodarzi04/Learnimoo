import React, { useEffect } from "react";
import ReactDom from "react-dom";
//
import "./DeleteModal.css";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Button } from "@material-tailwind/react";
export default function DeleteModal(props) {
   //
   return ReactDom.createPortal(
      <>
         <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className=" danaDemiBold " id="alert-dialog-title">
               <span className=" text-white bg-red-600 py-1 px-3 rounded-md">{props.action}</span>
            </DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description" className="  font-bold danaMedium" style={{ fontSize: 20 }}>
                  {props.question}
               </DialogContentText>
            </DialogContent>
            <DialogActions className=" gap-x-6">
               <Button
                  onClick={() => {
                     props.submitAction();
                  }}
               >
                  <span className=" danaMedium text-xl font-thin">بله</span>
               </Button>
               <Button
                  onClick={() => {
                     props.setIsdelete(false);
                  }}
               >
                  <span className=" danaMedium text-xl font-thin">خیر</span>
               </Button>
            </DialogActions>
         </Dialog>
      </>,
      document.getElementById("modal")
   );
}
