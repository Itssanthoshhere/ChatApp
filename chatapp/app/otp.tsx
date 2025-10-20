import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function OTPScreen() {
  const { phone } = useLocalSearchParams();
  const [generatedOTP, setGenerateOTP] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const router = useRouter();
  const [error, setError] = useState("");

  // Generate OTP (6-digit random)
  const generateRandomOTP = () => {
    const randomOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setGenerateOTP(randomOTP);
    console.log("Generated OTP", randomOTP); //Debug
  };

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimer(30);
    intervalRef.current = setInterval(
      () => setTimer((prev) => (prev > 0 ? prev - 1 : 0)),
      1000
    );
  };

  const resendOtp = () => {
    generateRandomOTP();
    startTimer();
  };

  // Verify OTP
  const handleVerify = () => {
    setError("");
    if (otp.length !== 6) {
      // Set Error
      setError("OTP must be 6 digits.");
      return;
    }

    if (otp !== generatedOTP) {
      setError("Incorrect OTP. Please try again.");
      return;
    }

    // Success
    router.push({ pathname: "/account-setup", params: { phone } });
  };

  // Generate OTP & Start Timer on Screen Load
  useEffect(() => {
    generateRandomOTP();
    const interval = setInterval(
       () => setTimer((prev) => (prev > 0 ? prev - 1 : 0)),
       1000
     );
    return () => clearInterval(interval);
      () => setTimer((prev) => (prev > 0 ? prev - 1 : 0)),
      1000
    );
    return () => clearInterval(intervel);
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center px-5">
      {/* Enter Title */}
      <Text className="text-3xl font-bold text-gray-900 mb-4">Enter OTP</Text>

      {/* Description */}
      <Text className="text-gray-500 text-lg text-center mb-6">
        A 6-digit code has been sent to {phone} ({generatedOTP})
      </Text>

      {/* OTP Input */}
      <TextInput
        className="border border-gray-300 p-4 text-lg rounded-lg text-center w-3/4"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
        maxLength={6}
      />

      {/* Error Message */}
      {error ? <Text className="text-red-500 mt-3">{error}</Text> : null}

      {/* Verify Button  */}
      <TouchableOpacity
        onPress={handleVerify}
        className="p-4 w-full rounded-full mt-6  bg-green-500"
      >
        <Text className="text-center text-white font-bold text-lg">Verify</Text>
      </TouchableOpacity>

      {/* Change Number */}
      <TouchableOpacity className="mt-4" onPress={() => router.push("/login")}>
        <Text className="text-blue-500 text-lg">Change Number</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={timer > 0}
        className="mt-3"
        onPress={resendOtp}
      >
        <Text className={`${timer ? "text-gray-400" : "text-blue-400"}`}>
          {timer > 0 ? `Resend OTP in ${timer} secs` : "Resend"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
