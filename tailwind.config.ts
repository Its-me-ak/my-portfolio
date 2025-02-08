import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vscodeBg: "#1e1e1e",
        vscodeSidebar: "#252526",
        vscodeBorder: "#3c3c3c",
        vscodeText: "#d4d4d4",
        vscodeAccent: "#007acc"
      },
    },
  },
  plugins: [],
} satisfies Config;
