import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Display preference:</Text>

      <View style={styles.row}>
        {["light", "dark", "auto"].map((mode) => (
          <TouchableOpacity
            key={mode}
            style={[
              styles.btn,
              theme === mode && { backgroundColor: "#333" },
            ]}
            onPress={() => setTheme(mode)}
          >
            <Text style={{ color: theme === mode ? "#fff" : "#000" }}>
              {mode}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: { marginBottom: 10 },
  row: { flexDirection: "row", gap: 10 },
  btn: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
  },
});