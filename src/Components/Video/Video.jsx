import React from "react";
//
export default function Video() {
   return (
      <video className="Video h-full w-full rounded-2xl" controls>
         <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
         Your browser does not support the video tag.
      </video>
   );
}
