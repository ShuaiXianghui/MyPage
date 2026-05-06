import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "#fef7ed",
          text: "#4a3728",
          heading: "#5c3d2e",
          accent: "#d4a574",
          muted: "#b8956a",
          border: "#e8d5c4",
          tag: "#faf5ed",
        },
        "warm-dark": {
          bg: "#1e1b18",
          text: "#d4c5b2",
          heading: "#e8d5c4",
          accent: "#d4a574",
          muted: "#a09080",
          border: "#3a3530",
          tag: "#2a2520",
        },
      },
    },
  },
  plugins: [],
};
export default config;
