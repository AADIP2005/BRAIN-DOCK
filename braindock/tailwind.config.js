/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
       primary: "#4f46e5",   // Indigo (trust, stability)
       secondary: "#f59e0b", // Warm amber accent
       light: "#f9fafb",     // Very light gray
       dark: "#111827",      // Deep gray text
       dark2: "#1f2937", 
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fly: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)' },
          '100%': { transform: 'translateX(100vw) rotate(5deg)' },
        },
        trail: {
          '0%': { width: '0' },
          '100%': { width: '100vw' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fly: 'fly 10s linear infinite',
        trail: 'trail 10s ease-out forwards',
      },
    },
  },
  plugins: [],
};

