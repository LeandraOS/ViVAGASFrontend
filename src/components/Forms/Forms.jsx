import React from 'react';
import { Input, Button, Select } from 'antd';
import { StyledForm, StyledFormItem } from './styles';
import TextLabel from './TextLabel';

const { Option } = Select;

const isLinkValid = (rule, value) => {
  // Expressão regular para validar URLs simples (http:// ou https://)
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  if (!value || urlPattern.test(value)) {
    return Promise.resolve();
  }

  return Promise.reject('Por favor, insira um link válido.');
};

const FormComponent = ({ onFinish }) => {
  const areasDeInteresseOptions = [
    'Frontend',
    'Backend',
    'Infraestrutura',
    'DevOps',
    'Análise de Dados',
    'Machine Learning',
  ];

  return (
    <StyledForm name="basic" onFinish={onFinish}>
      <StyledFormItem
        name="name"
        rules={[{ required: true, message: 'Por favor, insira o nome!' }]}
      >
        <TextLabel>Nome:</TextLabel>
        <Input />
      </StyledFormItem>

      <StyledFormItem
        name="email"
        rules={[
          { required: true, message: 'Por favor, insira o email!' },
          { type: 'email', message: 'Por favor, insira um email válido!' },
        ]}
      >
        <TextLabel>Email:</TextLabel>
        <Input />
      </StyledFormItem>

      <StyledFormItem
        name="phone"
        rules={[
          { required: true, message: 'Por favor, insira o telefone!' },
          { pattern: /^\d{10}$/, message: 'Por favor, insira um telefone válido!' },
        ]}
      >
        <TextLabel>Telefone:</TextLabel>
        <Input />
      </StyledFormItem>

      <StyledFormItem
        name="linkedin"
        rules={[
          { required: true, message: 'Por favor, insira o LinkedIn!' },
          { validator: isLinkValid },
        ]}
      >
        <TextLabel>LinkedIn:</TextLabel>
        <Input />
      </StyledFormItem>

      <StyledFormItem
        name="github"
        rules={[
          { required: true, message: 'Por favor, insira o GitHub!' },
          { validator: isLinkValid },
        ]}
      >
        <TextLabel>GitHub:</TextLabel>
        <Input />
      </StyledFormItem>

      <StyledFormItem
        name="cra"
        rules={[
          { required: true, message: 'Por favor, insira o Valor do CRA!' },
          { type: 'number', message: 'Por favor, insira um número válido!' },
        ]}
      >
        <TextLabel>Valor do CRA:</TextLabel>
        <Input type="number" step="0.01" />
      </StyledFormItem>

      <StyledFormItem
        name="periodo"
        rules={[
          { required: true, message: 'Por favor, selecione o Período que está!' },
        ]}
      >
        <TextLabel>Período que está:</TextLabel>
        <Select>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((periodo) => (
            <Option key={periodo} value={periodo}>
              {periodo}
            </Option>
          ))}
        </Select>
      </StyledFormItem>

      <StyledFormItem
        name="areasInteresse"
        rules={[
          {
            required: true,
            message: 'Por favor, selecione suas Áreas de Interesse!',
          },
        ]}
      >
        <TextLabel>Áreas de Interesse:</TextLabel>
        <Select mode="multiple" placeholder="Selecione suas áreas de interesse">
          {areasDeInteresseOptions.map((area, index) => (
            <Option key={index} value={area}>
              {area}
            </Option>
          ))}
        </Select>
      </StyledFormItem>

      <StyledFormItem
        name="curriculum"
        label="Currículo:"
        valuePropName="fileList"
        getValueFromEvent={(e) => e && e.fileList}
      >
        <Input type="file" />
      </StyledFormItem>

      <StyledFormItem
        name="academicHistory"
        label="Histórico Acadêmico:"
        valuePropName="fileList"
        getValueFromEvent={(e) => e && e.fileList}
      >
        <Input type="file" />
      </StyledFormItem>

      <StyledFormItem>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </StyledFormItem>
    </StyledForm>
  );
};

export default FormComponent;
