import React, { useEffect } from "react";
import CourseCard from "../../../../Components/CourseCard/CourseCard";
import useFetch from "../../../../Hooks/useFetch";

export default function coursesElement(props) {
   const userDatas = JSON.parse(localStorage.getItem("user"));
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}users/courses`, userDatas);
   };
   useEffect(() => {
      fetchData();
   }, []);
   //
   return <>{props.isSlice ? post.slice(0, 4).map((item) => <CourseCard {...item.course} isUserPanelStyle={true} />) : post.map((item) => <CourseCard {...item.course} isUserPanelStyle={true} />)}</>;
}
