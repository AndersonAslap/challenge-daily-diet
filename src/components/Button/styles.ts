import { TouchableOpacity, Text } from 'react-native'
import styled, { css } from 'styled-components/native'

import { MaterialIcons } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'DARK' | 'LIGHT'

type Props = {
  type: ButtonTypeStyleProps
  width: number
}

type PropsText = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  margin-top: 8px;

  width: ${({ width }) => width}%;
  height: 50px;

  background: ${({ theme, type }) =>
    type === 'DARK' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};

  border-radius: 6px;

  border: 1px solid
    ${({ theme, type }) =>
      type === 'DARK' ? 'transparent' : theme.COLORS.GRAY_1};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color: type === 'DARK' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
  size: 18,
}))``

export const Title = styled(Text)<PropsText>`
  ${({ theme, type }) => css`
    color: ${type === 'DARK' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1}
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
