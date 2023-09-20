import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  currentTheme: "light",
  setDark: () => {},
  setLight: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// we can also make custom hooks here

export default function useTheme() {
  return useContext(ThemeContext);
}
