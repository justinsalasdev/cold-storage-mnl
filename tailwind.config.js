/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: {
          50: "#D3EBFD",
          100: "#C0E2FC",
          200: "#94CEFA",
          300: "#6DBCF8",
          400: "#41A8F6",
          500: "#1593F4",
          600: "#0A7ED6",
          700: "#0864AA",
          800: "#064A7F",
          900: "#043153",
          950: "#032640",
        },
      },
    },
  },
  plugins: [],
};
