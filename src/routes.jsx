import Home from "./pages/Home/Home";
import CourseCategory from "./pages/CourseCategory/CourseCategory";
import CourseInfoes from "./pages/CourseInfoes/CourseInfoes";
import Articles from "./pages/Articles/Articles";
import ArticleInfoes from "./pages/ArticleInfoes/ArticleInfoes";
import AllCourses from "./pages/AllCourses/AllCourses";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";
import Conditions from "./pages/conditions/Conditions";
import GloballSearch from "./pages/GloballSearch/GloballSearch";
import Cart from "./pages/Cart/Cart";
//panelPages//
import Admin from "./pages/Panel/Admin/Admin";
import Users from "./pages/Panel/Admin/Users/Users";
import AdminCourses from "./pages/Panel/Admin/AdminCourses/AdminCourses";
import Menus from "./pages/Panel/Admin/Menus/Menus";
import MainAdmin from "./pages/Panel/Admin/MainAdminPage/MainAdmin";
import Category from "./pages/Panel/Admin/Category/Category";
import Tickets from "./pages/Panel/Admin/Tickets/Tickets";
import ArticlesAdmin from "./pages/Panel/Admin/Articles/Articles";
import Sessions from "./pages/Panel/Admin/Sessions/Sessions";
import SessionInfo from "./pages/SessionInfo/SessionInfo";
import Comments from "./pages/Panel/Admin/Comments/Comments";
import Discount from "./pages/Panel/Admin/Offs/Discount";
import Draft from "./pages/Panel/Admin/Articles/Draft";
//
import User from "./pages/Panel/User/User";
import MainUser from "./pages/Panel/User/MainUserPage/MainUser";
import Courses from "./pages/Panel/User/courses/Courses";
import Edit from "./pages/Panel/User/edit/Edit";
import TicketsUser from "./pages/Panel/User/tickets/Tickets";
import Addticket from "./pages/Panel/User/add_ticket/Addticket";
import ViewTicket from "./pages/Panel/User/view_ticket/ViewTicket";
//
import PrivatesPAdminRoutes from "./Components/Private/PrivatesPAdminRoutes";
import DisCounts from "./pages/Panel/Admin/DisCounts/DisCounts";
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
