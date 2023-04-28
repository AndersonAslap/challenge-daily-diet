import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Icon, SelectInput, SelectInputStyleProps, Title } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  title: string
  isActive?: boolean
  type: SelectInputStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Select({
  isActive = false,
  icon,
  type,
  title,
  ...rest
}: Props) {
  return (
    <SelectInput isActive={isActive} type={type} {...rest}>
      <Icon name={icon} type={type} />
      <Title>{title}</Title>
    </SelectInput>
  )
}
