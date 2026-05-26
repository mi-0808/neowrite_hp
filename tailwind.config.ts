import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#696969",
        line: "#E8E8E8",
        accent: "#0E5E5A",
        neo: {
          green: "#10B89A",
          teal: "#0E6F78",
          blue: "#1DA7D8",
          navy: "#073B4C",
          yellow: "#F4F536",
          mist: "#F4FFFC",
          sky: "#F2FBFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-jp)", "sans-serif"],
        jp: ["var(--font-noto-sans-jp)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
