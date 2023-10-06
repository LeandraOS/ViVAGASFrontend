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

export const StyledUploadContainer = styled.div`
  border: 2px dashed #8FC9FC;
  flex-shrink: 0;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  width: 560px;
  transition: border 0.3s;
  border-color: ${(props) => (props.isDragActive ? 'green' : '#8FC9FC')};
`;

export const UploadText = styled.p`
  color: #2878BE;
  margin-bottom: 10px;
  color: #2878BE;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 5px;
  height: 32px;
`;

export const StyledViewButton = styled(Button)`
  align-self: center;
  background: linear-gradient(270deg, #119db6 3.45%, #1b8dba 50.79%, #2878be 93.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Inter', sans-serif;
`;

export const StyledRemoveButton = styled(Button)`
  color: #2878be;

  svg {
    height: 12px;

    &:hover {
      color: red;
    }
  }
`;