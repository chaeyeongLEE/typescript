import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,tsx}",
    "./src/pages/**/*.{js,ts,tsx}",
    "./src/components/**/*.{js,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
