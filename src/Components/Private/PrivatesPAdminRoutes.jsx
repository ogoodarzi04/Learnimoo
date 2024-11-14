import React, { useContext } from "react";
import { Context } from "../../contexts/Context";
import { useNavigate } from "react-router-dom";

export default function PrivatesPAdminRoutes({ children }) {
   const userDatas = useContext(Context);
   const navigate = useNavigate();
   return <>{userDatas?.userInfos?.role === "ADMIN" ? <>{children}</> : navigate("/login")}</>;
}
