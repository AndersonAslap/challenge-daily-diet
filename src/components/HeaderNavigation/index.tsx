import { BackButton } from '@components/BackButton'
import { Container, Title } from './styles'

type Props = {
  title: string
  isEditingFood?: boolean
}

export function HeaderNavigation({ title, isEditingFood = false }: Props) {
  return (
    <Container>
      <BackButton isEditFood={isEditingFood} />
      <Title>{title}</Title>
    </Container>
  )
}
