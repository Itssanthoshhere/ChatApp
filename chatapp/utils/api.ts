import axios from "axios";
import Constants from "expo-constants";

const API_URL = Constants.expoConfig?.extra?.API_URL;

// Define a User type if needed
export interface User {
  _id?: string;
  name?: string;
  phone?: string;
  profileImage?: string;
}

export const fetchUser = async (phone: string): Promise<User | undefined> => {
  try {
    const response = await axios.get(`${API_URL}/users/${phone}`);
    return response.data;
  } catch (error) {
    console.log("fetchUser API error", error);
  }
};

export const updateUser = async (
  id: string,
  formData: FormData
): Promise<User | undefined> => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.log("updateUser API error", error);
  }
};

export const saveUser = async (
  formData: FormData
): Promise<User | undefined> => {
  try {
    const response = await axios.post(`${API_URL}/users`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.log("saveUser API error", error);
  }
};
