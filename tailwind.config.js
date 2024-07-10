/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{

      backgroundImage:{
        'home-banner':"url('./public/assets/home/home-banner.png')"
      },

      fontSize:{
        'xs': '0.7rem'
      },
      fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'satisfy':['"Satisfy"'],
      'barlow' : ['"Barlow"'],
      'roboto':['"Roboto Condensed"']
    },
    colors:{
      'yellow':'#FDC913',
      'bej':'#FAF7F2',
      'white':'white',
      'red':'red'
    },
    screens:{
      'xs':{'max':'540px'}
    }
    }
  },
  plugins: [],
}
