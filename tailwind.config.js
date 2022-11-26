/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        category1: "url('/src/Assets/bannerCategory1.webp')",
        category2: "url('/src/Assets/bannerCategory2.webp')",
        category3: "url('/src/Assets/p9.webp')",
      }),
    },
  },
  plugins: [],
};
