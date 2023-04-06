import { Text } from 'react-native'
import styled, { css } from 'styled-components/native'

export type TextStyleProps = 'SUCCESS' | 'FAIL'

type Props = {
  status: TextStyleProps
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;

  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)<Props>`
  ${({ theme, status }) => css`
    color: ${status === 'SUCCESS'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};

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
