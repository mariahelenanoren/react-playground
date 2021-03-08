import React from "react";

export interface themeInterface {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  overlay: string;
}

export const themes = {
  light: {
    primaryColor: "#ffffff",
    secondaryColor: "#eeeeee",
    textColor: "#000000",
    overlay: "rgba(255, 255, 255, 0.95)",
  },

  dark: {
    primaryColor: "#000000",
    secondaryColor: "#363636",
    textColor: "#ffffff",
    overlay: "rgba(0, 0, 0, 0.8)",
  },
};

export const ThemeContext = React.createContext<themeInterface>(themes.dark);
