/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          // Replace 'FF3811' with your desired custom color hex code
          '500': '#FF3811', // You can assign it to a specific shade (e.g., '500')
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

