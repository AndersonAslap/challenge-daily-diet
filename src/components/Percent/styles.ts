import { TouchableOpacity, View } from 'react-native'
import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  percent: number
}

export const Container = styled(View)<Props>`
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

export const ButtonIcon = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 8px;
  top: 8px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, percent }) => ({
    color: percent < 50 ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
    size: 24,
  }),
)``
