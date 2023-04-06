import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  percent: number
}

export const Container = styled(View)<ContainerProps>`
  margin-top: 36px;

  width: 100%;
  height: 102px;

  background: ${({ theme, percent }) =>
    percent >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`

export const TextPercent = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE['3XL']}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
