import { Modal } from 'react-native'
import styled, { css } from 'styled-components/native'

export const ContainerMain = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`

export const Container = styled(Modal)`
  flex: 1;
`

export const Content = styled.View`
  height: 192px;
  width: 327px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 24px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  gap: 32px;

  align-self: center;
`

export const Text = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const ContentButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`
