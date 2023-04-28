import React from 'react'
import { Container } from './styles'

type Props = {
  title: string
}

export function Label({ title }: Props) {
  return <Container>{title}</Container>
}
