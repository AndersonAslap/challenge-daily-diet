import styled, { css } from 'styled-components/native'

export const Text = styled.Text`
  margin-top: 32px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
