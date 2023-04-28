import React, { useCallback, useState } from 'react'
import { Alert, SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import {
  Container,
  Header,
  Logo,
  NewFood,
  PhotoProfile,
  TextFood,
} from './styles'

import { mapper } from '@utils/mapperFoods'
import { formatDate } from '@utils/formatter'

import { foodsGetALl } from '@storage/food/foodsGetAll'
import { foodGetPercentInDiet } from '@storage/food/foodGetPercentInDiet'

import logo from '@assets/logo.png'
import user from '@assets/user.png'

import { Percent } from '@components/Percent'
import { Button } from '@components/Button'
import { FoodItem } from '@components/FoodItem'
import { DateFood } from '@components/DateFood'
import { EmptyFoods } from '@components/EmptyFoods'
import { Loading } from '@components/Loading'

export function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const [foods, setFoods] = useState([])

  const [percent, setPercent] = useState(0)

  const navigation = useNavigation()

  function newFood() {
    return navigation.navigate('newFood')
  }

  async function fetchFoods() {
    setIsLoading(true)

    try {
      const percentFoodInDiet = await foodGetPercentInDiet()
      const foodsStorage = await foodsGetALl()
      const foodsMapper = await mapper(foodsStorage)

      setFoods(foodsMapper)
      setPercent(percentFoodInDiet)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      Alert.alert('Erro', 'Erro ao carregar as comidas.')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFoods()
    }, []),
  )

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <Logo source={logo} />
            <PhotoProfile source={user} />
          </Header>

          <Percent percent={percent} />

          <NewFood>
            <TextFood>Refeições</TextFood>
            <Button title="Nova refeição" icon="add" onPress={newFood} />
          </NewFood>

          <SectionList
            sections={foods}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <FoodItem item={item} />}
            renderSectionHeader={({ section: { date } }) => (
              <DateFood date={formatDate(date)} />
            )}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyFoods />}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </>
      )}
    </Container>
  )
}
