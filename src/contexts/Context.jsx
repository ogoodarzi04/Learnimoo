import { createContext, useCallback, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
   const DOMAIN = `${JSON.stringify(import.meta.env.VITE_REACT_APP_DOMAIN).slice(1, -1)}`;
   //
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [token, setToken] = useState(false);
   const [userInfos, setUserInfos] = useState({});
   const [submenuHref, setSubmenuHref] = useState("");
   //
   const login = useCallback((userInfos, token) => {
      setToken(token);
      setIsLoggedIn(true);
      setUserInfos(userInfos);
      localStorage.setItem("user", JSON.stringify({ token }));
   }, []);

   const logout = useCallback(() => {
      setToken(false);
      setIsLoggedIn(false);
      setUserInfos({});
      localStorage.removeItem("user");
   });
   const localStorageData = JSON.parse(localStorage.getItem("user"));
   // console.log(localStorageData);
   const { getAllDatas, post, isPending, err } = useFetch();
   const fetchData = () => {
      getAllDatas(`${DOMAIN}auth/me`, localStorageData);
   };

   useEffect(() => {
      if (localStorageData) {
         // fetchData();
         // setIsLoggedIn(true);
         // setUserInfos(post);
         // console.log(userInfos);
         fetch(`${DOMAIN}auth/me`, {
            headers: {
               Authorization: `Bearer ${localStorageData.token}`,
            },
         })
            .then((res) => res.json())
            .then((userData) => {
               setIsLoggedIn(true);
               setUserInfos(userData);
            });
      }
   }, [login, isLoggedIn]);
   //
   return (
      <Context.Provider
         value={{
            isLoggedIn,
            token,
            userInfos,
            login,
            logout,
            submenuHref,
            setSubmenuHref,
            DOMAIN,
         }}
      >
         {children}
      </Context.Provider>
   );
};
