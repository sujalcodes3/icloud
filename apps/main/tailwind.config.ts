import { withUt } from "uploadthing/tw";
import type { Config } from "tailwindcss";

//const config: Config = {
//  content: [
//    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//  ],
//  theme: {
//    extend: {
//      colors: {
//        background: "var(--background)",
//        foreground: "var(--foreground)",
//      },
//    },
//  },
//  darkMode: "class",
//};
//export default config;
export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
});
