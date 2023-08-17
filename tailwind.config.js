/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      // sm: "0.875rem",
      sm: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
        },
      ],
      base: "1rem",
      xl: "1.25rem",
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "2.3rem",
        {
          lineHeight: "2.8rem",
          letterSpacing: "-0.02em",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "-0.04em",
          fontWeight: "500",
        },
      ],
      "5xl": "3.5rem",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".045em",
      widest: ".1em",
      widest: ".25em",
    },
  },
  plugins: [],
};
