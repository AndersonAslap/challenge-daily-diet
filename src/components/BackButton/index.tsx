import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Icon } from './styles'

type Props = {
  type?: 'DEFAULT' | 'SUCCESS' | 'FAIL'
  isEditFood?: boolean
}

export function BackButton({ type = 'DEFAULT', isEditFood = false }: Props) {
  const navigation = useNavigation()

  function handleBack() {
    isEditFood ? navigation.goBack() : navigation.navigate('home')
  }

  return (
    <Container onPress={handleBack}>
      <Icon name="arrow-back" type={type} />
    </Container>
  )
}
