import React, { useEffect, useMemo, useState } from "react";
import ReactDom from "react-dom";
//
//
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
//

export default function ShowcommentModal(props) {
   const [comment, setComment] = useState([]);
   //
   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
      "& .MuiDialogContent-root": {
         padding: theme.spacing(2),
      },
      "& .MuiDialogActions-root": {
         padding: theme.spacing(1),
      },
   }));
   //
   const [open, setOpen] = useState(true);
   const handleClose = () => {
      setOpen(false);
      props.setIsshowcomment(false);
   };

   let mainItem = props.items.find((i) => {
      return i.id === props.idComment;
   });
   useEffect(() => {
      setComment(mainItem);
   }, [comment]);
   ///
   return ReactDom.createPortal(
      <>
         <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
               کامنت
            </DialogTitle>
            <IconButton
               aria-label="close"
               onClick={handleClose}
               sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
            <DialogContent dividers dir="rtl">
               <Typography gutterBottom>{comment.body}</Typography>
            </DialogContent>
            <DialogActions>
               <Button autoFocus onClick={handleClose}>
                  تایید
               </Button>
            </DialogActions>
         </BootstrapDialog>
      </>,
      document.getElementById("modal")
   );
}
