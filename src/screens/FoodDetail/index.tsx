import { HeaderNavigation } from '@components/HeaderNavigation'
import {
  Box,
  Container,
  ContainerContent,
  Content,
  Text,
  Title,
} from './styles'

import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { foodGetById } from '@storage/food/foodGetById'
import { Alert, View } from 'react-native'
import { foodRemove } from '@storage/food/foodRemove'

type RouteParams = {
  id: number
  inDiet: boolean
}

export function FoodDetail() {
  const route = useRoute()
  const { id, inDiet } = route.params as RouteParams

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [timer, setTimer] = useState('')

  const navigation = useNavigation()

  async function fetchFood() {
    try {
      const { name, description, date, timer } = await foodGetById(id)
      setName(name)
      setDescription(description)
      setDate(date)
      setTimer(timer)
    } catch (error) {
      console.log(error)
      Alert.alert('Detalhe', 'Falha ao obter o detalhe da comida.')
    }
  }

  function handleEditFood() {
    navigation.navigate('editFood', { id })
  }

  async function execRemoveFood() {
    try {
      await foodRemove(id)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Detalhe', 'Falha ao obter o detalhe da comida.')
    }
  }

  function handleRemoveFood() {
    Alert.alert('Remover', 'Você deseja remover esta refeição?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => execRemoveFood(),
      },
    ])
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <Container inDiet={inDiet}>
      <HeaderNavigation title="Refeição" />
      <ContainerContent>
        <Content>
          <Box>
            <Title>{name}</Title>
            <Text>{description}</Text>
          </Box>

          <Box>
            <Label title="Data e hora" />
            <Text>
              {date} às {timer}
            </Text>
          </Box>
        </Content>

        <Button title="Editar refeição" onPress={handleEditFood} />
        <Button
          type="LIGHT"
          title="Excluir refeição"
          onPress={handleRemoveFood}
        />
      </ContainerContent>
    </Container>
  )
}
