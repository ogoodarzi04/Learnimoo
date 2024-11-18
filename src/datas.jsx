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
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";

//
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
      name: "بک اند",
      count: 9,
      bgColor: "from-[rgb(255,235,59)] to-[#28E55D]",
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
      count: 0,
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
      titlee: "تضمین کاملترین محتوا",
      des: "بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.",
      icon: <ImportContactsIcon style={{ fontSize: 46 }} />,
      iconColor: "text-blue-500",
      iconBgColor: "bg-light-blue-600/20",
   },
   {
      id: 2,
      titlee: "پشتیبانی دائمی",
      des: "هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.",
      icon: <SupportAgentIcon style={{ fontSize: 46 }} />,
      iconColor: "text-orange-500",
      iconBgColor: "bg-orange-600/20",
   },
   {
      id: 3,
      titlee: "پروژه محور در راستای بازار کار",
      des: "کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.",
      icon: <SignalCellularAltOutlinedIcon style={{ fontSize: 49, transform: "scaleX(-1) " }} />,
      iconColor: "text-green-500",
      iconBgColor: "bg-green-600/20",
   },
   {
      id: 4,
      titlee: "سراغ حرفه ای ها رفتیم",
      des: "به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.",
      icon: <LibraryAddCheckOutlinedIcon style={{ fontSize: 46, transform: "scaleX(-1) " }} />,
      iconColor: "text-red-500",
      iconBgColor: "bg-red-600/20",
   },
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
   { title: "فقط دوره های رایگان", path: "&free_courses", id: 1, isCheked: false },
   { title: "در حال پیش فروش", path: "&presells_courses", id: 2, isCheked: false },
   // { title: "دوره ها خریداری شده", path: "", id: 3 },
];

let boxDetails = [
   {
      id: 1,
      title: "وضعیت دوره",

      icon: <HiOutlineInformationCircle style={{ fontSize: 45 }} />,
   },
   { id: 2, title: "زمان برگزاری", icon: <IoTimeOutline style={{ fontSize: 45 }} /> },
   { id: 3, title: "آخرین بروزرسانی", icon: <HiOutlineCalendarDays style={{ fontSize: 45 }} /> },
   { id: 4, title: "روش پشتیبانی", icon: <HiOutlineUsers style={{ fontSize: 45 }} /> },
   { id: 5, title: "پیش نیاز", icon: <HiOutlineBriefcase style={{ fontSize: 45 }} /> },
   { id: 6, title: "نوع مشاهده", icon: <HiOutlineVideoCamera style={{ fontSize: 45 }} /> },
];
let sessionBoxDetails = [
   {
      id: 1,
      title: "وضعیت دوره",
      icon: <HiOutlineInformationCircle style={{ fontSize: 45 }} />,
   },
   { id: 2, title: "تاریخ انتشار", icon: <IoTimeOutline style={{ fontSize: 45 }} /> },
   { id: 3, title: "تعداد دانشجو", icon: <PiStudent style={{ fontSize: 45 }} /> },
];
//
const checkBoxes = [
   { id: 1, title: "فرانت اند", path: "frontend" },
   { id: 2, title: "بک اند", path: "backend" },
   { id: 3, title: "مهارت های نرم", path: "softskills" },
   { id: 4, title: "امنیت", path: "security" },
   { id: 5, title: "پایتون", path: "python" },
   { id: 6, title: "فریلنسری", path: "freelance" },
   { id: 7, title: "اندروید", path: "android" },
   { id: 8, title: "مقالات", path: "blog" },
];
//
const noticePanelBox = [
   {
      id: 1,
      title: "بازدهی امروز",
      count: "15,000,000",
      updatedTime: "از دیروز",
      regress: "",
      progress: "4.8",
      svg: (
         <svg className=" md:size-[175px] size-[190px] pe-14 md:!pe-0" viewBox="0 0 107 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M1.62866 22.7746C7.50257 17.4702 13.3764 17.4702 19.0056 21.0065C24.8795 24.5427 33.861 10.3978 39.7349 22.7746C45.3641 35.1514 45.4077 22.8766 51.0369 33.4853C56.9108 44.094 58.0061 33.5793 63.88 19.4344C69.5091 5.28942 74.1763 25.5491 79.8054 9.63605C85.6793 -6.27701 99.527 6.86152 102.464 6.86152H105.401"
               stroke="url(#paint0_linear_1_797)"
               stroke-width="2.04951"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <defs>
               <linearGradient id="paint0_linear_1_797" x1="1.62866" y1="19.7892" x2="105.401" y2="19.7892" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#92FE9D" />
                  <stop offset="1" stop-color="#00C9FF" />
                  <stop offset="1" stop-color="#00C9FF" />
               </linearGradient>
            </defs>
         </svg>
      ),
   },
   {
      id: 2,
      title: "سفارشات امروز",
      count: "7,506",
      updatedTime: "از دیروز",
      regress: "3.5",
      progress: "",
      svg: (
         <svg className=" size-96 " viewBox="0 0 152 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_787)">
               <path
                  d="M24.3491 48.4844C30.1726 53.7887 35.6056 41.8024 41.1865 38.2661C47.01 34.7299 52.9812 39.6438 58.8047 27.2669C64.3856 14.8901 68.2018 44.141 73.7826 33.5323C79.6061 22.9236 89.3504 27.0899 95.1739 41.2348C100.755 55.3798 107.928 39.3216 113.509 55.2346C119.333 71.1477 121.407 64.3974 124.319 64.3974H127.231"
                  stroke="url(#paint0_linear_1_787)"
                  stroke-width="2.04951"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </g>
            <defs>
               <filter id="filter0_f_1_787" x="0.39065" y="0.195811" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_787" />
               </filter>
               <linearGradient id="paint0_linear_1_787" x1="24.3491" y1="44.9871" x2="127.231" y2="44.9871" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#92FE9D" />
                  <stop offset="1" stop-color="#00C9FF" />
                  <stop offset="1" stop-color="#00C9FF" />
               </linearGradient>
            </defs>
         </svg>
      ),
   },
   {
      id: 3,
      title: "بازدید های امروز",
      count: "17,058",
      updatedTime: "از دیروز",
      regress: "",
      progress: "9.3",
      svg: (
         <svg className=" size-[220px]  " viewBox="0 0 151 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_776)">
               <path
                  d="M24.0256 40.3061C29.8454 35.0017 35.6652 35.0017 41.2426 38.5379C47.0624 42.0742 52.6397 49.1467 58.4595 61.5235C64.0368 73.9003 69.8567 53.6431 75.434 64.2518C81.2538 74.8605 86.8311 78.3967 92.651 64.2518C98.2283 50.1068 104.048 56.2191 109.625 40.3061C115.445 24.393 121.023 24.393 123.932 24.393H126.842"
                  stroke="url(#paint0_linear_1_776)"
                  stroke-width="2.04951"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </g>
            <defs>
               <filter id="filter0_f_1_776" x="0.0670414" y="0.434429" width="150.734" height="97.1059" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_776" />
               </filter>
               <linearGradient id="paint0_linear_1_776" x1="24.0256" y1="48.9871" x2="126.842" y2="48.9871" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#92FE9D" />
                  <stop offset="1" stop-color="#00C9FF" />
                  <stop offset="1" stop-color="#00C9FF" />
               </linearGradient>
            </defs>
         </svg>
      ),
   },
];
const sideBarMenus = [
   { id: 1, title: "صفحه اصلی", path: "/p-admin/", icon: <AiOutlineHome /> },
   { id: 2, title: "دوره ها", path: "/p-admin/courses", icon: <MdProductionQuantityLimits /> },
   { id: 3, title: "دسته بندی ها", path: "/p-admin/category", icon: <BiCommentDetail /> },
   { id: 4, title: "کاربران", path: "/p-admin/users", icon: <FiUsers /> },
   { id: 5, title: "مقالات", path: "/p-admin/articles", icon: <BsBagCheck /> },
   { id: 6, title: "جلسات", path: "/p-admin/sessions", icon: <BsBagCheck /> },
   { id: 7, title: "منو ها", path: "/p-admin/menus", icon: <BsBagCheck /> },
   { id: 8, title: "کامنت ها", path: "/p-admin/comments", icon: <BsBagCheck /> },
   { id: 9, title: "کدهای تخفیف ", path: "/p-admin/offs", icon: <BsCurrencyDollar /> },
   { id: 10, title: "تیکت ها", path: "/p-admin/tickets", icon: <BsBagCheck /> },
];
const sideBarUserMenus = [
   { id: 1, title: "پیشخوان", path: "/my-account", icon: <AiOutlineHome style={{ fontSize: 24 }} /> },
   { id: 2, title: "دوره های من", path: "/my-account/courses", icon: <MdProductionQuantityLimits style={{ fontSize: 24 }} /> },
   { id: 3, title: "تیکت ها", path: "/my-account/tickets", icon: <BiCommentDetail style={{ fontSize: 24 }} /> },
   { id: 4, title: "جزییات حساب", path: "/my-account/edit-account", icon: <FiUsers style={{ fontSize: 24 }} /> },
];
export { sideBarMenus, sideBarUserMenus, noticePanelBox, checkBoxes, roadmapBoxes, GuidesDatas, tabData, tabItems, switchBox, boxDetails, tabItemsArt, sessionBoxDetails };
