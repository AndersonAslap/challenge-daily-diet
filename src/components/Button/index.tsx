import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  title: string
}

export function Button({ type = 'DARK', title, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title type={type}>{title}</Title>
    </Container>
  )
}
