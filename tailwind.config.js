/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "scale-up": {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "60%": {
            transform: "scale(0.8)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "scale-up": "scale-up 300ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
