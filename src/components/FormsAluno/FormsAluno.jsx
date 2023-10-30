import React, { useState, useRef, useEffect } from 'react';
import { Input,  Select, Form, Spin } from 'antd';
import { LoadingContainer, StyledFormItem, ContainerButton, StyledUploadContainer, UploadText, StyledRemoveButton, StyledInputWrapper, StyledViewButton } from './styles';
import { useDropzone } from 'react-dropzone';
import { TextLabel } from './TextLabel';
import { CheckForms } from '../../assets/CheckForms/CheckForms';
import { getFirestore, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { EyeOutlined, CloseOutlined } from '@ant-design/icons';
import { ButtonCustom } from '../Button/Button';
import { db, storage } from '../../services/firebaseConfig';
import { GoodLuck } from '../../modals/TextImg/GoodLuck';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
    'Homem Cisgênero',
    'Homem Transgênero',
    'Mulher Cisgênero',
    'Mulher Transgênero',
    'Não-binário',
    'Gênero fluido',
    'Prefiro não responder'
  ];

  const orientacaoSexualOptions = [
    'Heterossexual',
    'Homossexual',
    'Bissexual',
    'Assexual',
    'Panssexual',
    'Prefiro não responder',
    'Demissexual',
    'Polissexual',
    'Androsexual',
    'Ginosexual',
    'Queer',
    'Sem rótulo',
    'Fluxo de gênero',
    'Identidade de gênero não conforme',
  ];

  const corRacaOptions = [
    'Preto(a)',
    'Pardo(a)',
    'Branco(a)',
    'Indígena',
    'Amarelo(a)',
    'Prefiro não responder'
  ];

  const [form] = Form.useForm();

  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData
      ? JSON.parse(storedData)
      : {
        name: '',
        registration: '',
        linkedin: '',
        github: '',
        cra: '',
        periodo: [],
        periodoFormatura: [],
        tipoAluno: [],
        areasInteresse: [],
        corRaca: [],
        genero: [],
        orientacaoSexual: [],
        uploadedCertificado: null,
        uploadedHistorico: null,
      };
  });

  const certificadoInputRef = useRef(null);
  const historicoInputRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const customStyles = {
    content: {
      overflow: 'hidden',
    },
  };

  const auth = getAuth();

  const handleLoginSuccess = async (user) => {
    if (user) {
      try {
        const db = getFirestore();
  
        const certificadoURL = await uploadFileToFirebaseStorage(formData.uploadedCertificado);
        const historicoURL = await uploadFileToFirebaseStorage(formData.uploadedHistorico);
        const studentDocRef = doc(db, 'alunos', user.uid); 
        const studentData = {
          name: formData.name,
          registration: formData.registration,
          linkedin: formData.linkedin,
          github: formData.github,
          cra: formData.cra,
          periodo: formData.periodo,
          periodoFormatura: formData.periodoFormatura,
          tipoAluno: formData.tipoAluno,
          areasInteresse: formData.areasInteresse,
          corRaca: formData.corRaca,
          genero: formData.genero,
          orientacaoSexual: formData.orientacaoSexual,
          uploadedCertificado: certificadoURL,
          uploadedHistorico: historicoURL,
        };
  
        await setDoc(studentDocRef, studentData);
        console.log('Documento do aluno criado com sucesso no Firestore');
      } catch (error) {
        console.error('Erro ao criar o documento do aluno:', error);
      }
    }
  };
  
  useEffect(() => {
    handleLoginSuccess(auth.currentUser);
  }, []);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleLoginSuccess);
  
    return () => unsubscribe();
  }, [auth]);

  const handleIconXClick = () => {
    setIsSuccess(false);
  };

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

  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showSuccessModal = () => {
    setIsModalVisible(true);
  };


  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData((prevData) => ({
        ...prevData,
        name: parsedData.name || '',
        registration: parsedData.registration || '',
        linkedin: parsedData.linkedin || '',
        github: parsedData.github || '',
        cra: parsedData.cra || '',
        periodo: parsedData.periodo || '',
        periodoFormatura: parsedData.periodoFormatura || '',
        tipoAluno: parsedData.tipoAluno || '',
        areasInteresse: parsedData.areasInteresse || '',
        corRaca: parsedData.corRaca || '',
        genero: parsedData.genero || '',
        orientacaoSexual: parsedData.orientacaoSexual || '',
        uploadedCertificado: parsedData.uploadedCertificado || null,
        uploadedHistorico: parsedData.uploadedHistorico || null,
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const uploadFileToFirebaseStorage = async (file) => {
    const storageRef = ref(storage, 'caminho/para/seu/armazenamento/' + file.name);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL; 
  };

  const handleSubmit = async () => {
    setIsLoading(true);
  
    try {
      if (auth.currentUser) {
        const certificadoURL = await uploadFileToFirebaseStorage(formData.uploadedCertificado);
        const historicoURL = await uploadFileToFirebaseStorage(formData.uploadedHistorico);
        const dataToSave = {
          userId: auth.currentUser.uid, // Adicione o ID do usuário atual
          name: formData.name,
          registration: formData.registration,
          linkedin: formData.linkedin,
          github: formData.github,
          cra: formData.cra,
          periodo: formData.periodo,
          periodoFormatura: formData.periodoFormatura,
          tipoAluno: formData.tipoAluno,
          areasInteresse: formData.areasInteresse,
          corRaca: formData.corRaca,
          genero: formData.genero,
          orientacaoSexual: formData.orientacaoSexual,
          uploadedCertificado: certificadoURL,
          uploadedHistorico: historicoURL,
        };
  
        const docRef = await addDoc(collection(db, 'aluno'), dataToSave);
        console.log('Documento adicionado com ID: ', docRef);
        localStorage.setItem('cadastroRealizadoAluno', 'true');
        setIsSuccess(true);
        showSuccessModal();
      } else {
        console.error('Usuário não autenticado.');
      }
    } catch (error) {
      console.error('Erro ao adicionar documento: ', error);
    } finally {
      setIsLoading(false);
    }
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

  const handleAreasInteresseChange = (values) => {
    setFormData((prevData) => ({
      ...prevData,
      areasInteresse: values,
    }));
  };
  
  const handleCorRacaChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      corRaca: value,
    }));
  };
  
  const handleGeneroChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      genero: value,
    }));
  };
  
  const handleOrientacaoSexualChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      orientacaoSexual: value,
    }));
  };
  
  return (
    <LoadingContainer>
      {isLoading ? (
        <Spin size="large" /> 
      ) : (
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
          <TextLabel>Nome completo:</TextLabel>
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

          <TextLabel>Matrícula:</TextLabel>
          <Form.Item
            name="registration"
            rules={[
              {
                required: true,
                message: 'Por favor, insira a sua matrícula.',
              },
              {
                validator: (rule, value) => {
                  if (value.length === 9) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject('A matrícula deve ter exatamente 9 caracteres.');
                  }
                },
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange('registration', e.target.value)} />
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

          <TextLabel>Período de ingresso:</TextLabel>
          <Form.Item
            name="periodo"
            rules={[
              {
                required: true,
                message: 'Por favor, selecione o período.',
              },
            ]}
          >
            <Select onChange={(value) => handleInputChange('periodo', value)}>
              {[2017.1, 2017.2, 2018.1, 2018.2, 2019.1, 2019.2, 2020.1, 2020.2, 2021.1, 2021.2, 2022.1, 2022.2, 2023.1].map((periodo) => (
                <Option key={periodo} value={periodo}>
                  {periodo}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <TextLabel>Previsão de formatura:</TextLabel>
          <Form.Item
            name="periodoFormatura"
            rules={[
              {
                required: true,
                message: 'Por favor, selecione o período.',
              },
            ]}
          >
            <Select onChange={(value) => handleInputChange('periodoFormatura', value)}>
              {[2023.1, 2023.2, 2024.1, 2024.2, 2025.1, 2025.2, 2026.1, 2026.2, 2027.1, 2027.2, 2028.1, 2028.2, 2029.1].map((periodoFormatura) => (
                <Option key={periodoFormatura} value={periodoFormatura}>
                  {periodoFormatura}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <TextLabel>Tipo de Aluno</TextLabel>
          <Form.Item
            name="tipoAluno"
            rules={[
              {
                required: true,
                message: 'Por favor, selecione o período.',
              },
            ]}
          >
            <Select onChange={(value) => handleInputChange('tipoAluno', value)}>
              {['graduação', 'mestrado', 'doutorado'].map((tipoAluno) => (
                <Option key={tipoAluno} value={tipoAluno}>
                  {tipoAluno}
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
            <Select
              mode="multiple"
              placeholder="Selecione suas áreas de interesse"
              onChange={handleAreasInteresseChange} 
            >
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
              },
            ]}
          >
            <Select
              placeholder="Selecione a sua cor ou raça"
              onChange={handleCorRacaChange} 
            >
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
              },
            ]}
          >
            <Select
              placeholder="Selecione o gênero que você se identifica"
              onChange={handleGeneroChange} 
            >
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
              },
            ]}
          >
            <Select
              placeholder="Selecione a sua orientação sexual."
              onChange={handleOrientacaoSexualChange}
            >
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
            <ButtonCustom actived={true} text="Enviar" type="primary" htmlType="submit" onClick={handleSubmit}>
          Enviar
            </ButtonCustom>
          </ContainerButton>
        </Form>
      )}
      {isSuccess && (
        <GoodLuck text="Dados enviados!"onClose={handleIconXClick} />
      )}
    </LoadingContainer>
  );
};

export default FormComponent;
