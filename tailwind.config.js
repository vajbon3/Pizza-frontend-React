module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dracula": "#2d3436",
        "marinara": "#d63031",
        "cheese": {
          "light": "#ffcf75",
          DEFAULT: "#fcb42d",
        },
        "black": "#121212",
      },
      spacing: {
        "xs": "60px",
        "2xs": "80px",
        "sm": "120px",
        "md": "300px",
        "lg": "700px",
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
