import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.65rem",
      },
      colors: {
        light: "#6b06d6",
        dark: "#b47df0",
        contentBoxLight: "#ffffff",
        contentBoxDark: "#000000",
        bgLight: "#f5f5f5",
        bgDark: "#080808",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        navlight: "0px 0px 20px 3px rgba(0, 0, 0, 0.1);", // dark shadow
        navdark: "0px 0px 20px 5px rgb(255, 255, 255, 0.1);", // light shadow
        boxlight: "0px 0px 30px 1px rgb(0, 0, 0, 0.08)",
        boxdark: "0px 0px 30px 1px rgb(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
