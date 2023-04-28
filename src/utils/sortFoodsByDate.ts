import { Food } from '@storage/food/FoodStorageDTO'

export function sortFoodsByDate(foods: Food[]) {
  foods.sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-')) as any
    const dateB = new Date(b.date.split('/').reverse().join('-')) as any
    return dateA - dateB
  })

  return foods
}
