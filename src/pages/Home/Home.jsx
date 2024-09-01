import React from "react";
import LastCourse from "../../Components/LastCourse/LastCourse";
import RoadMap from "../../Components/RoadMap/RoadMap";
import PopularCourse from "../../Components/PopularCourse/PopularCourse";
import Guide from "../../Components/Guide/Guide";
import ArticleSec from "../../Components/Article/ArticleSec";
import Landing from "../../Components/Header/Landing/Landing";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
//
export default function Home() {
   return (
      <>
         <Header />
         <div className="grid  relative container">
            <Landing />
            <LastCourse title="آخرین دوره های لرنیمو" des="سکوی پرتاپ شما به سمت موفقیت" color="bg-limon-color" />
            <RoadMap />
            <PopularCourse title="پرطرفدار ترین دوره ها" des="دوره های محبوب و پروژه محور سبزلرن" color="bg-sabz-color" btnHref="/AllCourses"></PopularCourse>
            <Guide />
            <PopularCourse title="جدیدترین دوره ها" des="یادگیری و رشد توسعه فردی" color="bg-purple-600"></PopularCourse>
            <ArticleSec />
            <LastCourse title="محبوب ترین دوره ها" des="پرمخاطب ترین دوره های رایگان سبزلرن" color="bg-blue-500" btnHref="/AllCourses" />
         </div>
         <Footer />
      </>
   );
}
