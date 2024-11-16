import React, { useEffect, useState } from "react";
import LastCourse from "../../Components/LastCourse/LastCourse";
import RoadMap from "../../Components/RoadMap/RoadMap";
import PopularCourse from "../../Components/PopularCourse/PopularCourse";
import Guide from "../../Components/Guide/Guide";
import LastArticles from "../../Components/LastArticles/LastArticles";
import Landing from "../../Components/Header/Landing/Landing";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import useFetch from "../../Hooks/useFetch";
//
export default function Home() {
   //
   const [allCourses, setAllcourses] = useState([]);
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}courses`, false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   useEffect(() => {
      setAllcourses(post);
      // console.log(allCourses);
   }, [post]);
   //
   return (
      <>
         <Header />
         <div className="grid  relative container">
            <Landing />
            <LastCourse getAllDatas={getAllDatas} items={allCourses} title="آخرین دوره های لرنیمو" des="سکوی پرتاپ شما به سمت موفقیت" color="bg-limon-color" />
            <RoadMap />
            <PopularCourse title="پرطرفدار ترین دوره ها" des="دوره های محبوب و پروژه محور سبزلرن" color="bg-sabz-color" btnHref="/AllCourses"></PopularCourse>
            <Guide />
            <PopularCourse title="جدیدترین دوره ها" des="یادگیری و رشد توسعه فردی" color="bg-purple-600"></PopularCourse>
            <LastArticles />
            <LastCourse title="محبوب ترین دوره ها" des="پرمخاطب ترین دوره های رایگان سبزلرن" color="bg-blue-500" btnHref="/AllCourses" />
         </div>
         <Footer />
      </>
   );
}
