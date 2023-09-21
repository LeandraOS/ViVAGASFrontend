import React from 'react';
import { TitlePages } from '../../components/TitlePages/TitlePages';
import { ContainerTitle } from './styles';
import FormComponent from '../../components/FormsAluno/FormsAluno';

export const CadastroAluno = () => {
  const onFinish = (values) => {
    // Validação bem-sucedida, você pode enviar os dados para a API aqui.
    console.log('Valores enviados:', values);
  };

  return (
    <>
      <ContainerTitle>
        <TitlePages title="Formulário de Contato" />
      </ContainerTitle>
      <FormComponent onFinish={onFinish} />
    </>
  );
};

