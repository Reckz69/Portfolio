/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  theme: {
    extend: {
      backgroundImage: {
        // These match the G1 and G2 gradients from your index.html
        'g-pink': "linear-gradient(135deg, #f472b6, #a855f7, #6366f1)",
        'g-blue': "linear-gradient(135deg, #60a5fa, #22d3ee, #34d399)",
      },
    },
  },
}