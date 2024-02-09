import { ReactNode } from "react";

export interface ThemeContextInterface {
    isDark: boolean;
    toggleTheme: () => void;
  }

  export interface ThemeProviderProps {
    children: ReactNode
  }