import {
  Container,
  ContainerInfo,
  ContainerLargeInfo,
  ContainerSmallInfo,
  ContainerText,
  Number,
  NumberDescription,
  Percent,
  Section,
  Subtitle,
  Title,
} from './style'

export function Statistic() {
  const percent = 49
  const bestSequency = 15
  const foodRegister = 40
  const foodInDiet = 10
  const foodNotInDiet = 30

  return (
    <Container percent={percent}>
      <ContainerText>
        <Percent>{percent}%</Percent>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </ContainerText>

      <ContainerInfo>
        <Title>Estatísticas Gerais</Title>

        <ContainerLargeInfo>
          <Number>{bestSequency}</Number>
          <NumberDescription>
            melhor sequência de pratos dentro da dieta
          </NumberDescription>
        </ContainerLargeInfo>

        <ContainerLargeInfo>
          <Number>{foodRegister}</Number>
          <NumberDescription>refeições registradas</NumberDescription>
        </ContainerLargeInfo>

        <Section>
          <ContainerSmallInfo color="GREEN">
            <Number>{foodInDiet}</Number>
            <NumberDescription>refeições dentro da dieta</NumberDescription>
          </ContainerSmallInfo>

          <ContainerSmallInfo color="RED">
            <Number>{foodNotInDiet}</Number>
            <NumberDescription>refeições fora da dieta</NumberDescription>
          </ContainerSmallInfo>
        </Section>
      </ContainerInfo>
    </Container>
  )
}
