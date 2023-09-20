import React from 'react'
import { TitlePages } from '../../components/TitlePages/TitlePages'
import { Tag } from '../../components/Tag/Tag'
import { Container } from './styles'
import { Wrapper } from '../Vacancy/styles'
import { CardLists } from '../../components/CardDetails/CardLists'
import {  IconObs, IconPsy, IconRequisitos, IconTeacher } from '../../components/CardDetails/styles'
import { CardInfosAdm } from '../../components/CardDetails/CardInfosAdm'

export const Details = () => {
  return (
    <>
      <Container>
        <TitlePages title="Detalhes da Vaga" />
        <Tag text="Status: ativa" />
      </Container>
      <Wrapper>
        <CardLists
          icon={IconPsy}
          title='Requisitos de soft skills'
          items={[
            'Comunicação',
            'Organização',
            'Proatividade',
            'Impactar a vida das pessoas por meio da tecnologia',
          ]}
          numberOfItemsToRender={5} 
        />
        <CardLists
          icon={IconRequisitos}
          title='Requisitos formais'
          items={[
            'Ser estudante de graduação ou pós-graduação em Ciência da Computação da UFCG;',
            'CRA igual ou superior a 6,0 (seis).',
          ]}
          numberOfItemsToRender={2} // Especifique o número de itens a serem renderizados
        />
        <CardInfosAdm />
        <CardLists
          icon={IconTeacher}
          title='Professores'
          items={[
            'joao.arthur@computacao.ufcg.edu.br',
            'fabio@computacao.ufcg.edu.br',
            'temmanuel@computacao.ufcg.edu.br',
          ]}
          numberOfItemsToRender={3} // Especifique o número de itens a serem renderizados
        />
        <CardLists
          icon={IconObs}
          title='Observações'
          items={[
            'Atenção. Todas as comunicações serão feitas exclusivamente por email e para todas as pessoas inscritas. Portanto, não há necessidade de enviar mensagem consultando o andamento do processo.'
          ]}
          numberOfItemsToRender={1} // Obtenha o comprimento do array 'items'
        />

        <CardLists
          icon={IconObs}
          title='Observações'
          items={[
            'Atenção. Todas as comunicações serão feitas exclusivamente por email e para todas as pessoas inscritas. Portanto, não há necessidade de enviar mensagem consultando o andamento do processo.'
          ]}
          numberOfItemsToRender={1} // Obtenha o comprimento do array 'items'
        />

      </Wrapper>
    </>
      
  )
}

