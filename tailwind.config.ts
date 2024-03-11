import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#3D3D3D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "project-bg": "url('/projectCardBG.svg')",
        "project-detail-card-bg": "linear-gradient(to bottom, #1C1C1C, #0D0D0D, #0E0E0E)",
      },
      boxShadow: {
        "3xl": "6px 6px 5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;