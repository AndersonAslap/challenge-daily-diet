import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  inDiet: boolean
}

export const Container = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  padding: 12px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;

  gap: 12px;
`

export const Timer = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Divider = styled.Text`
  width: 2px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Description = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, inDiet }) => ({
  color: inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  size: 14,
}))``
