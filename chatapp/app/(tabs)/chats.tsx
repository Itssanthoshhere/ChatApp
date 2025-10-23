import CustomTextInput from "@/components/CustomTextInput";
import { getUser } from "@/utils/storage";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, FlatList, Image } from "react-native";

export default function ChatsScreen() {
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
        className="flex-1 ml-2 text-md"
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
      message: "Hi, how are you?",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "10:45 AM",
      unread: 2,
    },
    {
      _id: 2,
      name: "Jane Smith",
      message: "Let's go for a movie!",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "9:20 AM",
      unread: 3,
    },
    {
      _id: 3,
      name: "Alex Johnson",
      message: "Have you finished the assignment?",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "2:45 PM",
      unread: 0,
    },
    {
      _id: 4,
      name: "Sophia Lee",
      message: "Let's catch up later!",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "11:10 AM",
      unread: 1,
    },
    {
      _id: 5,
      name: "David Brown",
      message: "Meeting at 5 PM confirmed.",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "4:05 PM",
      unread: 0,
    },
    {
      _id: 6,
      name: "Emily Davis",
      message: "Can you send me the notes?",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "1:30 PM",
      unread: 4,
    },
    {
      _id: 7,
      name: "Michael Scott",
      message: "Don't forget the meeting tomorrow!",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "3:15 PM",
      unread: 1,
    },
    {
      _id: 8,
      name: "Pam Beesly",
      message: "Great work on the project!",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "12:00 PM",
      unread: 0,
    },
    {
      _id: 9,
      name: "Jim Halpert",
      message: "See you at lunch.",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "11:50 AM",
      unread: 2,
    },
    {
      _id: 10,
      name: "Dwight Schrute",
      message: "Bears, beets, Battlestar Galactica.",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "8:45 AM",
      unread: 0,
    },
    {
      _id: 11,
      name: "Stanley Hudson",
      message: "Pretzel day is the best day!",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "10:10 AM",
      unread: 3,
    },
    {
      _id: 12,
      name: "Angela Martin",
      message: "The cat party is tonight.",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      createdAt: "9:55 AM",
      unread: 0,
    },
  ];

  return (
    <View className="bg-white">
      {dummyChats.length > 0 ? (
        <FlatList
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListHeaderComponent={() => (
            <>
              <SearchBar />
              <CategoryTabs />
            </>
          )}
          ListFooterComponent={() => (
            <View className="items-center justify-center py-6">
              <MaterialCommunityIcons
                name="lock-outline"
                size={16}
                color={"gray"}
              />
              <Text className="mt-2 text-xs text-gray-500">
                Your Personal messages are not end to end encrypted
              </Text>
            </View>
          )}
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
                  <Text className="text-lg font-semibold text-black">
                    {item.name}
                  </Text>
                  <Text className="text-xs text-gray-500">
                    {item.createdAt}
                  </Text>
                </View>

                <View className="flex-row justify-between">
                  <Text
                    numberOfLines={1}
                    className="flex-1 mr-5 text-gray-500 text-md"
                  >
                    {item.message}
                  </Text>
                  {item.unread > 0 && (
                    <View className="bg-green-600 min-w-[20px] rounded-full items-center justify-center px-2 ml-2">
                      <Text className="text-xs font-bold text-white">
                        {item.unread}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <EmptyChats />
      )}
    </View>
  );
}

function EmptyChats() {
  return (
    <View className="items-center justify-center flex-1 p-6 bg-white ">
      <MaterialIcons name="chat-bubble-outline" size={100} />
      <Text className="mt-6 text-xl font-semibold">
        Start Chatting on ChatApp
      </Text>
      <Text className="mt-2 text-center text-gray-500">
        Tap the message icon below to start a new conversation
      </Text>
      <TouchableOpacity className="absolute p-4 bg-green-500 rounded-full bottom-6 right-6">
        <MaterialIcons name="message" size={28} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}
