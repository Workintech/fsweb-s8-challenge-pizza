/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow"],
        Quattrocento: ["Quattrocento"],
        Satisfy: ["Satisfy"],
      },
      colors: {
        yellow: "#FDC913",
        grey: "#5F5F5F",
        intensegrey: "#292929",
        red: "#CE2829",
        bej: "#FAF7F2",
      },
    },
  },
  plugins: [],
};
