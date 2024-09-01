// import useFetch from "./useFetch";
import React, { useState } from "react";

import { FaLaptopCode } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { AiOutlinePython } from "react-icons/ai";
import { SiHyperskill } from "react-icons/si";
//
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
//
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

//
const navListMenuItems = [
   {
      id: 1,
      title: "فرانت اند",
      path: "/course-category/front-end/",
      subMenu: [
         { path: "/reservation", title: "آموزش HTML" },
         { path: "/testimonial", title: "آموزش CSS" },
         { path: "/testimonial", title: "آموزش FlexBox" },
         { path: "/testimonial", title: "آموزش CSS Grid" },
         { path: "/testimonial", title: "مینی پروژه های تخصصی با Css" },
         { path: "/testimonial", title: "آموزش Tailwind CSS" },
         { path: "/testimonial", title: "آموزش اصولی طراحی قالب" },
         { path: "/testimonial", title: "آموزش بوت استرپ" },
         { path: "/testimonial", title: "آموزش جاوااسکریپت" },
         { path: "/testimonial", title: "پروژه های تخصصی با JS" },
         { path: "/testimonial", title: "آموزش جامع ری اکت ReactJS" },
         { path: "/testimonial", title: "آموزش ویو جی اس" },
         { path: "/testimonial", title: "آموزش Vscod" },
      ],
   },
   {
      id: 2,
      title: "امنیت",
      path: "/course-category/security/",
      subMenu: [
         { path: "/reservation", title: "نقشه راه ورود به دنیای هک و امنیت" },
         { path: "/testimonial", title: "  شبکه با گرایش امنیت" },
         { path: "/testimonial", title: "   لینوکس با گرایش امنیت" },
         { path: "/testimonial", title: "  آموزش هکر قانونمند - CEH V11" },
         { path: "/testimonial", title: "مینی پروژه های تخصصی با Css" },
         { path: "/testimonial", title: " آموزش کالی لینوکس" },
         { path: "/testimonial", title: " آموزش پایتون سیاه" },
         { path: "/testimonial", title: " آموزش Burp Suite" },
         { path: "/testimonial", title: " آموزش جاوااسکریپت سیاه" },
      ],
   },
   {
      id: 3,
      title: "پایتون",
      path: "/course-category/python/",
      subMenu: [
         { path: "/reservation", title: "  دوره آموزش پایتون" },
         { path: "/testimonial", title: "پروژه های کاربردی با پایتون" },
         { path: "/testimonial", title: "بهینه نویسی کد ها در پایتون" },
         { path: "/testimonial", title: "آموزش جنگو" },
         { path: "/testimonial", title: "مصور سازی داده با پایتون" },
      ],
   },
   {
      id: 4,
      title: "پی اچ پی",
      path: "/course-category/php/",
      subMenu: [
         { path: "/reservation", title: "ربات تلگرام با PHP" },
         { path: "/testimonial", title: "پروژه های کاربردی با PHP" },
      ],
   },
   {
      id: 5,
      title: "ارتقای مهارتها",
      path: "/course-category/skill-up/",
      subMenu: [
         { path: "/reservation", title: "   الگوریتم و ساختمان داده" },
         { path: "/testimonial", title: "آموزش websocket" },
         { path: "/testimonial", title: "گیت و گیتهاب" },
         { path: "/testimonial", title: "آموزش GraphQL" },
         { path: "/testimonial", title: "توسعه کتابخانه با JS" },
         { path: "/testimonial", title: "افزونه نویسی با JS" },
         { path: "/testimonial", title: "Clean Code برای JS" },
         { path: "/testimonial", title: "دیپلوی پروژه های JS" },
         { path: "/testimonial", title: "دوره Mern Stack" },
         { path: "/testimonial", title: "آموزش رجکس (regex)" },
         { path: "/testimonial", title: "NPM برای جاوااسکریپت کارها" },
         { path: "/testimonial", title: "آموزش Vscode" },
      ],
   },
   {
      id: 6,
      title: "مقالات",
      path: "/blog",
      subMenu: [
         { path: "/reservation", title: " اچ تی ام ال" },
         { path: "/testimonial", title: "بوت استرپ" },
         { path: "/testimonial", title: "تست نفوذ و امنیت وب" },
         { path: "/testimonial", title: "جی کوئری" },
         { path: "/testimonial", title: "ری اکت جی اس" },
         { path: "/testimonial", title: "سی اس اس" },
         { path: "/testimonial", title: "طراحی سایت" },
         { path: "/testimonial", title: "ویو جی اس" },
      ],
   },
];
//
const roadmapBoxes = [
   {
      icon: <FaLaptopCode />,
      name: "فرانت اند",
      count: 28,
      bgColor: "from-[#FFB535] to-[#F2295B]",
      path: "",
      id: 1,
   },
   {
      icon: <MdSecurity />,
      name: "امنیت",
      count: 9,
      bgColor: "from-[#fbfb73] to-[#28E55D]",
      path: "",
      id: 2,
   },
   {
      icon: <AiOutlinePython />,
      name: "پایتون",
      count: 6,
      bgColor: "from-[#2E9EFF] to-[#9C33F7] ",
      path: "",
      id: 3,
   },
   {
      icon: <SiHyperskill />,
      name: "مهارت های نرم",
      count: 6,
      bgColor: "from-[#FF3571] to-[#880175]",
      path: "",
      id: 4,
   },
];
//

//
const GuidesDatas = [
   {
      id: 1,
      title: "تضمین کاملترین محتوا",
      des: "بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.",
      icon: <ImportContactsIcon style={{ fontSize: 46 }} />,
      iconColor: "text-blue-500",
      iconBgColor: "bg-light-blue-600/20",
   },
   {
      id: 2,
      title: "پشتیبانی دائمی",
      des: "هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.",
      icon: <SupportAgentIcon style={{ fontSize: 46 }} />,
      iconColor: "text-orange-500",
      iconBgColor: "bg-orange-600/20",
   },
   {
      id: 3,
      title: "پروژه محور در راستای بازار کار",
      des: "کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.",
      icon: <SignalCellularAltOutlinedIcon style={{ fontSize: 49, transform: "scaleX(-1) " }} />,
      iconColor: "text-green-500",
      iconBgColor: "bg-green-600/20",
   },
   {
      id: 4,
      title: "سراغ حرفه ای ها رفتیم",
      des: "به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.",
      icon: <LibraryAddCheckOutlinedIcon style={{ fontSize: 46, transform: "scaleX(-1) " }} />,
      iconColor: "text-red-500",
      iconBgColor: "bg-red-600/20",
   },
];

const HeadlineDatas = [
   {
      id: 1,
      title: "وب‌پک | webpack",
      state: "28 lesson . 3h 44m",
      episode: [
         { id: 1, title: "آشنایی با وب پک", time: "09:32" },
         { id: 2, title: "آشنایی با وب پک", time: "09:32" },
         { id: 3, title: "آشنایی با وب پک", time: "09:32" },
         { id: 4, title: "آشنایی با وب پک", time: "09:32" },
      ],
   },
   {
      id: 2,
      title: "هدیه دوره: آموزش جامع Vite",
      state: "9 lesson . 1h 9m",
      episode: [
         { id: 5, title: "آشنایی با وب پک", time: "09:32" },
         { id: 6, title: "آشنایی با وب پک", time: "09:32" },
         { id: 7, title: "آشنایی با وب پک", time: "09:32" },
         { id: 8, title: "آشنایی با وب پک", time: "09:32" },
      ],
   },
];

let coursesData = [
   { category: "front-end", title: "دوره های فرانت اند", leftSideTitle: "28 عنوان آموزشی", id: 1 },
   { category: "python", title: "دوره های پایتون", leftSideTitle: "13 عنوان آموزشی", id: 2 },
   { category: "security", title: "دوره های امنیت", leftSideTitle: "8 عنوان آموزشی", id: 3 },
   { category: "php", title: "دوره های پی اچ پی", leftSideTitle: "5 عنوان آموزشی", id: 4 },
   { category: "skill-up", title: "دوره های ارتقای مهارت ها", leftSideTitle: "10 عنوان آموزشی", id: 5 },
];
let tabData = [
   { title: "vue", price: 6900, tabName: "default", id: 1 },
   { title: "vue", price: 25200, tabName: "default", id: 2 },
   { title: "vue", price: 5005, tabName: "default", id: 3 },
   { title: "vue", price: 259600, tabName: "default", id: 4 },
   { title: "js", price: 25040, tabName: "cheapest", id: 5 },
   { title: "js", price: 251100, tabName: "cheapest", id: 6 },
   { title: "js", price: 751200, tabName: "cheapest", id: 7 },
   { title: "react", price: 90000, tabName: "expensive", id: 8 },
   { title: "react", price: 12003, tabName: "expensive", id: 9 },
   { title: "react", price: 4960, tabName: "expensive", id: 10 },
   { title: "react", price: 36970, tabName: "expensive", id: 11 },
   { title: "django", price: 12000, tabName: "popular", id: 12 },
   { title: "django", price: 986660, tabName: "popular", id: 13 },
   { title: "django", price: 32000, tabName: "popular", id: 14 },
   { title: "django", price: 29600, tabName: "popular", id: 15 },
];
let tabDataArt = [
   { title: "uml", tabName: "usual", id: 1 },
   { title: "ai", tabName: "usual", id: 2 },
   { title: "xml", tabName: "usual", id: 3 },
   { title: "scram", tabName: "usual", id: 4 },
   { title: "weblang", tabName: "newest", id: 5 },
   { title: "designe", tabName: "newest", id: 6 },
   { title: "immigration", tabName: "newest", id: 7 },
   { title: "game", tabName: "newest", id: 8 },
   { title: "employment", tabName: "oldest", id: 9 },
   { title: "senior", tabName: "oldest", id: 10 },
   { title: "jounior", tabName: "oldest", id: 11 },
   { title: "estaction", tabName: "oldest", id: 12 },
   { title: "starting", tabName: "opinionated", id: 13 },
   { title: "angular&react", tabName: "opinionated", id: 14 },
   { title: "book", tabName: "opinionated", id: 15 },
];
let tabItems = [
   { title: "همه دوره ها", path: "default", id: 1 },
   { title: "ارزان ترین", path: "cheapest", id: 2 },
   { title: "گران ترین", path: "expensive", id: 3 },
   { title: "پر مخاظب ها", path: "popular", id: 4 },
];
let tabItemsArt = [
   { title: "عادی", path: "usual", id: 1 },
   { title: "جدیدترین", path: "newest", id: 2 },
   { title: "قدیمی ترین", path: "oldest", id: 3 },
   { title: "پرنظرها", path: "opinionated", id: 4 },
];
let switchBox = [
   { title: "فقط دوره های رایگان", path: "", id: 1 },
   { title: "در حال پیش فروش", path: "", id: 2 },
   { title: "دوره ها خریداری شده", path: "", id: 3 },
];

let boxDetails = [
   { id: 1, title: "وضعیت دوره", state: "تکمیل شده", icon: <HiOutlineInformationCircle style={{ fontSize: 45 }} /> },
   { id: 2, title: "مدت زمان دوره", state: "56 ساعت", icon: <IoTimeOutline style={{ fontSize: 45 }} /> },
   { id: 3, title: "آخرین بروزرسانی", state: "1402/12/21", icon: <HiOutlineCalendarDays style={{ fontSize: 45 }} /> },
   { id: 4, title: "روش پشتیبانی", state: "آنلاین", icon: <HiOutlineUsers style={{ fontSize: 45 }} /> },
   { id: 5, title: "پیش نیاز", state: "ReactJS", icon: <HiOutlineBriefcase style={{ fontSize: 45 }} /> },
   { id: 6, title: "نوع مشاهده", state: "به صورت آنلاین", icon: <HiOutlineVideoCamera style={{ fontSize: 45 }} /> },
];
const RelatedCourseDatas = [
   { id: 1, title: "آموزش جامع و پروژه محور Tailwind css", img: "/img/ezgif.com-jpg-to-webp-converted-6-1-768x432.webp" },
   { id: 2, title: "آموزش جاوا اسکریپت رایگان مقدماتی تا پیشرفته + مینی پروژه", img: "/img/ezgif.com-jpg-to-webp-converted-6-1-768x432.webp" },
];
//
export { navListMenuItems, roadmapBoxes, GuidesDatas, coursesData, tabData, tabItems, switchBox, boxDetails, HeadlineDatas, RelatedCourseDatas, tabItemsArt, tabDataArt };
