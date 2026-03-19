import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useTheme } from "./ThemeContext";

export default function Header() {
  const { isDark } = useTheme();
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      {/* MENU */}
      <Pressable onPress={() => navigation.toggleDrawer?.()}>
        <Ionicons
          name="menu"
          size={28}
          color={isDark ? "#fff" : "#000"}
        />
      </Pressable>

      {/* CENTER */}
      <View>
        <Text style={[styles.delivery, { color: isDark ? "#aaa" : "gray" }]}>
          Deliver to
        </Text>
        <Text style={[styles.location, { color: isDark ? "#fff" : "#000" }]}>
          My Desk 📍
        </Text>
      </View>

      {/* CART */}
      <Ionicons
        name="cart"
        size={28}
        color={isDark ? "#fff" : "#000"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  delivery: { fontSize: 12 },
  location: { fontSize: 16, fontWeight: "bold" },
});