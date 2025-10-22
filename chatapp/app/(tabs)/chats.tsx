import { getUser } from "@/utils/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function ChatsScreen() {
  const router = useRouter();

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    // Redirect to welcome screen
    router.push("/");
  };

  //   const getUser = async () => {
  //     return await AsyncStorage.getItem("user");
  //   };

  const getUserData = async () => {
    const userdata = await getUser();
    console.log(userdata);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View className="items-center justify-center flex-1 bg-white">
      <TouchableOpacity className="bg-red-500 rounded-full" onPress={logout}>
        <Text className="p-3 text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
