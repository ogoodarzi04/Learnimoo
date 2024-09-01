const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      // container: {
      //    center: true,
      //    padding: {
      //       // DEFAULT: "16px",
      //       md: "335px",
      //    },
      // },
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1278px",
      },
      extend: {
         colors: {
            "header-color": "rgb(36,42,56)",
            "theme-color": "rgb(17,24,39)",
            "icon-color": "#ffffff0d",
            "limon-color": "#fbfb73",
            "sabz-color": "#3CA117",
            "gray-color": "#c2c2c2",
            "border-color": "#ffffff1a",
         },
      },
   },

   plugins: [],
});
//
