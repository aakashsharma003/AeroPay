/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
   "./components/**/*.{js,ts,jsx,tsx,mdx}",
   '../../packages/ui/src/**/*.{ts,tsx}',
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
     'lg':'1079'
    },
    extend: {
      colors:{
        'primary-color':'#5741d7',
        'secondary-color':'#f9f7f6',
        'light-primary':'#e9e7fb'
      }
    },
  },
  plugins: [],
}

