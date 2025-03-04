
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
      },
      spacing: {
        18: "4.5rem", // Custom spacing value
      },
      borderRadius: {
        xl: "1rem", // Extended border radius
      },
    },
    screens: {
      "2xl": { max: "1535px" }, // Large desktop screens
      xl: { max: "1279px" }, // Laptops & large tablets
      lg: { max: "1023px" }, // Tablets & small laptops
      md: { max: "767px" }, // Mobile devices (portrait)
      sm: { max: "639px" }, // Small mobile devices
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
