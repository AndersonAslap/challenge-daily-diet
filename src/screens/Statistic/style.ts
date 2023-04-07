import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type ContainerSmallInfoStyleColor = 'GREEN' | 'RED'

type ContainerSmallInfoProps = {
  color: ContainerSmallInfoStyleColor
}

type ContainerProps = {
  percent: number
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, percent }) =>
    percent >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
export const ContainerText = styled.View`
  height: 168px;
  padding: 24px;
  justify-content: center;
`

export const ContainerInfo = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  align-items: center;

  border-radius: 20px;
`
export const Section = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const ContainerSmallInfo = styled(View)<ContainerSmallInfoProps>`
  width: 157.5px;
  height: 107px;

  background-color: ${({ theme, color }) =>
    color === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;

  align-items: center;
  justify-content: center;

  padding: 16px;
`

export const ContainerLargeInfo = styled.View`
  width: 327px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  height: 89px;

  border-radius: 8px;

  margin-bottom: 12px;

  align-items: center;
  justify-content: center;

  padding: 16px;
`

export const Percent = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['3XL']}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const Title = styled.Text`
  margin-top: 33px;
  margin-bottom: 23px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Number = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['2XL']}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const NumberDescription = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`
