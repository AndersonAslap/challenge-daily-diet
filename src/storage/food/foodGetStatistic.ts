import { foodsGetALl } from './foodsGetAll'

export async function foodGetStatistic() {
  try {
    const foods = await foodsGetALl()

    let sequency_list = [0]

    const data = foods.reduce(
      (acc, item) => {
        acc.registerFoods++

        if (item.inDiet) {
          acc.foodsInDiet++

          sequency_list[sequency_list.length - 1] =
            sequency_list[sequency_list.length - 1] + 1
        } else {
          sequency_list.push(0)
          acc.foodsNotInDiet++
        }

        acc.sequency = Math.max(...sequency_list)

        return acc
      },
      {
        sequency: 0,
        registerFoods: 0,
        foodsInDiet: 0,
        foodsNotInDiet: 0,
      },
    )

    return data
  } catch (error) {
    throw error
  }
}
