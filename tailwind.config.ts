import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B1120",
        "bg-secondary": "#0F1729",
        teal: {
          DEFAULT: "#14F1D9",
          400: "#2ef5e0",
          600: "#0dcfc0",
        },
        cyan: {
          DEFAULT: "#38BDF8",
          400: "#60cff8",
          600: "#0ea5e9",
        },
        glass: "rgba(255,255,255,0.05)",
        "glass-border": "rgba(20,241,217,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "aurora-1":
          "radial-gradient(circle at 20% 50%, rgba(20,241,217,0.08) 0%, transparent 60%)",
        "aurora-2":
          "radial-gradient(circle at 80% 20%, rgba(56,189,248,0.08) 0%, transparent 60%)",
        "aurora-3":
          "radial-gradient(circle at 50% 80%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        "grid-pattern":
          "linear-gradient(rgba(20,241,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(20,241,217,0.03) 1px, transparent 1px)",
        "gradient-teal-cyan":
          "linear-gradient(135deg, #14F1D9 0%, #38BDF8 100%)",
        "gradient-hero":
          "linear-gradient(135deg, rgba(20,241,217,0.15) 0%, rgba(56,189,248,0.1) 50%, rgba(99,102,241,0.08) 100%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "glow-teal": "0 0 20px rgba(20,241,217,0.3), 0 0 60px rgba(20,241,217,0.1)",
        "glow-cyan": "0 0 20px rgba(56,189,248,0.3), 0 0 60px rgba(56,189,248,0.1)",
        "glow-sm": "0 0 10px rgba(20,241,217,0.2)",
        "glass": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "aurora": "aurora 15s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "typewriter": "typewriter 0.05s steps(1) forwards",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(20,241,217,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(20,241,217,0.6)" },
        },
        aurora: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
