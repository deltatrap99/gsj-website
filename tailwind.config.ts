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
        "gsj-navy": "#002147",
        "gsj-gold": "#D4AF37",
        "gsj-gold-light": "#E5C563",
        "background-light": "#FFFFFF",
        "background-soft": "#F9FAFB",
        "primary": "#003366",
        "secondary": "#775a19",
        "accent": "#D4AF37",
        "accent-green": "#C5A059",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
