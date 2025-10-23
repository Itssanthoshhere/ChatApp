import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
        tabBarLabel: () => null,
        tabBarIconStyle: {
          flex: 1,
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
            <View className=" w-[100px] h-[58px] items-center justify-center">
              <View
                className={`${focused ? "bg-green-200" : "bg-transparent"}  px-5 py-1.5 rounded-full relative`}
              >
                <IconComponent size={18} name={iconName} color={iconColor} />

                {/* Show Badges */}
                {route.name == "chats" && (
                  <View className="absolute top-0 -right-0 bg-green-600 rounded-full px-1.5">
                    <Text className="text-xs font-bold text-white">5</Text>
                  </View>
                )}
                {/* Show Badges */}
                {route.name == "updates" && (
                  <View className="absolute top-0 w-2 h-2 bg-green-600 rounded-full -right-0 "></View>
                )}
              </View>
              <View>
                <Text
                  className={`${focused ? "font-semibold" : "font-normal"} `}
                >
                  {title}
                </Text>
              </View>
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="chats" />
      <Tabs.Screen name="updates" />
      <Tabs.Screen name="communities" />
      <Tabs.Screen name="calls" />
    </Tabs>
  );
}
