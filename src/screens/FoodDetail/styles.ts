import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  inDiet: boolean
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const ContainerContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 40px 24px 24px 24px;
  border-radius: 20px;
`
export const Box = styled.View`
  gap: 8px;
`

export const Content = styled.View`
  flex: 1;
  gap: 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['1XL']}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const Flag = styled.View``
