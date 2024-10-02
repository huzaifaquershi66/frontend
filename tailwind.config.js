/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to your React components
    './public/index.html', // Include your HTML files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1b434d", // Example custom color
        secondary: "#CB2E3D", // Another example
        accent: "#00A79F", // And another
        bgOne: "#D9D9D9", // You can name it anything
        "primaryblue": {
          50: "#eefdfd",
          100: "#d5f8f8",
          200: "#b0f0f1",
          300: "#79e2e7",
          400: "#3bccd5",
          500: "#1fafbb",
          600: "#1d8d9d",
          700: "#1e7280",
          800: "#215d69",
          900: "#1b434d",
          950: "#0f333d",
        },
      },
    },
  },
  plugins: [],
};
