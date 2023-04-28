import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-top: 16px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
