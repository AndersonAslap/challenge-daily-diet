import { foodsGetALl } from './foodsGetAll'

export async function foodGetById(id: number) {
  try {
    const foods = await foodsGetALl()
    const food = foods.find((item) => item.id === id)

    if (food) {
      return food
    }

    throw new Error()
  } catch (error) {
    throw error
  }
}
