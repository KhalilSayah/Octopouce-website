import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Fredoka'", "sans-serif"],
      },
      colors: {
        octoblue: "#0203f7",
        octobeige: "#eceadd",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "8px", 
          medium: "12px", 
          large: "16px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "2px", 
          large: "3px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#FFFFFF"
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#11181C"
            },
            content2: {
              DEFAULT: "#f8f8f8",
              foreground: "#11181C"
            },
            content3: {
              DEFAULT: "#f1f1f1",
              foreground: "#11181C"
            },
            content4: {
              DEFAULT: "#e8e8e8",
              foreground: "#11181C"
            },
            divider: {
              DEFAULT: "rgba(17, 17, 17, 0.15)"
            },
            focus: {
              DEFAULT: "#0203f7"
            },
            foreground: {
              DEFAULT: "#11181C"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            primary: {
              50: "#e0e0fe",
              100: "#c2c2fd",
              200: "#9d9dfa",
              300: "#7979f8",
              400: "#5454f7",
              500: "#0203f7",
              600: "#0202c6",
              700: "#010294",
              800: "#010163",
              900: "#000031",
              DEFAULT: "#0203f7",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#fcfcf9",
              100: "#f9f9f3",
              200: "#f5f4e9",
              300: "#f1f0df",
              400: "#eceadd",
              500: "#e2e0d3",
              600: "#c5c3b8",
              700: "#a9a79e",
              800: "#8c8a83",
              900: "#6f6e69",
              DEFAULT: "#eceadd",
              foreground: "#000000"
            }
          }
        }
      }
    })
  ]
}