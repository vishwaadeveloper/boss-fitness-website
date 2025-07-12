import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // BOSS FITNESS Strict Dark Theme Colors
        boss: {
          black: "#000000",
          charcoal: "#1a1a1a",
          "dark-gray": "#2a2a2a",
          "medium-gray": "#4a4a4a",
          "light-gray": "#808080",
          "steel-gray": "#36454f",
        },
        "boss-red": {
          DEFAULT: "#dc143c",
          crimson: "#dc143c",
          blood: "#b71c1c",
          electric: "#ff1744",
        },
        "boss-text": {
          white: "#ffffff",
          "light-gray": "#e0e0e0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "boss-power-surge": {
          "0%": {
            transform: "scale(1)",
            boxShadow: "0 0 20px rgba(220, 20, 60, 0.3)",
          },
          "50%": {
            transform: "scale(1.02)",
            boxShadow: "0 0 40px rgba(220, 20, 60, 0.6)",
          },
          "100%": {
            transform: "scale(1)",
            boxShadow: "0 0 20px rgba(220, 20, 60, 0.3)",
          },
        },
        "boss-energy-flow": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        "boss-domination": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "boss-conquest": {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "boss-glow-pulse": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(220, 20, 60, 0.8)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(220, 20, 60, 1), 0 0 30px rgba(220, 20, 60, 0.8)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "boss-power-surge": "boss-power-surge 2s ease-in-out infinite",
        "boss-energy-flow": "boss-energy-flow 3s linear infinite",
        "boss-domination": "boss-domination 0.6s ease-out",
        "boss-conquest": "boss-conquest 0.8s ease-out",
        "boss-glow-pulse": "boss-glow-pulse 3s ease-in-out infinite",
      },
      fontFamily: {
        "boss-military": ["Impact", "Arial Black", "sans-serif"],
        "boss-command": ["Orbitron", "monospace"],
        "boss-industrial": ["Rajdhani", "sans-serif"],
      },
      backgroundImage: {
        "boss-dark-gradient": "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)",
        "boss-red-gradient": "linear-gradient(135deg, #dc143c 0%, #b71c1c 50%, #ff1744 100%)",
        "boss-power-gradient": "linear-gradient(45deg, #000000 0%, #dc143c 50%, #000000 100%)",
        "boss-command-gradient": "linear-gradient(180deg, #1a1a1a 0%, #000000 100%)",
      },
      boxShadow: {
        "boss-red": "0 0 20px rgba(220, 20, 60, 0.4)",
        "boss-red-intense": "0 0 40px rgba(220, 20, 60, 0.6)",
        "boss-power": "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(220, 20, 60, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
