/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Fredoka One", "cursive"],
        content: ["Montserrat", "sans-serif"],
      },
      colors: {
        mygreen: "#5FA55A",
        myblue: "#01B4BC",
        myyellow: "#F6D51F",
        myorange: "#FA8925",
        mypink: "#FA5457",
        mywhite: "#cdcdd0",
        myblack: "#121212",
      },
    },
  },
  plugins: [],
};
