import React from 'react'
import { ModalProps } from 'react-native'
import {
  Container,
  ContainerMain,
  Content,
  ContentButton,
  Text,
} from './styles'
import { Button } from '@components/Button'

type Props = ModalProps & {
  onPressCancel: () => void
  onPressConfirm: () => void
}

export function Modal({ onPressCancel, onPressConfirm, ...rest }: Props) {
  return (
    <Container animationType="none" transparent={true} {...rest}>
      <ContainerMain>
        <Content>
          <Text>Deseja realmente excluir o registro da refeição?</Text>
          <ContentButton>
            <Button
              type="LIGHT"
              title="Cancelar"
              style={{ width: 135, height: 50 }}
              onPress={onPressCancel}
            />
            <Button
              title="Confirmar"
              style={{ width: 135, height: 50 }}
              onPress={onPressConfirm}
            />
          </ContentButton>
        </Content>
      </ContainerMain>
    </Container>
  )
}
