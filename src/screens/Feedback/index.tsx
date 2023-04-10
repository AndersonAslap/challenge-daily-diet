import { Button } from '@components/Button'
import { Container, Image, SubTitle, TextWarn, Title } from './styles'

import imageSuccess from '@assets/success.png'
import imageFail from '@assets/fail.png'
import { useNavigation, useRoute } from '@react-navigation/native'

type RouteParams = {
  inDiet: boolean
}

export function Feedback() {
  const route = useRoute()
  const { inDiet } = route.params as RouteParams

  const navigation = useNavigation()

  function handleGoHome() {
    return navigation.navigate('home')
  }

  return (
    <Container>
      {inDiet ? (
        <>
          <Title inDiet={inDiet}>Continue assim!</Title>

          <SubTitle>
            Você continua <TextWarn>dentro da dieta.</TextWarn> Muito bem!
          </SubTitle>

          <Image source={imageSuccess} />
        </>
      ) : (
        <>
          <Title inDiet={inDiet}>Que pena!</Title>

          <SubTitle>
            Você <TextWarn>saiu da dieta</TextWarn> dessa vez, mas continue se
            esforçando e não desista!
          </SubTitle>

          <Image source={imageFail} />
        </>
      )}

      <Button title="Ir para a página inicial" onPress={handleGoHome} />
    </Container>
  )
}
