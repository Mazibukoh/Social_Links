import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        'grey-700': 'hsl(0, 0%, 20%)',
        'grey-800': 'hsl(0, 0%, 12%)',
        'grey-900': 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
