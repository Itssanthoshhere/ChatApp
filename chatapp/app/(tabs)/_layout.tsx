import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="chats" options={{ title: "Chats" }} />
      <Tabs.Screen name="updates" options={{ title: "Updates" }} />
      <Tabs.Screen name="communities" options={{ title: "Communities" }} />
      <Tabs.Screen name="calls" options={{ title: "Calls" }} />
    </Tabs>
  );
}
