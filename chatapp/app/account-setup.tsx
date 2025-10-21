import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import Constants from "expo-constants";
import CustomTextInput from "@/components/CustomTextInput";
import * as ImagePicker from "expo-image-picker";

const API_URL =
  Constants.expoConfig?.extra?.API_URL || "http://10.12.26.186:5001/api";

export default function AccountSetupScreen() {
  const [name, setName] = useState<string>("");
  const [profileImage, setProfileImage] = useState("");
  const { phone } = useLocalSearchParams();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/${phone}`);
      if (response.data) {
        setName(response.data.name || "");
        setProfileImage(response.data.profileImage);
      }
    } catch (error) {
      console.log("No User Found");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View className="items-center flex-1 p-6 bg-white">
      <Text className="mb-4 text-3xl font-bold">Set up your Profile</Text>

      {/* Profile Image */}
      <TouchableOpacity className="mb-6" onPress={pickImage}>
        {profileImage ? (
          <Image
            className="w-32 h-32 border-2 border-gray-300 rounded-full"
            source={{ uri: profileImage }}
          />
        ) : (
          <View className="items-center justify-center w-32 h-32 bg-gray-200 border-2 border-gray-400 rounded-full">
            <Text>Add Photo</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Name Input */}
      <CustomTextInput
        className="w-full p-4 mb-4 text-lg border border-gray-300 rounded-lg"
        placeholder="Enter Your Name"
        value={name}
        onChangeText={setName}
      />

      {/* Save Button */}
      <TouchableOpacity className="w-full p-4 bg-green-500 rounded-full">
        <Text className="text-lg font-bold text-center text-white">
          Save & Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
