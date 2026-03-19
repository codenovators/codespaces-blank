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
import { StatusBar } from "expo-status-bar";


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
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Chocolate Cake",
    price: "R60",
    image: "https://via.placeholder.com/150",
  },
];

export default function Home() {
  const { isDark } = useTheme();

  return (
    
    <SafeAreaView
    
      style={{ flex: 1, backgroundColor: isDark ? "#121212" : "#fff" }}
    >
       
      <ScrollView
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

        {/* CATEGORIES */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View
              key={index}
              style={[
                styles.category,
                { backgroundColor: isDark ? "#1e1e1e" : "#f2f2f2" },
              ]}
            >
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={{ color: isDark ? "#fff" : "#000" }}>
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* PRODUCTS */}
        <Text
          style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}
        >
          Popular
        </Text>

        <View style={styles.products}>
          {products.map((item, index) => (
            <View
              key={index}
              style={[
                styles.card,
                { backgroundColor: isDark ? "#1e1e1e" : "#f9f9f9" },
              ]}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text
                style={[
                  styles.productName,
                  { color: isDark ? "#fff" : "#000" },
                ]}
              >
                {item.name}
              </Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          ))}
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

  category: {
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
    alignItems: "center",
  },

  categoryIcon: {
    fontSize: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    padding: 10,
    borderRadius: 12,
    marginBottom: 15,
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
});