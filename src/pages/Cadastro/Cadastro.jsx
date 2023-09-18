import React from 'react';
import FormComponent from '../../components/Forms/Forms';
import { TitlePages } from '../../components/TitlePages/TitlePages';
import { ContainerTitle } from './styles';

const Cadastro = () => {
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

export default Cadastro;
