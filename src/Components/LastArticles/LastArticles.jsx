import React, { useContext, useEffect } from "react";
import Article from "./Article";
import TitleSection from "../TitleSection/TitleSection";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import useFetch from "../../Hooks/useFetch";
import { Context } from "../../contexts/Context";
//

export default function LastArticles() {
   const { DOMAIN } = useContext(Context);
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}articles`, false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   return (
      <>
         <div className="WeblagCard-Wrapper mt-80">
            <div className="TitleSec">
               <TitleSection
                  isLeftSideShadow={true}
                  title="وبلاگ آموزشی لرنیمو"
                  des="مقالات بروز برنامه نویسی"
                  color="bg-limon-color"
                  btnHref={"/blog"}
                  leftBtnText={
                     <div className="md:hover:bg-limon-color dark:hover:bg-yellow-600 dark:hover:text-white  md:hover:text-gray-color rounded-full transition-colors gap-x-2 md:px-4 md:py-3.5">
                        <span>
                           مشاهده همه مقالات
                           <KeyboardBackspaceIcon style={{ fontSize: 30 }} className=" me-3 " />
                        </span>
                     </div>
                  }
               />
            </div>
            <div className="CardsSec mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-11 gap-x-11 lg:gap-x-7 xl:gap-x-0 ">
               {post.slice(0, 4).map((item) => {
                  return <Article {...item} />;
               })}
            </div>
         </div>
      </>
   );
}
