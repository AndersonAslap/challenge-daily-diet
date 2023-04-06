import { Button } from '@components/Button'
import {
  Container,
  Image,
  SubTitle,
  TextStyleProps,
  TextWarn,
  Title,
} from './styles'

import imageSuccess from '@assets/success.png'
import imageFail from '@assets/fail.png'

export function Feedback() {
  const status: TextStyleProps = 'SUCCESS'

  return (
    <Container>
      {status === 'SUCCESS' ? (
        <>
          <Title status={status}>Continue assim!</Title>

          <SubTitle>
            Você continua <TextWarn>dentro da dieta.</TextWarn> Muito bem!
          </SubTitle>

          <Image source={imageSuccess} />
        </>
      ) : (
        <>
          <Title status={status}>Que pena!</Title>

          <SubTitle>
            Você <TextWarn>saiu da dieta</TextWarn> dessa vez, mas continue se
            esforçando e não desista!
          </SubTitle>

          <Image source={imageFail} />
        </>
      )}

      <Button title="Ir para a página inicial" />
    </Container>
  )
}
