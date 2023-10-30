import React, { useState, useEffect } from 'react';
import { Input, Button, Select, Form, Row, Col, Spin } from 'antd';
import styled from 'styled-components';
import { DestaqueTextLabel, TextLabel } from '../FormsAluno/TextLabel';
import { ButtonCustom } from '../Button/Button';
import { ContainerButton, LoadingContainer } from '../FormsAluno/styles';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { GoodLuck } from '../../modals/TextImg/GoodLuck';

const db = getFirestore();

const saveFormData = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'vaga'), formData);
    console.log('Documento salvo com ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Erro ao adicionar documento: ', e);
  }
};

const RowInputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || '2.1rem'};
`;

const { Option } = Select;

export const FormsVagas = ({ onFinish }) => {
  const areaVagaOptions = [
    'Frontend',
    'Backend',
    'Infraestrutura',
    'DevOps',
    'Análise de Dados',
    'Machine Learning',
  ];

  const cargaHorariaOptions = [
    '12h',
    '20h',
    '30h',
    '40h',
  ];

  const formatoOptions= [
    'presencial',
    'híbrido',
    'remoto'
  ]

  const softSkillsOptions = ['Habilidade de Comunicação', 'Trabalho em Equipe', 'Resolução de Problemas', 'Liderança'];
  const requisitosFormais = ['Ser estudante de graduação ou pós-graduação em Ciência da Computação da UFCG', 'CRA igual ou superior a 6,0 (seis)'];

  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData
      ? JSON.parse(storedData)
      : {
        tituloProjeto: '',
        descricaoProjeto: '',
        softSkills: [],
        areaVaga: [],
        requisitosFormais: [],
        bolsaValorGrad: '',
        cargaHorariaGrad: '',
        duracaoMesesGrad: '',
        formatoGrad: '',
        bolsaValorPos: '',
        cargaHorariaPos: '',
        duracaoMesesPos: '',
        formatoPos: '',
        aberturaInsc: '',
        fechamentoInsc: '',
        entrevistas: '',
        resultado: '',
        emailAprovado: '',
        emailNaoAprovado: '',
        observacoes: '',
      };
  });

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const auth = getAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showSuccessModal = () => {
    setIsModalVisible(true);
  };

  const handleIconXClick = () => {
    setIsSuccess(false);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
  
    try {
      const user = auth.currentUser;
  
      if (user) {
        const userId = user.uid;
        const formDataWithUser = { ...formData, userId }; 
        console.log('Dados do formulário enviados:', formDataWithUser);
        const docId = await saveFormData(formDataWithUser);
        localStorage.setItem('cadastroRealizadoVaga', 'true');
        setIsSuccess(true);
        showSuccessModal();
        onFinish(docId);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
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

  const handleSelectChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
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
          form={form}
        >
          <TextLabel>Título do Projeto:</TextLabel>
          <Form.Item
            name="tituloProjeto"
            rules={[
              {
                required: true,
                message: 'Por favor, insira o título do projeto.',
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange('tituloProjeto', e.target.value)} />
          </Form.Item>

          <TextLabel>Descrição do Projeto:</TextLabel>
          <Form.Item
            name="descricaoProjeto"
            rules={[
              {
                required: true,
                message: 'Por favor, insira a descrição do projeto.',
              },
            ]}
          >
            <Input.TextArea onChange={(e) => handleInputChange('descricaoProjeto', e.target.value)} />
          </Form.Item>

          <TextLabel>Requisitos de Soft Skills:</TextLabel>
          <Form.Item
            name="softSkills"
            rules={[
              {
                required: true,
                message: 'Por favor, selecione pelo menos uma habilidade de soft skills.',
                type: 'array',
                min: 1,
              },
            ]}
          >
            <Select mode="multiple" placeholder="Selecione as habilidades de soft skills" onChange={(value) => handleSelectChange('softSkills', value)}>
              {softSkillsOptions.map((skill, index) => (
                <Option key={index} value={skill}>
                  {skill}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <TextLabel>Área da vaga:</TextLabel>

          <Form.Item
            name="areaVaga"
            rules={[
              {
                required: true,
                message: 'Por favor, selecione pelo menos uma área da vaga.',
                type: 'array',
                min: 1,
              },
            ]}
          >
            <Select mode="multiple" placeholder="Selecione a(s) área(s) da vaga" onChange={(value) => handleSelectChange('areaVaga', value)}>
              {areaVagaOptions.map((vaga, index) => (
                <Option key={index} value={vaga}>
                  {vaga}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <TextLabel>Requisitos Formais:</TextLabel>
          <Form.Item
            name="requisitosFormais"
            rules={[
              {
                required: true,
                message: 'Por favor, insira os requisitos formais.',
              },
            ]}
          >
            <Select mode="multiple" placeholder="Selecione os requisitos formais" onChange={(value) => handleSelectChange('requisitosFormais', value)}>
              {requisitosFormais.map((requirements, index) => (
                <Option key={index} value={requirements}>
                  {requirements}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <DestaqueTextLabel color='#2878BE'>Informações Administrativas para Graduação:</DestaqueTextLabel>
          <RowInputs>
            <Col span={5}>
              <TextLabel>Valor da Bolsa(R$):</TextLabel>
              <Form.Item name="bolsaValorGrad">
                <Input
                  type='number'
                  step="0.01"
                  min={0}
                  value={formData.bolsaValorGrad}
                  onChange={(e) => handleInputChange('bolsaValorGrad', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <TextLabel>Carga Horária:</TextLabel>
              <Form.Item name="cargaHorariaGrad">
                <Select placeholder="Selecione a(s) área(s) da vaga" onChange={(value) => handleSelectChange('cargaHorariaGrad', value)}>
                  {cargaHorariaOptions.map((vaga, index) => (
                    <Option key={index} value={vaga}>
                      {vaga}
                    </Option>
                  ))}
                </Select>

              </Form.Item>
            </Col>
            <Col span={5}>
              <TextLabel>Duração (Meses):</TextLabel>
              <Form.Item name="duracaoMesesGrad">
                <Input
                  type='number'
                  value={formData.duracaoMesesGrad}
                  onChange={(e) => handleInputChange('duracaoMesesGrad', e.target.value)}
                  min={0}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <TextLabel>Formato:</TextLabel>
              <Form.Item name="formatoGrad">
                <Select placeholder="Selecione a(s) área(s) da vaga" onChange={(value) => handleSelectChange('formatoGrad', value)}>
                  {formatoOptions.map((vaga, index) => (
                    <Option key={index} value={vaga}>
                      {vaga}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </RowInputs>

          <DestaqueTextLabel color="">Informações Administrativas para Pós-Graduação:</DestaqueTextLabel>
          <RowInputs>
            <Col span={5}>
              <TextLabel color='#119DB6' >Valor da Bolsa(R$):</TextLabel>
              <Form.Item name="bolsaValorPos">
                <Input
                  type='number'
                  step="0.01"
                  min={0}
                  value={formData.bolsaValorGrad}
                  onChange={(e) => handleInputChange('bolsaValorPos', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <TextLabel color='#119DB6'>Carga Horária:</TextLabel>
              <Form.Item name="cargaHorariaPos">
                <Select placeholder="Selecione a(s) área(s) da vaga" onChange={(value) => handleSelectChange('cargaHorariaPos', value)}>
                  {cargaHorariaOptions.map((vaga, index) => (
                    <Option key={index} value={vaga}>
                      {vaga}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={5}>
              <TextLabel color='#119DB6'>Duração (Meses):</TextLabel>
              <Form.Item name="duracaoMesesPos">
                <Input
                  type='number'
                  value={formData.duracaoMesesGrad}
                  onChange={(e) => handleInputChange('duracaoMesesPos', e.target.value)}
                  min={0}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <TextLabel color='#119DB6'>Formato:</TextLabel>
              <Form.Item name="formatoPos">
                <Select placeholder="Selecione a(s) área(s) da vaga" onChange={(value) => handleSelectChange('formatoPos', value)}>
                  {formatoOptions.map((vaga, index) => (
                    <Option key={index} value={vaga}>
                      {vaga}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </RowInputs>


          <TextLabel margin='12px'>Cronograma:</TextLabel>
          <RowInputs gap='1.2rem'>
            <Col span={6}>
              <TextLabel>Abertura de inscrições:</TextLabel>
              <Form.Item name="aberturaInsc">
                <Input
                  type='date'
                  value={formData.aberturaInsc}
                  onChange={(e) => handleInputChange('aberturaInsc', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={5.5}>
              <TextLabel>Término de inscrições:</TextLabel>
              <Form.Item name="fechamentoInsc">
                <Input
                  type='date'
                  value={formData.duracaoMesesGrad}
                  onChange={(e) => handleInputChange('fechamentoInsc', e.target.value)}
                  min={0}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <TextLabel>Entrevistas:</TextLabel>
              <Form.Item name="entrevistas">
                <Input
                  type='date'
                  value={formData.duracaoMesesGrad}
                  onChange={(e) => handleInputChange('entrevistas', e.target.value)}
                />
              </Form.Item>
            </Col>
          
            <Col span={5}>
              <TextLabel>Resultado:</TextLabel>
              <Form.Item name="resultado">
                <Input
                  type='date'
                  value={formData.duracaoMesesGrad}
                  onChange={(e) => handleInputChange('resultado', e.target.value)}
                />
              </Form.Item>
            </Col>
          </RowInputs>

          <TextLabel>Email a ser enviado para alunos aprovados:</TextLabel>
          <Form.Item
            name="emailAprovado"
            rules={[
              {
                required: true,
                message: 'Por favor, adicione a mensagem do email para os alunos aprovados.',
              },
            ]}
          >
            <Input.TextArea onChange={(e) => handleInputChange('emailAprovado', e.target.value)}  />
          </Form.Item>

          <TextLabel>Email a ser enviado para alunos não aprovados:</TextLabel>
          <Form.Item
            name="emailNaoAprovado"
            rules={[
              {
                required: true,
                message: 'Por favor, adicione a mensagem do email para os alunos não aprovados.',
              },
            ]}
          >
            <Input.TextArea onChange={(e) => handleInputChange('emailNaoAprovado', e.target.value)}  />
          </Form.Item>

          <TextLabel>Observações:</TextLabel>
          <Form.Item name="observacoes">
            <Input.TextArea onChange={(e) => handleInputChange('observacoes', e.target.value)} />
          </Form.Item>

          <ContainerButton>
            <ButtonCustom actived={true} text="Enviar" type="primary" htmlType="submit" onClick={handleSubmit}>
            Enviar
            </ButtonCustom>
          </ContainerButton>
          {isSuccess && (
            <GoodLuck text="Dados enviados!"onClose={handleIconXClick} />
          )}
        </Form>
      )}
    </LoadingContainer>
  );
};