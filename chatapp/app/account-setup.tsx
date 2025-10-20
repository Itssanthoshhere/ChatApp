import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomTextInput from "@/components/CustomTextInput";
import axios from "axios";
import Constants from "expo-constants";
import { useLocalSearchParams } from "expo-router";

const API_URL =
  Constants.expoConfig?.extra?.API_URL || "http://10.12.29.118:5001/api";

export default function AccountSetupScreen() {
  const [name, setName] = useState<string>("");
  const { phone } = useLocalSearchParams();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/${phone}`);
      if (response.data) {
        setName(response.data.name || "");
      }
    } catch (error) {
      console.log("No User Found");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View className="flex-1 bg-white items-center p-6">
      <Text className="text-3xl font-bold mb-4">Set up your Profile</Text>

      {/* Profile Image */}
      <TouchableOpacity className="mb-6">
        <Image
          className="w-32 h-32 rounded-full border-2 border-gray-300"
          source={require("../assets/images/icon.png")}
        />
      </TouchableOpacity>

      {/* Name Input */}
      <CustomTextInput
        className="border border-gray-300 rounded-lg p-4 w-full text-lg mb-4"
        placeholder="Enter Your Name"
        value={name}
        onChangeText={setName}
      />

      {/* Save Button */}
      <TouchableOpacity className="p-4 w-full rounded-full bg-green-500">
        <Text className="text-white text-center font-bold text-lg">
          Save & Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
