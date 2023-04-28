import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  title: string
  icon?: string
  width?: number
}

export function Button({
  type = 'DARK',
  icon = '',
  width = 100,
  title,
  ...rest
}: Props) {
  return (
    <Container type={type} width={width} {...rest}>
      {icon !== '' && <Icon type={type} name={icon} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
