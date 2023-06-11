/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
       slideRight: 'slideRight 2s',
        slideLeft: 'slideLeft 2s',
        slideRightL: 'slideRightL 2s',
        slideLeftR: 'slideLeftR 2s',
      },
      keyframes: {
        slideRight:{
          '0%':{transform:'translateX(1600px)'},
          '100%':{transform:'translateX(0)'}
        },
        slideLeft:{
          '0%':{transform:'translateX(0)'},
          '100%':{transform:'translateX(-3000px)'}
        },
        slideRightL:{
          '0%':{transform:'translateX(0)'},
          '100%':{transform:'translateX(3000px)'}
        },
        slideLeftR:{
          '0%':{transform:'translateX(-1600px)'},
          '100%':{transform:'translateX(0)'}
        },
      },
      
    },
  },
  plugins: [],
}

