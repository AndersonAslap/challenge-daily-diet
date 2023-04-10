import AsyncStorage from '@react-native-async-storage/async-storage'
import { Food } from './FoodStorageDTO'
import { FOOD_COLLECTION } from '@storage/storageConfig'
import { foodsGetALl } from './foodsGetAll'

export async function foodCreate(food: Food) {
  try {
    const storageFoods = await foodsGetALl()
    const storage = JSON.stringify([...storageFoods, food])

    await AsyncStorage.setItem(FOOD_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
