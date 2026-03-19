import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "./ThemeContext";
import { useCart } from "./CartContext";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useRouter } from "expo-router";

export default function Header() {
  const { isDark } = useTheme();
  const { cart } = useCart();

  const navigation = useNavigation();
  const router = useRouter();

  // ✅ FIXED TypeScript issue
  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      {/* LEFT - MENU */}
      <Ionicons
        name="menu"
        size={28}
        color={isDark ? "#fff" : "#000"}
        onPress={() =>
          navigation.dispatch(DrawerActions.openDrawer())
        }
      />

      {/* CENTER - LOCATION */}
      <View>
        <Text style={[styles.delivery, { color: isDark ? "#aaa" : "gray" }]}>
          Deliver to
        </Text>
        <Text style={[styles.location, { color: isDark ? "#fff" : "#000" }]}>
          21 Parade Road,Ladysmith 📍
        </Text>
      </View>

      {/* RIGHT - CART + BADGE */}
      <View style={{ position: "relative" }}>
        <Ionicons
          name="cart"
          size={28}
          color={isDark ? "#fff" : "#000"}
          onPress={() => router.push("/cart")}
        />

        {/* 🔥 BADGE */}
        {totalItems > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalItems}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  delivery: {
    fontSize: 12,
  },

  location: {
    fontWeight: "bold",
    fontSize: 16,
  },

  badge: {
    position: "absolute",
    right: -6,
    top: -4,
    backgroundColor: "#ff4d6d",
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});