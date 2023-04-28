import { formatNumber } from '@utils/formatter'
import { foodsGetALl } from './foodsGetAll'

export async function foodGetPercentInDiet() {
  try {
    const storage = await foodsGetALl()
    const foodsInDiet = storage.filter((item) => item.inDiet === true)

    if (storage.length === 0) {
      return 0
    }

    return formatNumber((foodsInDiet.length / storage.length) * 100)
  } catch (error) {
    throw error
  }
}
