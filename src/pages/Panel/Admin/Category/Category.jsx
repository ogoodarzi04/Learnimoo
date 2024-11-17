import React from "react";
import CategoryElement from "./CategoryElement";

export default function Category() {
   return (
      <>
         {" "}
         <div className="Category">
            <CategoryElement isAddNewCmp={true} />
         </div>
      </>
   );
}
