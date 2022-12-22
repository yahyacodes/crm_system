/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        // => @media (min-width: 400px) { ... }

        md: "547px",
        // => @media (min-width: 547px) { ... }

        lg: "768px",
        // => @media (min-width: 768px) { ... }

        xl: "1024px",
        // => @media (min-width: 1024px) { ... }

        "2xl": "1680",
        // => @media (min-width: 1680px) { ... }
      },
    },
  },
  plugins: [],
};
