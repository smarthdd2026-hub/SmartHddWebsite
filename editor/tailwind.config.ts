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
        primary: {
          DEFAULT: '#1E3A8A',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          50: '#ECFEFF',
          700: '#0E7490',
        },
        accent: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
        },
      },
    },
  },
  plugins: [],
};
export default config;
