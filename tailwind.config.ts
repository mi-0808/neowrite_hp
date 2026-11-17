import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // アクセシビリティ要件：本文16px以上・注釈も14px未満にしない。
      // 既存の text-xs / text-sm をサイト全体でこの下限に引き上げる
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.375rem" }],
        sm: ["1rem", { lineHeight: "1.625rem" }],
      },
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
          orange: "#FF7718",
          mist: "#F4FFFC",
          sky: "#F2FBFF",
          // 白背景の小さめテキスト用（WCAG AA 4.5:1 以上）。塗り用の上記4色は文字色に使わない
          blueInk: "#0F6E92",
          greenInk: "#0B7A66",
          orangeInk: "#B34E00",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-jp)", "sans-serif"],
        jp: ["var(--font-noto-sans-jp)", "var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scrollhint: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(250%)" },
        },
        "blink-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 5s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        scrollhint: "scrollhint 1.8s ease-in-out infinite",
        "blink-dot": "blink-dot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
