// components/CustomTextInput.tsx
import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  className?: string; // NativeWind classes
}

const CustomTextInput: React.FC<Props> = ({ className, style, ...props }) => {
  return (
    <TextInput
      placeholderTextColor="#9ca3af" // global placeholder color
      className={className} // NativeWind className works here
      style={style} // merge any inline styles
      {...props}
    />
  );
};

export default CustomTextInput;
