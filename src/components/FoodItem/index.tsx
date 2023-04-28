import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Description, Divider, Icon, Timer } from './styles'
import { sliceString } from '@utils/sliceString'

type FoodProps = {
  id: number
  description: string
  timer: string
  inDiet: boolean
}

type Props = {
  item: FoodProps
}

export function FoodItem({ item }: Props) {
  const navigation = useNavigation()

  const { id, timer, description, inDiet } = item

  function handleFoodDetail() {
    return navigation.navigate('foodDetail', { id, inDiet: item.inDiet })
  }

  return (
    <Container key={id} onPress={handleFoodDetail}>
      <Timer>{timer}</Timer>
      <Divider />
      <Description>{sliceString(description)}</Description>
      <Icon name="circle" inDiet={inDiet} />
    </Container>
  )
}
