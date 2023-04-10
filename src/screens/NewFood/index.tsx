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
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { Food } from '@storage/food/FoodStorageDTO'
import { foodCreate } from '@storage/food/foodCreate'

export function NewFood() {
  const [selectActiveInDient, setSelectActiveInDiet] = useState(false)
  const [selectActiveNotInDient, setSelectActiveNotInDiet] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [timer, setTimer] = useState('')
  const [inDiet, setInDiet] = useState(false)

  const navigation = useNavigation()

  function handleSelectActive(type: string) {
    if (type === 'SUCCESS') {
      setInDiet(true)
      setSelectActiveInDiet(true)
      setSelectActiveNotInDiet(false)
    } else {
      setInDiet(false)
      setSelectActiveInDiet(false)
      setSelectActiveNotInDiet(true)
    }
  }

  async function handleAddFood() {
    const food: Food = {
      id: new Date().getTime(),
      name,
      description,
      date,
      timer,
      inDiet,
    }

    try {
      await foodCreate(food)
      navigation.navigate('feedback', { inDiet })
    } catch (error) {
      console.log(error)
      Alert.alert('Criar comida', 'Não foi possível cadastrar a comida.')
    }
  }

  return (
    <Container>
      <HeaderNavigation title="Nova refeição" />
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
              value={date}
              onChangeText={setDate}
              label="Data"
              style={{ width: 153.5 }}
            />
            <Input
              value={timer}
              onChangeText={setTimer}
              label="Hora"
              style={{ width: 153.5 }}
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

        <Button title="Cadastrar refeição" onPress={handleAddFood} />
      </ContainerForm>
    </Container>
  )
}
