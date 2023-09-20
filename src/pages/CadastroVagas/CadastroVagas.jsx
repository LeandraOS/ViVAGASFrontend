import React from 'react'
import { Paragraph } from '../../components/Paragraph/Paragraph'
import { Container } from './styles'
Text

export const CadastroVagas = () => {

  const textoExemplo = `
    Olá professor(a), é nesta página onde a(s) vaga(s) para a colaboração em seu projeto será criada.
    Este é o link para o formulário modelo ao qual você pode fazer uma cópia e adaptá-lo para a sua vaga.
    Após isso, é necessário que esse link do seu formulário (público) seja repassado para o ViVAGAS para que as informações possam ser repassadas para a aplicação.
  `
  return (
    <Container>
      <Paragraph text={textoExemplo} />

    </Container>
  )
}

export default CadastroVagas
