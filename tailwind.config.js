/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sorts Mill Goudy', 'serif' ]
      },
       
      keyframes: {

        'shake': {
          '0%': {
              opacity: '1',
              transform: 'translateY(-0.1px) translateX(-1px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0.1px) '
          },
      },

        'fade-out-down': {
            'from': {
                opacity: '1',
                transform: 'translateX(0px) rotate(6deg)' 
            },
            'to': {
                opacity: '0',
                transform: 'translateX(10px)'
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateX(10px) rotate(-6deg)' 
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0)'
            },
        },

    },
    animation: {

        'fade-1': 'fade-out-down 6s ease-out infinite',
        'fade-2': 'fade-in-up 4s ease-out infinite',
        'fade-3': 'fade-out-down 5s ease-out infinite',
        'fade-4': 'fade-in-up 3s ease-out infinite',
        'fade-5': 'fade-out-down 7s ease-out infinite',
        'fade-6': 'fade-in-up 2s ease-out infinite',
        'fade-7': 'fade-out-down 5s ease-out infinite',
        'shake': 'shake 0.1s ease-out infinite',
        'pulse' : 'pulse 4s ease-out infinite'

    }
      
    },
  },
  plugins: [
    
  ],
}
