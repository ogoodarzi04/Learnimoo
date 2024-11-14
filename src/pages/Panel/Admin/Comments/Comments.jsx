import React from "react";
import CommentElement from "./commentsElement";

export default function Comments() {
   return (
      <div className="Comments">
         <CommentElement isAddNewCmp={false} />
      </div>
   );
}
