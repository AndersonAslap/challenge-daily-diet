import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'

import { StatusBar, Text } from 'react-native'

import { ThemeProvider } from 'styled-components/native'

import theme from './src/theme'
import { Home } from '@screens/Home'
import { Feedback } from '@screens/Feedback'
import { Statistic } from '@screens/Statistic'
import { NewFood } from '@screens/NewFood'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <NewFood /> : <Text>Carregando</Text>}
    </ThemeProvider>
  )
}
