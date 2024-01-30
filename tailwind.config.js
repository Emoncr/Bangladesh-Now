/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: "#F60D2B",
        des_color: "#444",
        heading_color: "#111",
        offWhite_bg:"#f6f6f6"
      },
      boxShadow: {
        "brandShadow": "0 0 15px rgba(0, 0, 0, .15)",
      },
    },
  },
  plugins: [],
}
