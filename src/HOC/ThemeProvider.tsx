// ThemeProvider.tsx
import React, { createContext, ReactNode } from "react";
import { theme as MyThemeDefault } from "../Theme";
import { DefaultTheme } from "styled-components";

export interface ThemeContextType {
  theme: DefaultTheme;
}

export interface ThemeProviderProps {
  theme: DefaultTheme;
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = MyThemeDefault,
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
