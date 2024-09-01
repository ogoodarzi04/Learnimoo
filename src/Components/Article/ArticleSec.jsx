import React from "react";
import Article from "./Article";
import TitleSection from "../TitleSection/TitleSection";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
//

export default function ArticleSec() {
   return (
      <>
         <div className="WeblagCard-Wrapper mt-80">
            <div className="TitleSec">
               <TitleSection
                  title="وبلاگ آموزشی سبزلرن"
                  des="مقالات بروز برنامه نویسی"
                  color="bg-limon-color"
                  btnHref={"/blog"}
                  leftBtnText={
                     <div className="md:hover:bg-limon-color  md:hover:text-gray-color rounded-full transition-colors gap-x-2 md:px-4 md:py-3.5">
                        <span>
                           مشاهده همه مقالات
                           <KeyboardBackspaceIcon style={{ fontSize: 30 }} className=" me-3 " />
                        </span>
                     </div>
                  }
               />
            </div>
            <div className="CardsSec mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-11 gap-x-11 lg:gap-x-7 xl:gap-x-0 ">
               <Article />
               <Article />
               <Article />
               <Article />
            </div>
         </div>
      </>
   );
}
