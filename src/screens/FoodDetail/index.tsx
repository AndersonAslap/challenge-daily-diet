import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert } from 'react-native'

import { foodGetById } from '@storage/food/foodGetById'
import { foodRemove } from '@storage/food/foodRemove'

import {
  Box,
  Container,
  ContainerContent,
  Content,
  Text,
  Title,
} from './styles'

import { HeaderNavigation } from '@components/HeaderNavigation'
import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { Loading } from '@components/Loading'
import { Flag } from '@components/Flag'
import { Modal } from '@components/Modal'

type RouteParams = {
  id: number
  inDiet: boolean
}

export function FoodDetail() {
  const route = useRoute()
  const { id, inDiet } = route.params as RouteParams

  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [timer, setTimer] = useState('')

  const [openModal, setOpenModal] = useState(false)

  const navigation = useNavigation()

  async function fetchFood() {
    try {
      setIsLoading(true)
      const { name, description, date, timer } = await foodGetById(id)
      setName(name)
      setDescription(description)
      setDate(date)
      setTimer(timer)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      Alert.alert('Detalhe', 'Falha ao obter o detalhe da comida.')
    } finally {
      setIsLoading(false)
    }
  }

  function handleEditFood() {
    navigation.navigate('editFood', { id })
  }

  async function execRemoveFood(id: number) {
    try {
      await foodRemove(id)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Detalhe', 'Falha ao obter o detalhe da comida.')
    }
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
      <Modal
        visible={openModal}
        onPressCancel={() => setOpenModal(false)}
        onPressConfirm={() => execRemoveFood(id)}
      />
      <Container inDiet={inDiet}>
        <HeaderNavigation title="Refeição" />

        {isLoading ? (
          <Loading />
        ) : (
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

              <Flag inDiet={inDiet} />
            </Content>

            <Button
              title="Editar refeição"
              onPress={handleEditFood}
              icon="edit"
            />
            <Button
              icon="delete-outline"
              type="LIGHT"
              title="Excluir refeição"
              onPress={() => setOpenModal(true)}
            />
          </ContainerContent>
        )}
      </Container>
    </>
  )
}
