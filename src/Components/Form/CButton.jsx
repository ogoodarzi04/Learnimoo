import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CButton(props) {
   if (props.to) {
      return (
         <Link to={props.to} className={props.className}>
            {props.children}
         </Link>
      );
   } else if (props.href) {
      return (
         <a href={props.href} className={props.className}>
            {props.children}
         </a>
      );
   } else {
      return (
         <Button
            color={props.color}
            variant={props.variant}
            fullWidth={props.fullWidth}
            className={props.className}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
            style={props.style}
         >
            {props.children}
         </Button>
      );
   }
}
