import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Select, Form } from 'antd';
import styled from 'styled-components';
import { StyledForm, StyledFormItem, ContainerButton, StyledUploadContainer, UploadText, StyledRemoveButton,StyledInputWrapper, StyledViewButton  } from './styles';
import { useDropzone } from 'react-dropzone';
import {TextLabel} from './TextLabel';
import { CheckForms } from '../../assets/CheckForms/CheckForms';

import { EyeOutlined, CloseOutlined } from '@ant-design/icons';
import { ButtonCustom } from '../Button/Button';

const { Option } = Select;

const isLinkValid = (rule, value) => {
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

  const generosOptions = [
    'Cisgênero',
    'Transgênero',
    'Não-binário',
    'Gênero fluido',
    'Masculino',
    'Feminino',
    'Prefiro não responder'
  ];

  const orientacaoSexualOptions = [
    'Heterossexual',
    'Homossexual',
    'Bissexual',
    'Assexual',
    'Panssexual',
    'Prefiro não responder'

  ];

  const corRacaOptions= [
    'Preto(a)',
    'Pardo(a)',
    'Branco(a)',
    'Indígena',
    'Amarelo(a)',
    'Prefiro não responder'

  ]



  const [form] = Form.useForm();

  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData
      ? JSON.parse(storedData)
      : {
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        cra: '',
        periodo: '',
        areasInteresse: [],
        corRaca: '',
        genero: '',
        orientacaoSexual:'',
        uploadedCertificado: null,
        uploadedHistorico: null,
      };
  });

  const certificadoInputRef = useRef(null);
  const historicoInputRef = useRef(null);

  const { getRootProps: getCertificadoRootProps, getInputProps: getCertificadoInputProps, isDragActive: isCertificadoDragActive } = useDropzone({
    accept: '.pdf,.doc,.docx,image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFormData((prevData) => ({ ...prevData, uploadedCertificado: file }));
    },
  });

  const { getRootProps: getHistoricoRootProps, getInputProps: getHistoricoInputProps, isDragActive: isHistoricoDragActive } = useDropzone({
    accept: '.pdf,.doc,.docx,image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFormData((prevData) => ({ ...prevData, uploadedHistorico: file }));
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

  const handleViewButtonClick = (file) => {
    if (file instanceof Blob) {
      window.open(URL.createObjectURL(file), '_blank');
    }
  };

  const handleRemoveButtonClick = () => {
    setFormData((prevData) => ({ ...prevData, uploadedCertificado: null }));
  };

  const handleHistoricoRemoveButtonClick = () => {
    setFormData((prevData) => ({ ...prevData, uploadedHistorico: null }));
  };

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData((prevData) => ({
        ...prevData,
        name: parsedData.name || '',
        email: parsedData.email || '',
        phone: parsedData.phone || '',
        linkedin: parsedData.linkedin || '',
        github: parsedData.github || '',
        cra: parsedData.cra || '',
        periodo: parsedData.periodo || '',
        areasInteresse: parsedData.areasInteresse || '',
        corRaca: parsedData.corRaca || '',
        genero: parsedData.genero || '',
        uploadedCertificado: parsedData.uploadedCertificado || null,
        uploadedHistorico: parsedData.uploadedHistorico || null,
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = () => {
    console.log('Dados do formulário enviados:', formData);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Form
      style={{
        width: '600px',
        margin: '0 auto',
      }}
      name="basic"
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      initialValues={formData}
    >
      <TextLabel>Nome:</TextLabel>
      <Form.Item

        name="name"
        rules={[
          {
            required: true,
            message: 'Por favor, insira o nome.',
          },
        ]}
      >
        <Input onChange={(e) => handleInputChange('name', e.target.value)} />
      </Form.Item>

      <TextLabel>Email:</TextLabel>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Por favor, insira o email.',
            type: 'email',
          },
        ]}
      >
        <Input onChange={(e) => handleInputChange('email', e.target.value)} />
      </Form.Item>

      <TextLabel>Telefone:</TextLabel>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Por favor, insira o telefone.',
            type: 'string', // Alterado de 'phone' para 'string'
          },
        ]}
      >
        <Input onChange={(e) => handleInputChange('phone', e.target.value)}/>
      </Form.Item>

      <TextLabel>GitHub:</TextLabel>
      <Form.Item
        name="github"
        rules={[
          {
            required: true,
            validator: isLinkValid,
          },
        ]}
      >
        <Input onChange={(e) => handleInputChange('github', e.target.value)} />
      </Form.Item>

      <TextLabel>LinkedIn:</TextLabel>
      <Form.Item
        name="linkedin"
        rules={[
          {
            required: true,
            validator: isLinkValid,
          },
        ]}
      >
        <Input onChange={(e) => handleInputChange('linkedin', e.target.value)} />
      </Form.Item>

      <TextLabel>Valor do CRA:</TextLabel>
      <Form.Item
        name="cra"
        label=""
        rules={[
          {
            required: true,
            validator: async (_, value) => {
              if (!value) {
                return Promise.reject('Por favor, insira o valor do CRA.');
              } else if (isNaN(value)) {
                return Promise.reject('O valor do CRA deve ser um número.');
              } else if (value < 0 || value > 10) {
                return Promise.reject('O valor do CRA deve estar entre 0 e 10.');
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <Input type="number" step="0.01" min="0" max="10" onChange={(e) => handleInputChange('cra', e.target.value)}/>
      </Form.Item>

      <TextLabel>Período que está:</TextLabel>
      <Form.Item
        name="periodo"
        rules={[
          {
            required: true,
            message: 'Por favor, selecione o período.',
          },
        ]}
      >
        <Select >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((periodo) => (
            <Option key={periodo} value={periodo}>
              {periodo}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <TextLabel>Áreas de Interesse:</TextLabel>
      <Form.Item
        name="areasInteresse"
        rules={[
          {
            required: true,
            message: 'Por favor, selecione pelo menos uma área de interesse.',
            type: 'array',
            min: 1,
          },
        ]}
      >
        <Select mode="multiple" placeholder="Selecione suas áreas de interesse">
          {areasDeInteresseOptions.map((area, index) => (
            <Option key={index} value={area}>
              {area}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <TextLabel>Cor ou raça que se identifica:</TextLabel>
      <Form.Item
        name="corRaca"
        rules={[
          {
            required: true,
            message: 'Por favor, selecione a sua cor ou raça.',
            min: 1,
          },
        ]}
      >
        <Select placeholder="Selecione a sua cor ou raça">
          {corRacaOptions.map((corRaca, index) => (
            <Option key={index} value={corRaca}>
              {corRaca}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <TextLabel>Gênero que se identifica:</TextLabel>
      <Form.Item
        name="genero"
        rules={[
          {
            required: true,
            message: 'Por favor, selecione o gênero que se identifica.',
            min: 1,
          },
        ]}
      >
        <Select placeholder="Selecione o gênero que você se identifica">
          {generosOptions.map((genero, index) => (
            <Option key={index} value={genero}>
              {genero}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <TextLabel>Orientação sexual:</TextLabel>
      <Form.Item
        name="orientacaoSexual"
        rules={[
          {
            required: true,
            message: 'Por favor, selecione a sua orientação sexual.',
            min: 1,
          },
        ]}
      >
        <Select placeholder="Selecione a sua orientação sexual.">
          {orientacaoSexualOptions.map((orientacao, index) => (
            <Option key={index} value={orientacao}>
              {orientacao}
            </Option>
          ))}
        </Select>
      </Form.Item>




      <StyledFormItem >
        <TextLabel>Certificado:</TextLabel>
        <StyledUploadContainer
          onClick={handleCertificadoUploadClick}
          {...getCertificadoRootProps()}
          isDragActive={isCertificadoDragActive}
        >
          {formData.uploadedCertificado ? (
            <div>
              <CheckForms style={{ color: 'green', fontSize: '24px' }} />
              <UploadText>
                {formData.uploadedCertificado.path}{' '}
                <StyledRemoveButton
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={handleRemoveButtonClick}
                />
              </UploadText>
            </div>
          ) : (
            <UploadText>
              {isCertificadoDragActive
                ? 'Solte o arquivo aqui'
                : 'Arraste ou solte o certificado ou clique para fazer o upload (PDF ou imagens)'}
            </UploadText>
          )}
          <StyledInputWrapper>
            <input {...getCertificadoInputProps()} style={{ display: 'none' }} ref={certificadoInputRef} />
            {formData.uploadedCertificado && (
              <StyledViewButton
                icon={<EyeOutlined style={{ color: '#2878BE' }} />}
                onClick={() => handleViewButtonClick(formData.uploadedCertificado)}
              >
                Visualizar
              </StyledViewButton>
            )}
          </StyledInputWrapper>
        </StyledUploadContainer>
      </StyledFormItem>

      <StyledFormItem>
        <TextLabel>Histórico acadêmico:</TextLabel>
        <StyledUploadContainer
          onClick={handleHistoricoUploadClick}
          {...getHistoricoRootProps()}
          isDragActive={isHistoricoDragActive}
        >
          {formData.uploadedHistorico ? (
            <div>
              <CheckForms style={{ color: 'green', fontSize: '24px' }} />
              <UploadText>
                {formData.uploadedHistorico.path}{' '}
                <StyledRemoveButton
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={handleHistoricoRemoveButtonClick}
                />
              </UploadText>
            </div>
          ) : (
            <UploadText>
              {isHistoricoDragActive
                ? 'Solte o arquivo aqui'
                : 'Arraste ou solte o histórico acadêmico ou clique para fazer o upload (PDF ou imagens)'}
            </UploadText>
          )}
          <StyledInputWrapper>
            <input {...getHistoricoInputProps()} style={{ display: 'none' }} ref={historicoInputRef} />
            {formData.uploadedHistorico && (
              <StyledViewButton
                icon={<EyeOutlined style={{ color: '#2878BE' }} />}
                onClick={() => handleViewButtonClick(formData.uploadedHistorico)}
              >
                Visualizar
              </StyledViewButton>
            )}
          </StyledInputWrapper>
        </StyledUploadContainer>
      </StyledFormItem>

      <ContainerButton>
        <ButtonCustom actived={true} text="Enviar" type="primary" htmlType="submit">
          Enviar
        </ButtonCustom>
      </ContainerButton>
    </Form>
  );
};

export default FormComponent;
