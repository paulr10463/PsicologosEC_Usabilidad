export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '1': '#009DD5',
          '2': '#007099',
          '3': '#33C9FF',
          '3.5': '#007099',
          '4': '#005979',
          '5': '#007FAD',
          '6': '#00465F'
        },
        secondary: {
          '1': '#6F5F9E',
          '2': '#9284BC',
        },
        terciary: {
          '1': '#F2F2F2',
          '2': '#A9A9A9',
        },
        grey:{
          '1': '#636E73'
        },
        borderColor: {
          '1': '#EAEAEA',
        },
      },
      borderRadius: {
        'default': '8px',
        'small': '4px',
        'big': '20px',
      },
    },
  },
  plugins: ["tw-elements/dist/plugin.cjs"],
};