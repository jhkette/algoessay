import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ title: 'Problems' }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings' }} />
      <Drawer.Screen name="about" options={{ title: 'About' }} />
          <Drawer.Screen name="problem1/index"  options={{
            drawerLabel: 'Problem 1',
            title: 'Problem 1',
          }} />
    </Drawer>
  );
}