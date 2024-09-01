import React from "react";
import "/main.css";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
//
import "./reset.css";
import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/helpers.css";
import "./styles/defaults.css";
//
import { BrowserRouter } from "react-router-dom";
import CmsApp from "./CmsApp";
ReactDOM.createRoot(document.getElementById("root")).render(
   <>
      <BrowserRouter>
         <CmsApp />
      </BrowserRouter>
   </>
);
