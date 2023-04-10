export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      newFood: undefined
      statistic: undefined
      feedback: {
        inDiet: boolean
      }
      foodDetail: {
        id: number
        inDiet: boolean
      }
      editFood: {
        id: number
      }
    }
  }
}
