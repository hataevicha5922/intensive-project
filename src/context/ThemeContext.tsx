import { createContext, useContext, useState } from "react";
import { ThemeContextInterface, ThemeProviderProps } from "./ThemeTypes";

const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("error context");
  }

  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
