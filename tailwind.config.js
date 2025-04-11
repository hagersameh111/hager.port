/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a1b",
        card: "#1a1a2e",
        primary: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED"
        },
        secondary: {
          DEFAULT: "#da2279",
          hover: "#3B82F6"
        },
        tertiary:"#da2279",
        quaternary:"#606060",
        
        
        dark: "#ffcf22",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #8B5CF6, #60A5FA)'
      }
    },
  },
  plugins: [],
}

