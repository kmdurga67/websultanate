/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shade-0": "#101013",
        "neon-green": "#39ff88",
        "neon-green-inner": "#003114",
        pink: "#ff39df",
        white: "#fff",
        "shade-7": "#a2a2b7",
        gray: "#100024",
        "shade-5": "#4b4b58",
        "shade-2": "#1a1a20",
        "shade-6": "#676778",
        "shade-4": "#363640",
        blue: "#3ea1fc",
        "shade-3": "#29292f",
        darkslategray: "#2e2e38",
        "shade-8": "#cbcbdd",
        "shade-1": "#16161b",
        grey: "#7d7d7d",
        "shade-25": "#222228",
        gainsboro: "#d9d9d9",
        mediumslateblue: {
          "100": "#735cff",
          "200": "#705ce3",
        },
        seagreen: "#219653",
      },
      spacing: {},
      fontFamily: {
        bold: "'Space Grotesk'",
        medium: "'IBM Plex Sans'",
        medium1: "Inter",
      },
      borderRadius: {
        "6xs-6": "6.6px",
        "10xs": "3px",
      },
    },
    fontSize: {
      mini: "15px",
      sm: "14px",
      lg: "18px",
      base: "16px",
      "5xl": "24px",
      xs: "12px",
      smi: "13px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
