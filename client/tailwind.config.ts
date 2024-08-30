import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

// adding base colors
const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

// adding shade colors and mapping
const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "100",
  "800": "100",
  "900": "50",
};

// function to create theme object
// if an element has value = 50 in light mode,
// it will automatically convert to 900 in dark mode
const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
};

// light mode
const lightTheme = generateThemeObject(colors, shadeMapping);
// dark mode
const darkTheme = generateThemeObject(colors, shadeMapping, true);
// themes for extra color
const themes = {
  light: {
    // grab all light theme colors and add white
    ...lightTheme,
    white: "ffffff",
  },
  dark: {
    // grab all light theme colors and add white
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"],
  },
};

const config: Config = {
  // allows us to use dark mode for all tailwind config
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};
export default config;
