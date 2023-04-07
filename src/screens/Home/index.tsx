import { Text, View } from 'react-native'
import {
  Container,
  Header,
  Logo,
  NewFood,
  PhotoProfile,
  TextFood,
} from './styles'

import logo from '@assets/logo.png'
import user from '@assets/user.png'
import { Percent } from '@components/Percent'
import { Button } from '@components/Button'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <PhotoProfile source={user} />
      </Header>

      <Percent percent={49} />

      <NewFood>
        <TextFood>Refeições</TextFood>
        <Button title="Nova refeição" />
      </NewFood>
    </Container>
  )
}
