import React from 'react'
import { Container, Icon, Text } from './styles'

type Props = {
  inDiet: boolean
}

export function Flag({ inDiet }: Props) {
  return (
    <Container inDiet={inDiet}>
      <Icon name="circle" inDiet={inDiet} />
      <Text>{inDiet ? 'dentro da dieta' : 'fora da dieta'}</Text>
    </Container>
  )
}
