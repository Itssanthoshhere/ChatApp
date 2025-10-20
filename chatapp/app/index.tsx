import { Image, Text, TouchableOpacity, View } from "react-native";
import "../global.css";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="bg-white flex-1 items-center justify-center px-5">
      {/* Logo */}
      <Image
        className="w-28 h-28 mb-10"
        source={require("../assets/images/WhatsApp_Logo_green.png")}
      />

      {/* Welcome Text */}
      <Text className="text-3xl font-bold text-gray-900 text-center mb-4">
        Welcome to ChatApp!
      </Text>

      {/* Privacy Terms */}
      <Text className="text-center text-lg mb-8">
        Read Our
        <Text className="text-blue-500"> Privacy Policy</Text>. Tap "Agree &
        Continue" to accept the
        <Text className="text-blue-500"> Terms and Conditions</Text>
      </Text>

      {/* Agree & Continue Button */}
      <TouchableOpacity
        className="bg-green-500 px-6 py-4 rounded-full w-full"
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text className="text-white text-center font-bold text-lg">Agree & Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
