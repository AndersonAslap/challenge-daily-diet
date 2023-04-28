import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ButtonIcon, Container, Icon, SubTitle, TextPercent } from './styles'
import { formatValue } from '@utils/formatter'

type Props = {
  percent: number
}

export function Percent({ percent }: Props) {
  const navigation = useNavigation()

  function handleOpenScreenStatistic() {
    return navigation.navigate('statistic')
  }

  return (
    <Container percent={percent}>
      <TextPercent>{formatValue(percent)}%</TextPercent>
      <SubTitle>das refeições dentro da dieta</SubTitle>
      <ButtonIcon onPress={handleOpenScreenStatistic}>
        <Icon name="north-east" percent={percent} />
      </ButtonIcon>
    </Container>
  )
}
