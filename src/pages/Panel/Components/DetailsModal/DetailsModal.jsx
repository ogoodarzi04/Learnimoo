import React, { useEffect, useMemo, useState } from "react";
import ReactDom from "react-dom";
//

export default function DetailsModal(props) {
   console.log(props.children);
   //
   //

   ///
   return ReactDom.createPortal(<>{props.children}</>, document.getElementById("modal"));
}
