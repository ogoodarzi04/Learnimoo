import React from "react";
import "./Input.css";

export default function Input(props) {
   const element =
      props.element === "input" ? (
         <input
            id={props.id}
            value={props.value}
            autoFocus={props.autoFocus}
            type={props.type}
            placeholder={props.placeholder}
            className={`${props.className} `}
            onChange={(e) => props.inputHandeler(e, props.config)}
         />
      ) : (
         <textarea id={props.id} value={props.value} placeholder={props.placeholder} className={`${props.className} `} onChange={(e) => props.inputHandeler(e, props.config)} />
      );
   //

   return <>{element}</>;
}
