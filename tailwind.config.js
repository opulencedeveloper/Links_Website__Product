const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        primary: "#215957",
        primaryshade: "#59C1BD",
        primaryshade1: "#59C1BD",
        primaryshade2: "#F0F9F9",
        secondary: "#737373",
        secondary2: "#FD8C01", 
        secondary3: "#D4D4D8"
        // secondaryshade: "#EBEBEB",
        // secondaryshade1: "#FAFAFA",
        // secondaryshade2: "#FDFDFD"
      },
      blur: {
        '8xl': '200px', 
      },
    },
  },
  plugins: [],
};
