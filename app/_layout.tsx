import { Slot } from "expo-router";
import { ThemeProvider, useTheme } from "../components/ThemeContext";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

function AppContent() {
  const { isDark } = useTheme();

  useEffect(() => {
    
    // Set button style
    NavigationBar.setButtonStyleAsync(isDark ? "light" : "dark");
  }, [isDark]);

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? "#121212" : "#fff" }}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Slot />
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}