import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1440px",
    },

    colors: {
      purple: "hsl(259, 100%, 65%)",
      "light-red": "hsl(0, 100%, 67%)",
      white: "hsl(0, 0%, 100%)",
      "off-white": "hsl(0, 0%, 94%)",
      "light-grey": "hsl(0, 0%, 86%)",
      "smokey-grey": "hsl(0, 1%, 44%)",
      "off-black": "hsl(0, 0%, 8%)",
    },

    fontSize: {
      "mobile-lg": ["56px", { lineHeight: "110%", letterSpacing: "-.02em" }],
      "mobile-md": ["20px", { letterSpacing: ".01em" }],
      "mobile-sm": ["12px", { letterSpacing: ".25em" }],
      "mobile-error": ["12px", { lineHeight: "100%" }],
    },

    fontFamily: {
      poppins: ["var(--font-poppins)"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
