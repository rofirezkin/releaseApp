import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  //key dan value itu dari objek adanya makannya harus menentukan dua parameter itu
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};

//dalam asyncronus itu value yang disimpan harus berupa string
//maknnya di dalam store data itu dia ada JSOn.stringify agar bisa di simpan di asyncr storage
