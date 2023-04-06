import { TouchableOpacity, Text } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'DARK' | 'LIGHT'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  margin-top: 8px;

  width: 100%;
  height: 50px;

  background: ${({ theme, type }) =>
    type === 'DARK' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};

  border-radius: 6px;

  border: 1px solid
    ${({ theme, type }) =>
      type === 'DARK' ? 'transparent' : theme.COLORS.GRAY_1};

  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'DARK' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1}
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
