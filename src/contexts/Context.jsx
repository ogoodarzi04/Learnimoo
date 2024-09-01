import { createContext,useState } from "react";
 export const Context=createContext()
 export const ContextProvider=({children})=>{
  const [username, setUserName] = useState("Mohammad Amin");
  const [userid, setUserid] = useState(1);
return(
    <Context.Provider value={{username}}>
        {children}
    </Context.Provider>
)
 }