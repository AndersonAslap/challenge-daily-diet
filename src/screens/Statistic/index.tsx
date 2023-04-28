import React, { useEffect, useState } from 'react'

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

import { foodGetPercentInDiet } from '@storage/food/foodGetPercentInDiet'
import { foodGetStatistic } from '@storage/food/foodGetStatistic'

import { BackButton } from '@components/BackButton'
import { Loading } from '@components/Loading'
import { formatValue } from '@utils/formatter'

export function Statistic() {
  const [percent, setPercent] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [statistic, setStatistic] = useState({
    sequency: 0,
    registerFoods: 0,
    foodsInDiet: 0,
    foodsNotInDiet: 0,
  })

  async function fetchData() {
    try {
      setIsLoading(true)

      const percentFoodInDiet = await foodGetPercentInDiet()
      const statisticFoods = await foodGetStatistic()

      setPercent(percentFoodInDiet)
      setStatistic(statisticFoods)
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container percent={percent}>
          <ContainerText>
            <BackButton />
            <Percent>{formatValue(percent)}%</Percent>
            <Subtitle>das refeições dentro da dieta</Subtitle>
          </ContainerText>

          <ContainerInfo>
            <Title>Estatísticas Gerais</Title>

            <ContainerLargeInfo>
              <Number>{statistic.sequency}</Number>
              <NumberDescription>
                melhor sequência de pratos dentro da dieta
              </NumberDescription>
            </ContainerLargeInfo>

            <ContainerLargeInfo>
              <Number>{statistic.registerFoods}</Number>
              <NumberDescription>refeições registradas</NumberDescription>
            </ContainerLargeInfo>

            <Section>
              <ContainerSmallInfo color="GREEN">
                <Number>{statistic.foodsInDiet}</Number>
                <NumberDescription>refeições dentro da dieta</NumberDescription>
              </ContainerSmallInfo>

              <ContainerSmallInfo color="RED">
                <Number>{statistic.foodsNotInDiet}</Number>
                <NumberDescription>refeições fora da dieta</NumberDescription>
              </ContainerSmallInfo>
            </Section>
          </ContainerInfo>
        </Container>
      )}
    </>
  )
}
