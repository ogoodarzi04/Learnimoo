import { lazy } from "react";
const Home = lazy(() => import("./pages/Home/Home"));
const CourseCategory = lazy(() => import("./pages/CourseCategory/CourseCategory"));
const CourseInfoes = lazy(() => import("./pages/CourseInfoes/CourseInfoes"));
const Articles = lazy(() => import("./pages/Articles/Articles"));
const ArticleInfoes = lazy(() => import("./pages/ArticleInfoes/ArticleInfoes"));
const AllCourses = lazy(() => import("./pages/AllCourses/AllCourses"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Error = lazy(() => import("./pages/Error/Error"));
const Conditions = lazy(() => import("./pages/conditions/Conditions"));
const GloballSearch = lazy(() => import("./pages/GloballSearch/GloballSearch"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
//panelPages//
const Admin = lazy(() => import("./pages/Panel/Admin/Admin"));
const Users = lazy(() => import("./pages/Panel/Admin/Users/Users"));
const AdminCourses = lazy(() => import("./pages/Panel/Admin/AdminCourses/AdminCourses"));
const Menus = lazy(() => import("./pages/Panel/Admin/Menus/Menus"));
const MainAdmin = lazy(() => import("./pages/Panel/Admin/MainAdminPage/MainAdmin"));
const Category = lazy(() => import("./pages/Panel/Admin/Category/Category"));
const Tickets = lazy(() => import("./pages/Panel/Admin/Tickets/Tickets"));
const ArticlesAdmin = lazy(() => import("./pages/Panel/Admin/Articles/Articles"));
const Sessions = lazy(() => import("./pages/Panel/Admin/Sessions/Sessions"));
const SessionInfo = lazy(() => import("./pages/SessionInfo/SessionInfo"));
const Comments = lazy(() => import("./pages/Panel/Admin/Comments/Comments"));
const Discount = lazy(() => import("./pages/Panel/Admin/Offs/Discount"));
const Draft = lazy(() => import("./pages/Panel/Admin/Articles/Draft"));
//
const User = lazy(() => import("./pages/Panel/User/User"));
const MainUser = lazy(() => import("./pages/Panel/User/MainUserPage/MainUser"));
const Courses = lazy(() => import("./pages/Panel/User/courses/Courses"));
const Edit = lazy(() => import("./pages/Panel/User/edit/Edit"));
const TicketsUser = lazy(() => import("./pages/Panel/User/tickets/Tickets"));
const Addticket = lazy(() => import("./pages/Panel/User/add_ticket/Addticket"));
const ViewTicket = lazy(() => import("./pages/Panel/User/view_ticket/ViewTicket"));
//
const PrivatesPAdminRoutes = lazy(() => import("./Components/Private/PrivatesPAdminRoutes"));
const DisCounts = lazy(() => import("./pages/Panel/Admin/DisCounts/DisCounts"));
//
let routes = [
   { path: "/", element: <Home /> },
   { path: "/category-info/:categoryName", element: <CourseCategory /> },
   { path: "/course-info/:courseName/", element: <CourseInfoes /> },
   { path: "/blog", element: <Articles /> },
   { path: "/blog/:articleName/", element: <ArticleInfoes /> },
   { path: "/blog/category/:articleName/", element: <ArticleInfoes /> },
   { path: "/AllCourses", element: <AllCourses /> },
   { path: "/login", element: <Login /> },
   { path: "/register", element: <Register /> },
   { path: "/conditions", element: <Conditions /> },
   { path: "/search/:value", element: <GloballSearch /> },
   { path: "lesson/:courseName/:sessionID", element: <SessionInfo /> },
   { path: "/cart/", element: <Cart /> },
   {
      path: "/p-admin/*",
      element: (
         <PrivatesPAdminRoutes>
            <Admin />
         </PrivatesPAdminRoutes>
      ),
      children: [
         { path: "", element: <MainAdmin /> },
         { path: "courses", element: <AdminCourses /> },
         { path: "users", element: <Users /> },
         { path: "menus", element: <Menus /> },
         { path: "articles", element: <ArticlesAdmin /> },
         { path: "articles/draft", element: <Draft /> },
         { path: "category", element: <Category /> },
         { path: "tickets", element: <Tickets /> },
         { path: "sessions", element: <Sessions /> },
         { path: "comments", element: <Comments /> },
         { path: "offs", element: <Discount /> },
         { path: "discounts", element: <DisCounts /> },
      ],
   },
   //
   {
      path: "/my-account/*",
      element: <User />,
      children: [
         { path: "", element: <MainUser /> },
         { path: "courses", element: <Courses /> },
         { path: "edit-account", element: <Edit /> },
         { path: "tickets", element: <TicketsUser /> },
         { path: "add_ticket", element: <Addticket /> },
         { path: "view_ticket", element: <ViewTicket /> },
         { path: "*", element: <Error /> },
      ],
   },
   //
   { path: "*", element: <Error /> },
];
export default routes;
