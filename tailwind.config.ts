import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'basier': ['Basier Circle', 'Inter', 'system-ui', 'sans-serif'],
        'sans': ['Basier Circle', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Superlend Brand Colors
        primary: "#FF5B00",
        background: "#b4e2fb",
        secondary: {
          dark: "#2A2826",
          blue: "#1550FF",
          green: "#265739",
          navy: "#0F244B",
          lightBlue: "#B0E3FF",
          lightGreen: "#D4FFDF",
          yellow: "#F1FF52",
          pink: "#F9CAF4",
          cream: "#FFFFCC",
        },
        // Keep some utility colors
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
        superlend: "0 4px 20px rgba(255, 91, 0, 0.15)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2A2826',
            a: {
              color: '#FF5B00',
              '&:hover': {
                color: '#e54f00',
              },
            },
            h1: {
              color: '#2A2826',
            },
            h2: {
              color: '#2A2826',
            },
            h3: {
              color: '#2A2826',
            },
            h4: {
              color: '#2A2826',
            },
            blockquote: {
              borderLeftColor: '#FF5B00',
            },
          },
        },
        invert: {
          css: {
            color: '#e5e5e5',
            a: {
              color: '#FF5B00',
              '&:hover': {
                color: '#ff7733',
              },
            },
            h1: {
              color: '#e5e5e5',
            },
            h2: {
              color: '#e5e5e5',
            },
            h3: {
              color: '#e5e5e5',
            },
            h4: {
              color: '#e5e5e5',
            },
            blockquote: {
              borderLeftColor: '#FF5B00',
              color: '#9CA3AF',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
