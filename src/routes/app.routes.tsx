import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EditFood } from '@screens/EditFood'
import { Feedback } from '@screens/Feedback'
import { FoodDetail } from '@screens/FoodDetail'
import { Home } from '@screens/Home'
import { NewFood } from '@screens/NewFood'
import { Statistic } from '@screens/Statistic'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newFood" component={NewFood} />
      <Screen name="editFood" component={EditFood} />
      <Screen name="foodDetail" component={FoodDetail} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}
