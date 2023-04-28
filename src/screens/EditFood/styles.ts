import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const ContainerForm = styled(ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 40px 24px 24px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Form = styled.KeyboardAvoidingView`
  flex: 1;
  margin: 0 auto;
  gap: 24px;
  width: 327px;
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
export const DateTimeButton = styled.TouchableOpacity``
