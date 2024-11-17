import React from "react";
//
export default function Video(props) {
   if (props?.cover)
      return (
         <div className="  mt-16">
            <video className={`Video w-full rounded-2xl  ${props.isHeight}`} controls>
               <source src={`http://learnimoo.filedl.me:3000/courses/covers/${props.cover}`} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
      );
}
