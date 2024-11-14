import React from "react";
import ArticlesElement from "./articlesElement";

//
export default function Articles() {
   return (
      <>
         <div className="Articles">
            <ArticlesElement isAddNewCmp={true} />
         </div>
      </>
   );
}
