import styled from 'styled-components';
import { Form, Button, Input, Select } from 'antd';

export const StyledForm = styled(Form)`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 10px;
  text-align: left; /* Alinhar o texto acima dos inputs à esquerda */

  .ant-form-item-label { /* Estilizar o rótulo (label) */
    color: #2878BE; /* Definir a cor azul */
    display: flex; /* Colocar o rótulo em uma linha separada */
    flex-direction: column;
  }
  
  
`;

export const StyledSubmitButton = styled(Button)`
  margin-top: 10px;
`;

