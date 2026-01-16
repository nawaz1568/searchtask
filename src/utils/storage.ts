import AsyncStorage from '@react-native-async-storage/async-storage';

const SEARCH_KEY = 'SAVED_SEARCH_TEXT';

export const saveSearchText = async (text: string) => {
  await AsyncStorage.setItem(SEARCH_KEY, text);
};

export const getSearchText = async () => {
  return await AsyncStorage.getItem(SEARCH_KEY);
};
