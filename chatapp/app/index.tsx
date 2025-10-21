import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import "../global.css";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { getUser } from "@/utils/storage";

export default function WelcomeScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const redirectUser = async () => {
    try {
      setLoading(true);
      const user = await getUser();
      if (user) {
        router.replace("/chats");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    redirectUser();
  }, []);

  if (loading)
    return (
      <ActivityIndicator
        size={"large"}
        color={"green"}
        className="justify-center flex-1"
      />
    );

  return (
    <View className="items-center justify-center flex-1 px-5 bg-white">
      {/* Logo */}
      <Image
        className="mb-10 w-28 h-28"
        source={require("../assets/images/WhatsApp.png")}
      />

      {/* Welcome Text */}
      <Text className="mb-4 text-3xl font-bold text-center text-gray-900">
        Welcome to ChatApp!
      </Text>

      {/* Privacy Terms */}
      <Text className="mb-8 text-lg text-center">
        Read Our
        <Text className="text-blue-500"> Privacy Policy</Text>. Tap "Agree &
        Continue" to accept the
        <Text className="text-blue-500"> Terms and Conditions</Text>
      </Text>

      {/* Agree & Continue Button */}
      <TouchableOpacity
        className="w-full px-6 py-4 bg-green-500 rounded-full"
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text className="text-lg font-bold text-center text-white">
          Agree & Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
