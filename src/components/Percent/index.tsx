import { Container, SubTitle, TextPercent } from './styles'

type Props = {
  percent: number
}

export function Percent({ percent }: Props) {
  return (
    <Container percent={percent}>
      <TextPercent>{percent}%</TextPercent>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}
