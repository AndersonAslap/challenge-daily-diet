import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  inDiet: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;

  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)<Props>`
  ${({ theme, inDiet }) => css`
    color: ${inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE['2XL']}px;
  `}
`

export const SubTitle = styled.Text`
  margin-top: 8px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const TextWarn = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Image = styled.Image`
  margin-top: 40px;
  margin-bottom: 24px;

  width: 224px;
  height: 288px;
`
