import React from 'react'
import { Text } from './styles'

type Props = {
  date: string
}

export function DateFood({ date }: Props) {
  return <Text>{date}</Text>
}
