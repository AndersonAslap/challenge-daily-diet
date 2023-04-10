import { Alert, SectionList, StyleSheet, Text, View } from 'react-native'
import {
  Container,
  Header,
  Logo,
  NewFood,
  PhotoProfile,
  TextFood,
} from './styles'

import logo from '@assets/logo.png'
import user from '@assets/user.png'
import { Percent } from '@components/Percent'
import { Button } from '@components/Button'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { FoodItem } from '@components/FoodItem'
import { mapper } from '@utils/functions'
import { useCallback, useState } from 'react'
import { foodsGetALl } from '@storage/food/foodsGetAll'
import { cleanStorage } from '@storage/storageConfig'

export function Home() {
  const [foods, setFoods] = useState([])

  const navigation = useNavigation()

  function newFood() {
    return navigation.navigate('newFood')
  }

  async function fetchFoods() {
    try {
      const foodsStorage = await foodsGetALl()
      const foodsMapper = await mapper(foodsStorage)

      setFoods(foodsMapper)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Erro ao carregar as comidas.')
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFoods()
    }, []),
  )

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <PhotoProfile source={user} />
      </Header>

      <Percent percent={50} />

      <NewFood>
        <TextFood>Refeições</TextFood>
        <Button title="Nova refeição" onPress={newFood} />
      </NewFood>

      <SectionList
        sections={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodItem item={item} />}
        renderSectionHeader={({ section: { date } }) => <Text>{date}</Text>}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text>Não tem refeição cadastrada</Text>}
      />
    </Container>
  )
}
