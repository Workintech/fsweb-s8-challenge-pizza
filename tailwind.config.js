/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{

      backgroundImage:{
        'home-banner':"url('/public/assets/home/home-banner.png')",
        'kart1':"url('/public/assets/cta/kart-1.png')",
        'kart2':"url('/public/assets/cta/kart-2.png')",
        'kart3':"url('/public/assets/cta/kart-3.png')"
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
      'roboto':['"Roboto Condensed"'],
      'quatro': ['"Quattrocento"']
    },
    colors:{
      'yellow':'#FDC913',
      'bej':'#FAF7F2',
      'white':'white',
      'red':'red',
      'bej':"#FAF7F2"
    },
    screens:{
      'xs':{'max':'540px'}
    }
    }
  },
  plugins: [],
}

