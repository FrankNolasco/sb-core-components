import { DefaultTheme } from "styled-components";

const primary = "#15A7FF";
const defaultColor = "#c3c3c3";
const rgbPrimary = "21,167,255";

const danger = "#FF4F76";
const rgbDanger = "255,79,118";

const warning = "#FFB14F";
const rgbWarning = "255,177,79";

const success = "#24AB00";
const rgbSuccess = "36,171,0";

const dark = "#000000";
const rgbDark = "0,0,0";

export const theme: DefaultTheme = {
  colors: {
    primary,
    primaryHover: "#32B2FF",
    secondary: "#DEECF5",
    complementary: "#FF6D15",
    analogy: "#FF1532",
    neutro: "#156DFF",
    danger,
    warning,
    success,
    dark,
    info: "#4759FF",
    text: "inherit",
    textInverse: "#F3F3F8",
    background: "#EDF8FF",
    backgroundInverse: "#49494B",
    border: "#EAEAEA",
    borderInverse: "#555555",
    white: "#FFFFFF",
  },
  buttons: {
    primary: {
      text: "white",
      backgroundColor: primary,
      border: {
        default: "solid 1px " + primary,
        hover: "solid 1px " + primary,
        shadowColor: `rgba(${rgbPrimary}, .25)`,
      },
    },
    default: {
      text: "black",
      backgroundColor: "white",
      border: {
        default: "solid 1px " + defaultColor,
        hover: "solid 1px " + primary,
        shadowColor: `rgba(${rgbPrimary}, .25)`,
      },
    },
    link: {
      text: primary,
      backgroundColor: "transparent",
      border: {
        default: "solid 1px transparent",
        hover: "solid 1px transparent",
        shadowColor: `rgba(${rgbPrimary}, .01)`,
      },
    },
    ghost: {
      text: primary,
      backgroundColor: "white",
      border: {
        default: "solid 1px " + primary,
        hover: "solid 1px " + primary,
        shadowColor: `rgba(${rgbPrimary}, .25)`,
      },
    },
    danger: {
      text: "white",
      backgroundColor: danger,
      border: {
        default: "solid 1px " + danger,
        hover: "solid 1px " + danger,
        shadowColor: `rgba(${rgbDanger}, .25)`,
      },
    },
    warn: {
      text: "white",
      backgroundColor: warning,
      border: {
        default: "solid 1px " + warning,
        hover: "solid 1px " + warning,
        shadowColor: `rgba(${rgbWarning}, .25)`,
      },
    },
    success: {
      text: "white",
      backgroundColor: success,
      border: {
        default: "solid 1px " + success,
        hover: "solid 1px " + success,
        shadowColor: `rgba(${rgbSuccess}, .25)`,
      },
    },
    dark: {
      text: "white",
      backgroundColor: dark,
      border: {
        default: "solid 1px " + dark,
        hover: "solid 1px " + dark,
        shadowColor: `rgba(${rgbDark}, .25)`,
      },
    },
  },
  fonts: {
    fontFamily: "Poppins, sans-serif",
    sizes: {
      p: {
        lg: 15,
        md: 15,
        sm: 7.5,
      },
      span: {
        lg: 14,
        md: 14,
        sm: 7,
      },
      label: {
        lg: 12,
        md: 12,
        sm: 6,
      },
      h1: {
        lg: 30,
        md: 30,
        sm: 15,
      },
      h2: {
        lg: 22,
        md: 22,
        sm: 11,
      },
      h3: {
        lg: 18,
        md: 18,
        sm: 9,
      },
      h4: {
        lg: 16,
        md: 16,
        sm: 8,
      },
      h5: {
        lg: 10,
        md: 10,
        sm: 5,
      },
      h6: {
        lg: 8,
        md: 8,
        sm: 4,
      },
    },
  },
};
