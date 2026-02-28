import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      // Colores primarios - Identidad de marca
      primary: {
        50: "#eef2ff",   // Azul muy claro (fondos sutiles)
        100: "#dbe6fe",  // Azul claro (hovers, backgrounds)
        200: "#c0d1fd",  // Azul suave (bordes)
        300: "#96b3fb",  // Azul medio (elementos secundarios)
        400: "#658af7",  // Azul intermedio (iconos)
        500: "#3b60f0",  // AZUL PRINCIPAL (botones, links)
        600: "#2e3fd9",  // Azul oscuro (hover de botones)
        700: "#2732b0",  // Azul más oscuro (textos importantes)
        800: "#252b89",  // Azul muy oscuro (headers)
        900: "#22296b",  // Azul profundo (fondos especiales)
      },
      
      // Color de acento - Naranja para CTAs y elementos destacados
      accent: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",  // NARANJA PRINCIPAL (CTAs, badges)
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
      },
      
      // Verde para éxito, certificaciones
      success: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",  // VERDE (certificaciones, checks)
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      
      // Grises neutrales - Textos y fondos
      neutral: {
        50: "#fafafa",   // Casi blanco (fondos)
        100: "#f4f4f5",  // Gris muy claro (cards)
        200: "#e4e4e7",  // Gris claro (bordes)
        300: "#d4d4d8",  // Gris medio claro
        400: "#a1a1aa",  // Gris medio (textos secundarios)
        500: "#71717a",  // Gris (textos placeholder)
        600: "#52525b",  // Gris oscuro (textos)
        700: "#3f3f46",  // Gris más oscuro
        800: "#27272a",  // Gris muy oscuro (headers)
        900: "#18181b",  // Casi negro (textos principales)
      },
      
      // Fondos oscuros
      dark: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",  // Fondo oscuro principal
      },
      
      // Colores semánticos
      white: "#ffffff",
      black: "#030712",
      
      // Nombres específicos para usar en componentes
      brand: {
        blue: "#2e3192",      // Azul institucional
        orange: "#ec6147",    // Naranja institucional
        green: "#00bf63",     // Verde institucional
      },
    },
    spacing: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "22rem",
      72: "28rem",
      80: "35rem",
      96: "50rem",
      px: "1px",
      0.5: "0.125rem",
      1.5: "0.375rem",
      2.5: "0.625rem",
      3.5: "0.875rem",
    },
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            current: "#000000",
            primary: {
              DEFAULT: "#00bf63",
              foreground: "#FFFF",
            },
            focus: "##dfb372",
          },
        },
      },
    }),
  ],
};
