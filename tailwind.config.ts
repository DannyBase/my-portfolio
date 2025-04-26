import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
       teal: {
       100:"#E6F0ED",
       200:"#B3CCC5",
       300:"#80A89D",
       400:"#4D8475",
       500:"1A3C34",
       600:"#17362F",
       700:"#142F29",
       800:"#102723",
       900:"#0D201D",
       950:"#091714"
       }
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
        poppins: ['var(--font-poppins)'],
      },
      animation: {
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "move-left": {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          },
        },
        "move-right": {
          '0%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
