import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../../components/CustomDrawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,   // ✅ THIS removes "(drawer)"
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false }} // ✅ ALSO IMPORTANT
      />
    </Drawer>
  );
}