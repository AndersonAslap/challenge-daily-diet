import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, Platform } from 'react-native'

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

import dayjs from 'dayjs'

import {
  Container,
  ContainerForm,
  ContainerInputSelect,
  ContentInputDate,
  ContentInputSelect,
  Form,
  DateTimeButton,
} from './styles'

import { foodGetById } from '@storage/food/foodGetById'
import { foodUpdate } from '@storage/food/foodUpdate'

import { HeaderNavigation } from '@components/HeaderNavigation'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { Select } from '@components/Select'
import { Loading } from '@components/Loading'

type RouteParams = {
  id: number
}

type TypeDate = 'date' | 'time'

export function EditFood() {
  const [selectActiveInDient, setSelectActiveInDiet] = useState(false)
  const [selectActiveNotInDient, setSelectActiveNotInDiet] = useState(false)

  const route = useRoute()
  const { id } = route.params as RouteParams

  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date>(new Date())
  const [inDiet, setInDiet] = useState(false)

  const [showDatePicker, setShowDatePicker] = useState(false)
  const [modeDatePicker, setModeDatePicker] = useState<TypeDate>('time')

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
      date: dayjs(date).format('DD/MM/YYYY'),
      timer: dayjs(date).format('HH:mm'),
      inDiet,
      datetime: date,
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
    setIsLoading(true)

    try {
      const { name, description, inDiet, datetime } = await foodGetById(id)
      setName(name)
      setDescription(description)
      setDate(datetime)
      setInDiet(inDiet)

      handleSelectActive(inDiet ? 'SUCCESS' : 'FAIL')
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      Alert.alert('Editar', 'Falha ao obter os dados.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangeDate = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowDatePicker(false)
    if (selectedDate) {
      setDate(selectedDate)
    }
  }

  function handleShowDatePiker(type: TypeDate) {
    if (Platform.OS === 'android') {
      setShowDatePicker(true)
    }
    setModeDatePicker(type)
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <Container>
      <HeaderNavigation title="Editar Refeição" isEditingFood={true} />
      {isLoading ? (
        <Loading />
      ) : (
        <ContainerForm>
          <Form behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
              <DateTimeButton onPress={() => handleShowDatePiker('date')}>
                <Input
                  label="Data"
                  editable={false}
                  value={dayjs(date).format('DD/MM/YYYY')}
                  style={{ width: 153.5 }}
                />
              </DateTimeButton>
              <DateTimeButton onPress={() => handleShowDatePiker('time')}>
                <Input
                  label="Hora"
                  editable={false}
                  value={dayjs(date).format('HH:mm')}
                  style={{ width: 153.5 }}
                />
              </DateTimeButton>
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

            <Button
              title="Salvar refeição"
              onPress={handleUpdateFood}
              style={{ marginTop: 90 }}
            />
          </Form>
        </ContainerForm>
      )}

      {showDatePicker && (
        <DateTimePicker
          value={new Date(date)}
          mode={modeDatePicker}
          onChange={handleChangeDate}
        />
      )}
    </Container>
  )
}
