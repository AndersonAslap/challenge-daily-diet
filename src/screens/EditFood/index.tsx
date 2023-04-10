import { HeaderNavigation } from '@components/HeaderNavigation'
import {
  Container,
  ContainerForm,
  ContainerInputSelect,
  ContentInputDate,
  ContentInputSelect,
  Form,
} from './styles'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { Select } from '@components/Select'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert } from 'react-native'
import { foodGetById } from '@storage/food/foodGetById'
import { foodUpdate } from '@storage/food/foodUpdate'

type RouteParams = {
  id: number
}

export function EditFood() {
  const [selectActiveInDient, setSelectActiveInDiet] = useState(false)
  const [selectActiveNotInDient, setSelectActiveNotInDiet] = useState(false)

  const route = useRoute()
  const { id } = route.params as RouteParams

  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [timer, setTimer] = useState('')
  const [inDiet, setInDiet] = useState(false)

  function handleSelectActive(type: string) {
    if (type === 'SUCCESS') {
      setSelectActiveInDiet(true)
      setSelectActiveNotInDiet(false)
      setInDiet(true)
    } else {
      setSelectActiveInDiet(false)
      setSelectActiveNotInDiet(true)
      setInDiet(false)
    }
  }

  async function handleUpdateFood() {
    const food = {
      id,
      name,
      description,
      date,
      timer,
      inDiet,
    }

    try {
      await foodUpdate(food)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Editar', 'Falha ao editar os dados.')
    }
  }

  async function fetchFood() {
    try {
      const { name, description, date, timer, inDiet } = await foodGetById(id)
      setName(name)
      setDescription(description)
      setDate(date)
      setTimer(timer)
      setInDiet(inDiet)

      handleSelectActive(inDiet ? 'SUCCESS' : 'FAIL')
    } catch (error) {
      console.log(error)
      Alert.alert('Editar', 'Falha ao obter os dados.')
    }
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <Container>
      <HeaderNavigation title="Editar Refeição" isEditingFood={true} />
      <ContainerForm>
        <Form>
          <Input label="Nome" value={name} onChangeText={setName} />

          <Input
            label="Descrição"
            multiline={true}
            numberOfLines={5}
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />

          <ContentInputDate>
            <Input
              label="Data"
              style={{ width: 153.5 }}
              value={date}
              onChangeText={setDate}
            />
            <Input
              label="Hora"
              style={{ width: 153.5 }}
              value={timer}
              onChangeText={setTimer}
            />
          </ContentInputDate>

          <ContainerInputSelect>
            <Label title="Está dentro da dieta?" />
            <ContentInputSelect>
              <Select
                icon="circle"
                title="Sim"
                isActive={selectActiveInDient}
                type="SUCCESS"
                onPress={() => handleSelectActive('SUCCESS')}
              />
              <Select
                icon="circle"
                title="Não"
                isActive={selectActiveNotInDient}
                type="FAIL"
                onPress={() => handleSelectActive('FAIL')}
              />
            </ContentInputSelect>
          </ContainerInputSelect>
        </Form>

        <Button title="Salvar refeição" onPress={handleUpdateFood} />
      </ContainerForm>
    </Container>
  )
}
