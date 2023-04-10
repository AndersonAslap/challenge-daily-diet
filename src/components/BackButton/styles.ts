import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  type?: 'DEFAULT' | 'SUCCESS' | 'FAIL'
  top?: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 24px;

  top: 40px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color:
    type === 'DEFAULT'
      ? theme.COLORS.GRAY_2
      : type === 'SUCCESS'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK,
  size: 24,
}))``
