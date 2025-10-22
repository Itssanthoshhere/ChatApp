import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Constants from "expo-constants";

import CustomTextInput from "@/components/CustomTextInput";
import * as ImagePicker from "expo-image-picker";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUser, saveUser as saveUserAPI, updateUser } from "@/utils/api";
import { saveUser as saveUserStorage } from "@/utils/storage";

const API_URL =
  Constants.expoConfig?.extra?.API_URL || "http://10.12.26.186:5001/api";

export default function AccountSetupScreen() {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { phone } = useLocalSearchParams();
  const router = useRouter();

  // Safely get phone as string
  const phoneStr = Array.isArray(phone) ? phone[0] : phone;

  const loadUser = async () => {
    if (!phoneStr) return; // guard against undefined phone
    try {
      const data = await fetchUser(phoneStr);
      if (data) {
        setName(data.name || "");
        setId(data._id || "");
        setProfileImage(data.profileImage || "");
      }
    } catch (error) {
      console.log("No User Found", error);
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Save or Update Profile
  const saveProfile = async () => {
    if (!name.trim()) {
      Alert.alert("Name Required", "Please enter your name before proceeding");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("phone", phoneStr!); // guaranteed by guard
      formData.append("name", name);

      if (profileImage && profileImage.startsWith("file://")) {
        const fileName = profileImage.split("/").pop() || "profile.jpg";
        const fileType = fileName.split(".").pop()?.toLowerCase();
        const mimeType = fileType === "png" ? "image/png" : "image/jpeg";

        formData.append("profileImage", {
          uri: profileImage,
          type: mimeType,
          name: fileName,
        } as unknown as Blob); // cast for TS
      }

      setLoading(true);
      let response;

      if (id) {
        response = await updateUser(id, formData);
      } else {
        response = await saveUserAPI(formData);
      }

      if (response) {
        // Success
        await saveUserStorage(response);
        router.push("/chats");
      } else {
        Alert.alert("Error", "Something went wrong while saving your profile");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error saving profile", error.message);
      } else {
        console.log("Unknown error", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();

    const handleBackPress = () => {
      router.replace("/");
      return true;
    };

    // Listen back button press
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);

  if (loading)
    return (
      <ActivityIndicator
        size="large"
        color="green"
        className="justify-center flex-1"
      />
    );

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
      <TouchableOpacity
        className="w-full p-4 bg-green-500 rounded-full"
        onPress={saveProfile}
      >
        <Text className="text-lg font-bold text-center text-white">
          Save & Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
