/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        forward: {
          '0%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateX(0)' },
        },
        forward_mobile: {
          '0%': { "object-position": "70%" },
          '100%': { "object-position": "75%"},
        },
        backward: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}
