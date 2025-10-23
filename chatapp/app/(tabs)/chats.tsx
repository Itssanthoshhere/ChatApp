import CustomTextInput from "@/components/CustomTextInput";
import { getUser } from "@/utils/storage";
import { Feather, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function ChatsScreen() {
  const router = useRouter();

  // const logout = async () => {
  //   await AsyncStorage.removeItem("user");
  //   // Redirect to welcome screen
  //   router.push("/");
  // };

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
    <>
      <Header />
      <SearchBar />
    </>
  );
}

function Header() {
  return (
    <View className="flex-row items-center justify-between pt-10 bg-white ">
      <Text className="px-4 text-2xl font-bold text-green-700">ChatApp</Text>
      <View className="flex-row gap-5 pr-4 mb-4">
        <TouchableOpacity>
          <Ionicons size={24} name="qr-code-outline" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather size={24} name="more-vertical" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SearchBar() {
  //  Search Bar
  return (
    <View className="flex-row items-center px-4 py-3 mx-4 mb-3 bg-gray-200 rounded-full">
      <Ionicons name="search" size={20} color="gray" />
      <CustomTextInput
        className="flex-1 ml-2 text-sm"
        placeholder="Ask Meta AI or Search"
        placeholderTextColor="gray"
      />
    </View>
  );
}
