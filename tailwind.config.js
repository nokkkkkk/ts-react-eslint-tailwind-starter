module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'white': '#ffffff',
      "electric-violet": {
        50: "#fbf2ff",
        100: "#f7e6ff",
        200: "#ebbfff",
        300: "#de99ff",
        400: "#c64dfe",
        500: "#ad00fe",
        600: "#9c00e5",
        700: "#8200bf",
        800: "#680098",
        900: "#55007c",
      },
      "robins-egg-blue": {
        50: "#f2fdfe",
        100: "#e6fcfd",
        200: "#bff7fb",
        300: "#99f3f8",
        400: "#4de9f3",
        500: "#00e0ee",
        600: "#00cad6",
        700: "#00a8b3",
        800: "#00868f",
        900: "#006e75",
      },
    },
    extend: {
      fontFamily: {
          yeseva: ['Yeseva One', 'serif'],
          josefin: ['Josefin Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
