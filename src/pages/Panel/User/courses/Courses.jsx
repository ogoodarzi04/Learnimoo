import React from "react";
import CoursesElement from "./coursesElement";
import UserPanelBoxDetails from "../../Components/UserPanelBoxDetails/UserPanelBoxDetails";
export default function Courses() {
   return (
      <div className="Courses md:px-16 mt-7">
         <div className="UserPanelBoxDetails">
            <UserPanelBoxDetails />
         </div>
         <div className=" grid md:grid-cols-4  gap-8 mt-16 pb-16 ">
            <CoursesElement />
         </div>
      </div>
   );
}
