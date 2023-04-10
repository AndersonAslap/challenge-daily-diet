import AsyncStorage from '@react-native-async-storage/async-storage'
import { Food } from './FoodStorageDTO'
import { foodsGetALl } from './foodsGetAll'
import { FOOD_COLLECTION } from '@storage/storageConfig'

export async function foodUpdate(food: Food) {
  try {
    const foods = await foodsGetALl()

    const index = foods.findIndex((item) => item.id === food.id)

    foods[index] = food

    await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify(foods))
  } catch (error) {
    throw error
  }
}
