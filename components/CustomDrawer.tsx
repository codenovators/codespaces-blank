import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useTheme } from "./ThemeContext";

export default function CustomDrawer(props: any) {
  const { theme, setTheme, isDark } = useTheme();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: isDark ? "#121212" : "#fff",
        padding: 20,
      }}
    >
      {/* TOP SECTION */}
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
        KaiTea 🍰
      </Text>

      {/* MENU ITEMS */}
      <View style={styles.menu}>
        {[
          "Orders",
          "Profile & Addresses",
          "Saved Cards",
          "Credits",
          "Help",
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Text style={{ color: isDark ? "#fff" : "#000" }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* THEME SECTION */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: isDark ? "#aaa" : "#555", marginBottom: 10 }}>
          Display preference:
        </Text>

        <View style={styles.themeRow}>
          {["light", "dark", "auto"].map((mode) => (
            <TouchableOpacity
              key={mode}
              style={[
                styles.themeBtn,
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
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  menu: {
    marginTop: 10,
  },

  item: {
    paddingVertical: 12,
  },

  themeRow: {
    flexDirection: "row",
    gap: 10,
  },

  themeBtn: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
  },
});