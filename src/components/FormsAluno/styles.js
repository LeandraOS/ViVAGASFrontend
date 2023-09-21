import styled from 'styled-components';
import { Form, Button, Input, Select } from 'antd';

export const StyledForm = styled(Form)`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  color: #2878BE; /* Definir a cor azul */
  
`;

export const StyledFormItem = styled(Form.Item)`

  margin-bottom: 24px;
  text-align: left; /* Alinhar o texto acima dos inputs à esquerda */
  color: #2878BE; /* Definir a cor azul */


  .ant-form-item-label { /* Estilizar o rótulo (label) */
    color: #2878BE; /* Definir a cor azul */
    display: flex; /* Manter o rótulo e o campo de entrada na mesma linha */
    flex-direction: row; /* Manter o rótulo e o campo de entrada na mesma linha */
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 64px;
`


export const StyledSubmitButton = styled(Button)`
  margin-top: 10px;
`;

