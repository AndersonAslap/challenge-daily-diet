import React, { useState } from 'react'
import { Alert, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  ContainerForm,
  ContainerInputSelect,
  ContentInputDate,
  ContentInputSelect,
  DateTimeButton,
  Form,
} from './styles'

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

import dayjs from 'dayjs'

import { Food } from '@storage/food/FoodStorageDTO'
import { foodCreate } from '@storage/food/foodCreate'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { Select } from '@components/Select'
import { HeaderNavigation } from '@components/HeaderNavigation'

type TypeDate = 'date' | 'time'

export function NewFood() {
  const [selectActiveInDient, setSelectActiveInDiet] = useState(false)
  const [selectActiveNotInDient, setSelectActiveNotInDiet] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [timer, setTimer] = useState('')
  const [inDiet, setInDiet] = useState(false)
  const [date, setDate] = useState<Date>(new Date())

  const [showDatePicker, setShowDatePicker] = useState(false)
  const [modeDatePicker, setModeDatePicker] = useState<TypeDate>('time')

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
      date: dayjs(date).format('DD/MM/YYYY'),
      timer: dayjs(date).format('HH:mm'),
      datetime: date,
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

  return (
    <Container>
      <HeaderNavigation title="Nova refeição" />

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
            title="Cadastrar refeição"
            onPress={handleAddFood}
            style={{ marginTop: 90 }}
          />
        </Form>
      </ContainerForm>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode={modeDatePicker}
          onChange={handleChangeDate}
        />
      )}
    </Container>
  )
}
