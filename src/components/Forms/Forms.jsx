import React, { useState, useRef } from 'react';
import { Input, Button, Select } from 'antd';
import { StyledForm, StyledFormItem } from './styles';
import TextLabel from './TextLabel';
import { EyeOutlined, CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { CheckForms } from '../../assets/CheckForms/CheckForms';

const { Option } = Select;

const isLinkValid = (rule, value) => {
  // Expressão regular para validar URLs simples (http:// ou https://)
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  if (!value || urlPattern.test(value)) {
    return Promise.resolve();
  }

  return Promise.reject('Por favor, insira um link válido.');
};

const StyledUploadContainer = styled.div`
  border: 1px dashed #8FC9FC;
  flex-shrink: 0;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  width: 520px;
  transition: border 0.3s; // Adicione uma transição para suavizar a mudança de cor da borda
  border-color: ${(props) => (props.isDragActive ? 'green' : '#8FC9FC')}; // Altere a cor da borda quando um arquivo for arrastado
`;

const UploadText = styled.p`
  color: #2878BE;
  margin-bottom: 10px;
  color: #2878BE;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  flex: 1;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 5px;
  height: 32px;
`;

const StyledViewButton = styled(Button)`
  align-self: center;
  background: linear-gradient(270deg, #119DB6 3.45%, #1B8DBA 50.79%, #2878BE 93.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Inter', sans-serif;

  path {
    background: linear-gradient(270deg, #119DB6 3.45%, #1B8DBA 50.79%, #2878BE 93.97%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyledRemoveButton = styled(Button)`
  margin-left: 10px;
  color: red;
`;

const FormComponent = ({ onFinish }) => {
  const areasDeInteresseOptions = [
    'Frontend',
    'Backend',
    'Infraestrutura',
    'DevOps',
    'Análise de Dados',
    'Machine Learning',
  ];

  const [uploadedCertificado, setUploadedCertificado] = useState(null);
  const [uploadedHistorico, setUploadedHistorico] = useState(null);

  // Defina a ref para o input de arquivo
  const certificadoInputRef = useRef(null);
  const historicoInputRef = useRef(null);

  // UseDropzone para habilitar o carregamento de arquivos por arrastar e soltar
  const { getRootProps: getCertificadoRootProps, getInputProps: getCertificadoInputProps, isDragActive: isCertificadoDragActive } = useDropzone({
    accept: '.pdf,.doc,.docx,image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedCertificado(file);
    },
  });

  const { getRootProps: getHistoricoRootProps, getInputProps: getHistoricoInputProps, isDragActive: isHistoricoDragActive } = useDropzone({
    accept: '.pdf,.doc,.docx,image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedHistorico(file);
    },
  });

  const handleCertificadoUploadClick = () => {
    if (certificadoInputRef.current) {
      certificadoInputRef.current.click();
    }
  };

  const handleHistoricoUploadClick = () => {
    if (historicoInputRef.current) {
      historicoInputRef.current.click();
    }
  };

  const handleCertificadoChange = (e) => {
    const file = e.target.files[0];
    setUploadedCertificado(file);
  };

  const handleHistoricoChange = (e) => {
    const file = e.target.files[0];
    setUploadedHistorico(file);
  };

  const handleViewButtonClick = (file) => {
    if (file) {
      window.open(URL.createObjectURL(file), '_blank');
    }
  };

  const handleRemoveButtonClick = (file, setFile) => {
    if (file) {
      // Remove o arquivo
      setFile(null);
    }
  };

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
          {
            pattern: /^\d{10}$/,
            message: 'Por favor, insira um telefone válido!',
          },
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
        name="certificado"
        valuePropName="fileList"
        getValueFromEvent={() => []}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <TextLabel>Certificado:</TextLabel>
        <StyledUploadContainer onClick={handleCertificadoUploadClick} {...getCertificadoRootProps()} isDragActive={isCertificadoDragActive}>
          {uploadedCertificado ? (
            <div>
              <CheckForms style={{ color: 'green', fontSize: '24px' }} />
              <UploadText>
                {uploadedCertificado.name}{' '}
                <StyledRemoveButton
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() =>
                    handleRemoveButtonClick(
                      uploadedCertificado,
                      setUploadedCertificado
                    )
                  }
                />
              </UploadText>
            </div>
          ) : (
            <UploadText>
              {isCertificadoDragActive ? 'Solte o arquivo aqui' : 'Arraste e solte o certificado ou clique para fazer o upload (PDF ou imagens)'}
            </UploadText>
          )}
          <StyledInputWrapper>
            <input {...getCertificadoInputProps()} style={{ display: 'none' }} />
            {uploadedCertificado && (
              <StyledViewButton
                icon={<EyeOutlined style={{ color: '#2878BE' }} />}
                onClick={() => handleViewButtonClick(uploadedCertificado)}
              >
                Visualizar
              </StyledViewButton>
            )}
          </StyledInputWrapper>
        </StyledUploadContainer>
      </StyledFormItem>

      <StyledFormItem
        name="historico"
        valuePropName="fileList"
        getValueFromEvent={() => []}
      >
        <TextLabel>Histórico acadêmico:</TextLabel>
        <StyledUploadContainer onClick={handleHistoricoUploadClick} {...getHistoricoRootProps()} isDragActive={isHistoricoDragActive}>
          {uploadedHistorico ? (
            <div>
              <CheckForms style={{ color: 'green', fontSize: '24px' }} />
              <UploadText>
                {uploadedHistorico.name}{' '}
                <StyledRemoveButton
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => handleRemoveButtonClick(uploadedHistorico, setUploadedHistorico)}
                />
              </UploadText>
            </div>
          ) : (
            <UploadText>
              {isHistoricoDragActive ? 'Solte o arquivo aqui' : 'Arraste e solte o histórico acadêmico ou clique para fazer o upload (PDF ou imagens)'}
            </UploadText>
          )}
          <StyledInputWrapper>
            <input {...getHistoricoInputProps()} style={{ display: 'none' }} />
            {uploadedHistorico && (
              <StyledViewButton
                icon={<EyeOutlined style={{ color: '#2878BE' }} />}
                onClick={() => handleViewButtonClick(uploadedHistorico)}
              >
                Visualizar
              </StyledViewButton>
            )}
          </StyledInputWrapper>
        </StyledUploadContainer>
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
