import AsyncStorage from '@react-native-async-storage/async-storage'

const FOOD_COLLECTION = '@daily-diet:foods'

async function cleanStorage() {
  await AsyncStorage.removeItem(FOOD_COLLECTION)
}

export { FOOD_COLLECTION, cleanStorage }
