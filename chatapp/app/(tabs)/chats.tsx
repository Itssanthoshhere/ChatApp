import CustomTextInput from "@/components/CustomTextInput";
import { getUser } from "@/utils/storage";
import { Feather, Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, FlatList, Image } from "react-native";

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
      <CategoryTabs />
      <ChatList />
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

function CategoryTabs() {
  const categories = ["All", "Unread", "Favorites", "Groups"];

  const [activeCategory, setActiveCategory] = useState("All");

  /* Category Tabs */
  return (
    <View className="flex-row gap-5 px-4 mb-3">
      {categories.map((c, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setActiveCategory(c)}
          className={`text-sm ${activeCategory == c ? "bg-green-200" : "bg-gray-200"} bg-gray-200 px-3 py-1 rounded-full`}
        >
          <Text>{c}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function ChatList() {
  const dummyChats = [
    {
      _id: 1,
      name: "John Doe",
      message: "Hi, How r u?",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "10:45 AM",
      unread: 2,
    },
    {
      _id: 2,
      name: "Jane Smith",
      message: "Let's go for movie!",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "9:20 AM",
      unread: 3,
    },
    {
      _id: 3,
      name: "John Doe",
      message: "Have You Finished the Assignment?",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "2:45 PM",
      unread: 1,
    },
  ];

  return (
    <FlatList
      data={dummyChats}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center px-4 py-2">
          <Image
            className="w-12 h-12 rounded-full"
            source={{ uri: item.avatar }}
          />
          <View className="flex-1 ml-4">
            <View className="flex-row justify-between">
              <Text className="text-base font-semibold text-black">
                {item.name}
              </Text>
              <Text className="text-xs text-gray-500">{item.createdAt}</Text>
            </View>

            <View className="flex-row justify-between">
              <Text
                numberOfLines={1}
                className="flex-1 mr-5 text-sm text-gray-500"
              >
                {item.message}
              </Text>

              <View className="bg-green-600 min-w-[20px] rounded-full items-center justify-center px-2 ml-2">
                <Text className="text-xs font-bold text-white">
                  {item.unread}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
