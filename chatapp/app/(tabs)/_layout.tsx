import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: "black",
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let title;
          let IconComponent = Ionicons;

          switch (route.name) {
            case "chats":
              iconName = "chatbubble";
              title = "Chats";
              break;
            case "updates":
              IconComponent = MaterialIcons;
              iconName = "update";
              title = "Updates";
              break;
            case "communities":
              iconName = "people";
              title = "Communities";
              break;
            case "calls":
              iconName = "call";
              title = "Calls";
              break;

            default:
              return null;
          }

          const iconColor = focused ? "#075E54" : "black";

          return (
            <View className="w-[100px] h-[60px] items-center justify-center">
              <View
                className={`${focused ? "bg-green-200" : "bg-transparent"}  px-5 py-1.5 rounded-full relative`}
              >
                <IconComponent size={18} name={iconName} color={iconColor} />
              </View>
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="chats" options={{ title: "Chats" }} />
      <Tabs.Screen name="updates" options={{ title: "Updates" }} />
      <Tabs.Screen name="communities" options={{ title: "Communities" }} />
      <Tabs.Screen name="calls" options={{ title: "Calls" }} />
    </Tabs>
  );
}
