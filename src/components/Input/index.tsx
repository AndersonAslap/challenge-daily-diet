import React from 'react'
import { TextInputProps } from 'react-native'
import { Container, InputText } from './styles'
import { Label } from '@components/Label'

type Props = TextInputProps & {
  label: string
}

export function Input({ label, ...rest }: Props) {
  return (
    <Container>
      <Label title={label} />
      <InputText {...rest} />
    </Container>
  )
}
