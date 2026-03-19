import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../components/ThemeContext";
import { useCart } from "../../../components/CartContext";
import { useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const { isDark } = useTheme();
  const { cart } = useCart();
  const router = useRouter();
  const navigation = useNavigation();

const totalItems = cart.reduce(
  (sum: number, item: { quantity: number }) => sum + item.quantity,
  0
);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8, // optional: consistent padding
  },
  iconButton: {
    padding: 8,
  },
  cartButton: {
    position: "relative",
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
    right: 2,
    top: 2,
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