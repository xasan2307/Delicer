/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        home: "#FF5634",
        myLink: "#121212",
        heroP: "#656565",
        bg: "#FAFAFA",
        oval: "#EEF8FF",
      },
      fontFamily: {
        myFont: ["Roboto", "san-serif"],
      },
      lineHeight: {
        myheidht: "18px",
        heroH: "72px",
        aboutH: "54px",
      },
      margin: {
        myMrg: "140px",
        mYsiz: "274px",
        mySiz: "180px",
        forFoot: "60px",
      },
      boxShadow: {
        "3xl": "0px 2px 12px rgba(16, 16, 16, 0.08);",
      },
      width: {
        myW: "86px",
        cardW: "350px",
        fiftySev: "597px",
      },
      fontSize: {
        mySize: "56px",
      },
    },
  },
  plugins: [],
};
