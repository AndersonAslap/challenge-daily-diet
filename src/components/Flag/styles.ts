import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  inDiet: boolean
}

export const Container = styled(View)<Props>`
  width: ${({ inDiet }) => (inDiet ? '144px' : '127px')};
  height: 34px;
  padding: 0px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 1000px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, inDiet }) => ({
  color: inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 8,
}))``
