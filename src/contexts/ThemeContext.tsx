import React from "react";

interface themeContext {
  backgroundColor: string;
  textColor: string;
}

export const themes = {
  light: {
    backgroundColor: "#00000",
    textColor: "#fffff",
  },
  dark: {
    backgroundColor: "#fffff",
    textColor: "#00000",
  },
};

export const ThemeContext = React.createContext<themeContext>(themes.dark);
