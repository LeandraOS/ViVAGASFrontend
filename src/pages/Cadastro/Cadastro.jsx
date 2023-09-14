import React from 'react';
import FormComponent from '../../components/Forms/Forms';
import { TitlePages } from '../../components/TitlePages/TitlePages';

const Cadastro = () => {
  const onFinish = (values) => {
    // Validação bem-sucedida, você pode enviar os dados para a API aqui.
    console.log('Valores enviados:', values);
  };

  return (
    <div>
      <TitlePages>Formulário de Contato</TitlePages>
      <FormComponent onFinish={onFinish} />
    </div>
  );
};

export default Cadastro;
