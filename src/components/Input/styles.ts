import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  gap: 4px;
`

export const InputText = styled(TextInput)`
  width: 327px;
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
