/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
      // container: {
      //   center: true,
      //   padding: '2rem',
      //   screens: {
      //     'sm': '640px',
      //     'md': '768px',
      //     'lg': '1024px',
      //     'xl': '1280px',
      //   },
      // },
    extend: {
      bottom:{
        '128' : '40rem'
      },
      height: {
        '128' : '40rem'
      },
      width: {
        '100' : '38rem'
      },
      colors: {
        'Asparagua' : '#87A878',
        'Sage' : '#B0BC98',
        'AshGray' : '#C7CCB9',
        'TeaGreen' : '#CAE2BC',
        'LightTeaGreen' : '#DBF9B8',
        'light-sea-green': '#07beb8ff',
        'robin-egg-blue': '#3dccc7ff',
        'tiffany-blue': '#68d8d6ff',
        'celeste': '#9ceaefff',
        'celeste2': '#c4fff9ff',
      },
      // container: {
      //   center: true,
      //   padding: '2rem',
      //   screens: {
      //     'sm': '640px',
      //     'md': '768px',
      //     'lg': '1024px',
      //     'xl': '1280px',
      //   },
      // },
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    styled: true,
    themes: ["emerald"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

  
}