import React, { useContext, useEffect } from "react";
import CourseCard from "../../../../Components/CourseCard/CourseCard";
import useFetch from "../../../../Hooks/useFetch";
import { Context } from "../../../../contexts/Context";

export default function coursesElement(props) {
   const { DOMAIN } = useContext(Context);
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
