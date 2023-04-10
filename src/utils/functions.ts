import { Food } from '@storage/food/FoodStorageDTO'

export async function mapper(foods: Food[]) {
  return foods.reduce((acc: any, currentValue: Food) => {
    const index = acc.findIndex((item: Food) => item.date === currentValue.date)
    if (index === -1) {
      acc.push({
        date: currentValue.date,
        data: [currentValue],
      })
    } else {
      acc[index].data.push(currentValue)
    }
    return acc
  }, [])
}
