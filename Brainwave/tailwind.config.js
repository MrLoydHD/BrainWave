/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        '128' : '40rem'
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