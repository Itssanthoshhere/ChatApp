import AsyncStorage from "@react-native-async-storage/async-storage";

// Save Data to Storage
export const saveToStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(`Error saving data [${key}]`, error);
  }
};

// Remove Data from Storage
export const removeFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(`Error removing data [${key}]`, error);
  }
};

// Get Data from Storage
export const getFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log(`Error getting data [${key}]`, error);
  }
};

const USER_KEY = "user";
export const saveUser = async (user: any) => saveToStorage(USER_KEY, user);
export const removeUser = async () => removeFromStorage(USER_KEY);
export const getUser = async () => getFromStorage(USER_KEY);
