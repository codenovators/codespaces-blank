import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeType = "light" | "dark" | "auto";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>("auto");

  const isDark =
    theme === "dark" ||
    (theme === "auto" && systemTheme === "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}