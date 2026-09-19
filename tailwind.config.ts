import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic design tokens
        background: "#FBFAF7",
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F4EFE6",
          elevated: "#FFFFFF",
          dark: "#031A2D",
        },
        "text-primary": "#031A2D",
        "text-secondary": "#4A607A",
        border: {
          DEFAULT: "#DDE9F3",
          subtle: "#EDF3F8",
          strong: "#B8D2E7",
          gold: "rgba(199, 149, 45, 0.35)",
        },
        primary: {
          DEFAULT: "#062B49",
          hover: "#0D4573",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#C7952D",
          hover: "#B58422",
          light: "#E3C16F",
          foreground: "#031A2D",
        },
        success: {
          DEFAULT: "#059669",
          50: "#ECFDF5",
          100: "#D1FAE5",
          600: "#059669",
          700: "#047857",
        },
        warning: {
          DEFAULT: "#D97706",
          50: "#FFFBEB",
          100: "#FEF3C7",
          600: "#D97706",
          700: "#B45309",
        },
        error: {
          DEFAULT: "#DC2626",
          50: "#FEF2F2",
          100: "#FEE2E2",
          600: "#DC2626",
          700: "#B91C1C",
        },
        info: {
          DEFAULT: "#0284C7",
          50: "#F0F9FF",
          100: "#E0F2FE",
          600: "#0284C7",
          700: "#0369A1",
        },

        // Core Brand Palette
        navy: {
          DEFAULT: "#062B49",
          dark: "#031A2D",
          light: "#0D4573",
          muted: "#133C61",
          50: "#F0F5FA",
          100: "#DDE9F3",
          200: "#B8D2E7",
          300: "#86B3D6",
          400: "#4D8EC0",
          500: "#2B6FA5",
          600: "#1D5686",
          700: "#154269",
          800: "#062B49",
          850: "#042037",
          900: "#031A2D",
          950: "#02111E",
        },
        gold: {
          DEFAULT: "#C7952D",
          light: "#E3C16F",
          dark: "#A4771C",
          hover: "#B58422",
          50: "#FAF7EF",
          100: "#F3ECD9",
          200: "#E7D8B3",
          300: "#DBC28C",
          400: "#CFA965",
          500: "#C7952D",
          600: "#A4771C",
          700: "#7E5913",
          800: "#573C0A",
          900: "#322203",
        },
        warm: {
          DEFAULT: "#FBFAF7",
          50: "#FFFFFF",
          100: "#FBFAF7",
          200: "#F4EFE6",
          300: "#E9E1D2",
          400: "#D5C9B4",
          500: "#BEAF96",
        },
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(3, 26, 45, 0.04), 0 1px 2px -1px rgba(3, 26, 45, 0.02)",
        institutional: "0 4px 20px -2px rgba(3, 26, 45, 0.08), 0 2px 6px -1px rgba(3, 26, 45, 0.04)",
        "institutional-lg": "0 10px 30px -4px rgba(3, 26, 45, 0.12), 0 4px 10px -2px rgba(3, 26, 45, 0.06)",
        "gold-glow": "0 0 20px -3px rgba(199, 149, 45, 0.25)",
        "gold-border": "0 0 0 1px rgba(199, 149, 45, 0.35)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "slide-up": "slide-up 0.25s ease-out",
        "slide-down": "slide-down 0.25s ease-out",
        "pulse-subtle": "pulse-subtle 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
