import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useCart } from "../../../components/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../components/ThemeContext";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const { isDark } = useTheme();

const total = cart.reduce((sum: number, item: any) => {
  let price = 0;

  if (typeof item.price === "string") {
    price = parseInt(item.price.replace("R", "").trim(), 10);
  } else if (typeof item.price === "number") {
    price = item.price;
  }

  if (isNaN(price)) price = 0;

  return sum + price * item.quantity;
}, 0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? "#121212" : "#fff",
      }}
    >
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            { color: isDark ? "#fff" : "#000" },
          ]}
        >
          Your Cart 🛒
        </Text>

        <FlatList
          data={cart}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.card,
                { backgroundColor: isDark ? "#1e1e1e" : "#f2f2f2" },
              ]}
            >
              <Text
                style={[
                  styles.name,
                  { color: isDark ? "#fff" : "#000" },
                ]}
              >
                {item.name}
              </Text>

              <Text style={styles.price}>{item.price}</Text>

              {/* CONTROLS */}
              <View style={styles.controls}>
                <TouchableOpacity onPress={() => decreaseQty(item.name)}>
                  <Text style={styles.btn}>➖</Text>
                </TouchableOpacity>

                <Text
                  style={{
                    color: isDark ? "#fff" : "#000",
                    fontSize: 16,
                  }}
                >
                  {item.quantity}
                </Text>

                <TouchableOpacity onPress={() => increaseQty(item.name)}>
                  <Text style={styles.btn}>➕</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => removeFromCart(item.name)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {/* TOTAL */}
        <View style={styles.totalBox}>
          <Text style={styles.totalText}>Total: R{total}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  card: {
    padding: 12,
    borderRadius: 12,
    marginTop: 15,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },

  price: {
    color: "green",
    marginTop: 3,
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },

  btn: {
    fontSize: 20,
  },

  remove: {
    marginLeft: 20,
    color: "red",
  },

  totalBox: {
    paddingVertical: 100,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
   
  },
});