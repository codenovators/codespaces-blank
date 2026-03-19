import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { useTheme } from "../../../components/ThemeContext";
import { useCart } from "../../../components/CartContext";

const categories = [
  { name: "Cakes", icon: "🍰" },
  { name: "Scones", icon: "🥐" },
  { name: "Custard", icon: "🍮" },
  { name: "Specials", icon: "🔥" },
];

const products = [
  {
    name: "Red Velvet",
    price: "R50",
    image: require("../../../assets/images/redvelvet.png"),
  },
  {
    name: "Chocolate Cake",
    price: "R60",
    image: require("../../../assets/images/black.png"),
  },
  {
    name: "Vanilla Cake",
    price: "R55",
    image: require("../../../assets/images/black.png"),
  },
];

export default function Home() {
  const { isDark } = useTheme();
  const { addToCart } = useCart();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: isDark ? "#121212" : "#fff" }}
      edges={["top", "bottom"]}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 80,
        }}
        style={[
          styles.container,
          { backgroundColor: isDark ? "#121212" : "#fff" },
        ]}
      >
        {/* HEADER */}
        <Header />

        {/* TITLE */}
        <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
          What are you craving? 🍰
        </Text>

        {/* ================= CATEGORIES ================= */}
        <Text
          style={[
            styles.sectionTitle,
            { color: isDark ? "#fff" : "#000" },
          ]}
        >
          Categories
        </Text>

        <View style={{ height: 110 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            {categories.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.categoryCard,
                  { backgroundColor: isDark ? "#1e1e1e" : "#f2f2f2" },
                ]}
              >
                <Text style={styles.categoryIcon}>{item.icon}</Text>

                <Text
                  style={{
                    color: isDark ? "#fff" : "#000",
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ================= PRODUCTS ================= */}
        <Text
          style={[
            styles.sectionTitle,
            { color: isDark ? "#fff" : "#000" },
          ]}
        >
          Popular
        </Text>

        <View style={{ height: 230 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {products.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.productCard,
                  { backgroundColor: isDark ? "#1e1e1e" : "#f9f9f9" },
                ]}
              >
                <Image source={item.image} style={styles.image} />

                <Text
                  style={[
                    styles.productName,
                    { color: isDark ? "#fff" : "#000" },
                  ]}
                >
                  {item.name}
                </Text>

                <Text style={styles.price}>{item.price}</Text>

                <Text
                  style={styles.button}
                  onPress={() => addToCart(item)}
                >
                  Add to Cart
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },

  /* 🔥 CATEGORY STYLE */
  categoryCard: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  categoryIcon: {
    fontSize: 22,
  },

  /* 🔥 PRODUCT STYLE */
  productCard: {
    width: 150,
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },

  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },

  productName: {
    fontWeight: "bold",
    marginTop: 5,
  },

  price: {
    color: "green",
    marginTop: 3,
  },

  button: {
    marginTop: 10,
    backgroundColor: "#ff4d6d",
    color: "#fff",
    padding: 8,
    borderRadius: 8,
    textAlign: "center",
  },
});