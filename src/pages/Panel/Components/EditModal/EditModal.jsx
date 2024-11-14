import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDom from "react-dom";
//
// import useEdit from "../../../../Hooks/useEdit";
//

//
export default function EditModal(props) {
   return ReactDom.createPortal(<>{props.children}</>, document.getElementById("modal"));
}

//
