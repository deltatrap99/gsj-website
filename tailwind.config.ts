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
        "gsj-brand-blue": "#003BE6", // The vibrant electric blue from the brochure
        "gsj-brand-blue-dark": "#002BB3",
        "gsj-brand-blue-light": "#336AF9",
        "gsj-accent-cyan": "#00E0FF", // The light cyan from the age badge
        "gsj-gold": "#D4AF37",
        "gsj-white": "#FFFFFF",
        "gsj-gray": "#F4F7FB",
        "gsj-text": "#1A2530",
        "gsj-text-secondary": "#57667A",
      },
      fontFamily: {
        "sans": ["var(--font-sans)", "Inter", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
