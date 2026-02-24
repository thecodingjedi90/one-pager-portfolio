/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Professional Slate & Indigo base
        brand: {
          primary: '#1e293b', // Slate 800
          accent: '#4f46e5',  // Indigo 600
        },
        // Industry Specific Accents
        tech: {
          amazon: '#ff9900',     // Amazon Orange 
          salesforce: '#00a1e0', // Salesforce Blue 
          java: '#f89820',       // Java Orange [cite: 2]
        }
      },
      fontFamily: {
        // Clean, modern typography
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}