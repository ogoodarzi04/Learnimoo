// import React from "react";

// function toggleTheme() {
//    setTheme((prevTheme) => {
//       const newTheme = prevTheme === "w" ? "dark" : "w";
//       localStorage.setItem("theme", newTheme);
//       return newTheme;
//    });
// }
// export default function LightMode() {
//    const [theme, setTheme] = useState(() => {
//       const initialTheme = localStorage.getItem("theme");
//       return initialTheme ? initialTheme : "w";
//    });
//    useEffect(() => {
//       document.querySelector("body").className = ` ${theme}`;
//    }, [theme]);
//    return <div>LightMode</div>;
// }
// export { toggleTheme };
