import { FOOD_COLLECTION } from '@storage/storageConfig'
import { foodsGetALl } from './foodsGetAll'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function foodRemove(id: number) {
  try {
    const storageFoods = await foodsGetALl()
    const foods = storageFoods.filter((item) => item.id !== id)

    await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify(foods))
  } catch (error) {
    throw error
  }
}
