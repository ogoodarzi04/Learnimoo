import React, { useEffect, useContext, useState, useMemo } from "react";
import "./AdminCourses.css";
import CoursesElement from "./coursesElement";
//
export default function AdminCourses() {
   return (
      <div className=" ">
         <CoursesElement isAddNewCmp={true} />{" "}
      </div>
   );
}
