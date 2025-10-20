import CustomTextInput from "@/components/CustomTextInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [phone, setPhone] = useState("+91");

  const router = useRouter();
  // Whatsapp phone number validation
  const isValidNumber = /^\+\d{1,3}\s?\d{10}$/.test(phone);

  const handleNext = () => {
    if (!isValidNumber) {
      Alert.alert("Invalid number", "Enter a valid phone number.");
      return;
    }
    router.push({ pathname: "/otp", params: { phone } });
  };

  return (
    <View className="flex-1 bg-white items-center justify-center px-5">
      {/* Heading */}
      <Text className="text-3xl font-bold text-gray-900 mb-4">
        Enter Your Phone Number
      </Text>

      {/* Description */}
      <Text className="text-gray-500 text-lg text-center mb-6">
        WhatsApp will send an SMS to verify your Number
      </Text>

      {/* Phone number Input */}
      <CustomTextInput
        className="border border-gray-300 p-4 text-lg rounded-lg w-full text-center"
        placeholder="+91 9876543210"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Next Button */}
      <TouchableOpacity
        className={`p-4 w-full ${isValidNumber ? "bg-green-500" : "bg-gray-300"} rounded-full mt-6`}
        disabled={!isValidNumber}
        onPress={handleNext}
      >
        <Text className="text-white text-center font-bold text-lg">Next</Text>
      </TouchableOpacity>
    </View>
  );
}
