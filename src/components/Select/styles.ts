import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type SelectInputStyleProps = 'SUCCESS' | 'FAIL'

type Props = {
  type: SelectInputStyleProps
  isActive: boolean
}

export const SelectInput = styled(TouchableOpacity)<Props>`
  width: 159.5px;
  height: 50px;

  background-color: ${({ theme, type, isActive }) =>
    isActive
      ? type === 'SUCCESS'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};

  border: 1px solid
    ${({ theme, isActive, type }) =>
      isActive
        ? type === 'SUCCESS'
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_6};
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  flex-direction: row;
  gap: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color: type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 8,
}))``
