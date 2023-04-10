import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const ContainerForm = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 40px 24px 24px 24px;
  border-radius: 20px;
`

export const Form = styled.View`
  flex: 1;
  margin: 0 auto;
  gap: 24px;
`
export const ContentInputDate = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const ContainerInputSelect = styled.View`
  gap: 8px;
`

export const ContentInputSelect = styled.View`
  flex-direction: row;
  gap: 8px;
`
