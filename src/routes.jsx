import Home from "./pages/Home/Home";
import CourseCategory from "./pages/CourseCategory/CourseCategory";
import CourseInfoes from "./pages/CourseInfoes/CourseInfoes";
import Articles from "./pages/Articles/Articles";
import ArticleInfoes from "./pages/ArticleInfoes/ArticleInfoes";
import AllCourses from "./pages/AllCourses/AllCourses";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

//
let routes = [
   { path: "/", element: <Home /> },
   { path: "/course-category/:categoryName/", element: <CourseCategory /> },
   { path: "/course-category/:categoryName/:tabRoute", element: <CourseCategory /> },
   { path: "/course/:courseName/", element: <CourseInfoes /> },
   { path: "/blog", element: <Articles /> },
   { path: "/blog/:articleName/", element: <ArticleInfoes /> },
   { path: "/AllCourses", element: <AllCourses /> },
   { path: "/login", element: <Login /> },
   { path: "/register", element: <Register /> },
   //
   { path: "*", element: <span className=" text-white">kiiiir</span> },
];
export default routes;
