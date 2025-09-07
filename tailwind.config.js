/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // ✅ if using App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // ✅ if using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",   // in case you keep stuff in src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // Blue
        secondary: "#7C3AED", // Purple
        accent: "#F59E0B",    // Amber
        dark: "#111827",      // Text color
        light: "#F9FAFB",     // Background
      },
    },
  },
  plugins: [],
};
