import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Select, Form, Row, Col } from 'antd';
import styled from 'styled-components';
import TextLabel from '../FormsAluno/TextLabel';
import { ButtonCustom } from '../Button/Button';
import { ContainerButton } from '../FormsAluno/styles';


const RowInputs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`
const { Option } = Select;

export const FormsVagas = ({ onFinish }) => {
  const areasDeInteresseOptions = [
    'Frontend',
    'Backend',
    'Infraestrutura',
    'DevOps',
    'Análise de Dados',
    'Machine Learning',
  ];

  const softSkillsOptions = ['Habilidade de Comunicação', 'Trabalho em Equipe', 'Resolução de Problemas', 'Liderança'];
  const formalRequirements = ['Ser estudante de graduação ou pós-graduação em Ciência da Computação da UFCG ', 'CRA igual ou superior a 6,0 (seis)']

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
        uploadedCertificado: null,
        uploadedHistorico: null,
        tituloProjeto: '',
        descricaoProjeto: '',
        softSkills: [],
        formalRequirements: '',
        infoAdminGraduacao: [
          { bolsaValor: '', cargaHoraria: '', duracaoMeses: '', formato: '' },

        ],
        infoAdminPosGraduacao: [
          { bolsaValor: '', cargaHoraria: '', duracaoMeses: '', formato: '' },

        ],
        formularioLink: '',
        observacoes: '',
      };
  });

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
        uploadedCertificado: parsedData.uploadedCertificado || null,
        uploadedHistorico: parsedData.uploadedHistorico || null,
        // Campos adicionados ...
        tituloProjeto: parsedData.tituloProjeto || '',
        descricaoProjeto: parsedData.descricaoProjeto || '',
        softSkills: parsedData.softSkills || [],
        formalRequirements: parsedData.requisitosFormais || '',
        infoAdminGraduacao: parsedData.infoAdminGraduacao || [
          { bolsaValor: '', cargaHoraria: '', duracaoMeses: '', formato: '' },

        ],
        infoAdminPosGraduacao: parsedData.infoAdminPosGraduacao || [
          { bolsaValor: '', cargaHoraria: '', duracaoMeses: '', formato: '' },

        ],
        formularioLink: parsedData.formularioLink || '',
        observacoes: parsedData.observacoes || '',
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
    <>
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

        {/* Descrição do Projeto */}
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

        {/* Requisitos de Soft Skills */}
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
          <Select mode="multiple" placeholder="Selecione as habilidades de soft skills">
            {softSkillsOptions.map((skill, index) => (
              <Option key={index} value={skill}>
                {skill}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Requisitos Formais */}
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
          <Select mode="multiple" placeholder="Selecione os requisitos formais">
            {formalRequirements.map((requirements, index) => (
              <Option key={index} value={requirements}>
                {requirements}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Informações Administrativas para Graduação */}
     
        <TextLabel>Informações Administrativas para Graduação:</TextLabel>
        <RowInputs>
          <Col span={4}>
            <TextLabel>Valor da Bolsa:</TextLabel>
            <Form.Item
              name={['infoAdminGraduacao', 0, 'bolsaValor']}
            >
              <Input type='number' step="0.01" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <TextLabel>Carga Horária:</TextLabel>

            <Form.Item
              name={['infoAdminGraduacao', 0, 'cargaHoraria']}
            >
              <Input type='number' />
            </Form.Item>
          </Col>
          <Col span={4}>
            <TextLabel>Duração:</TextLabel>

            <Form.Item
              name={['infoAdminGraduacao', 0, 'duracaoMeses']}
            >
              <Input type='number'/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <TextLabel>Formato:</TextLabel>

            <Form.Item
              name={['infoAdminGraduacao', 0, 'formato']}
            >
              <Select>
                <Option value="presencial">Presencial</Option>
                <Option value="hibrido">Híbrido</Option>
                <Option value="remoto">Remoto</Option>
              </Select>
            </Form.Item>
          </Col>
        </RowInputs>

        {/* Informações Administrativas para Pós-Graduação */}
        <TextLabel>Informações Administrativas para Pós-Graduação:</TextLabel>
        <RowInputs>
          <Col span={4}>
            <TextLabel>Bolsa:</TextLabel>

            <Form.Item
              name={['infoAdminPosGraduacao', 0, 'bolsaValor']}
             
            >
              <Input type='number'/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <TextLabel>Carga Horária:</TextLabel>

            <Form.Item
              name={['infoAdminPosGraduacao', 0, 'cargaHoraria']}
            >
              <Input type='number'/>
            </Form.Item>
          </Col>

          <Col span={4}>
            <TextLabel>Duração:</TextLabel>

            <Form.Item
              name={['infoAdminPosGraduacao', 0, 'duracaoMeses']}
            >
              <Input type='number'/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <TextLabel>Formato:</TextLabel>

            <Form.Item
              name={['infoAdminPosGraduacao', 0, 'formato']}
            >
              <Select>
                <Option value="presencial">Presencial</Option>
                <Option value="hibrido">Híbrido</Option>
                <Option value="remoto">Remoto</Option>
              </Select>
            </Form.Item>
          </Col>
        </RowInputs>
      
        {/* Link para o Formulário */}
        <TextLabel>Link para o Formulário:</TextLabel>
        <Form.Item
          name="formularioLink"
          rules={[
            {
              required: true,
              message: 'Por favor, insira o link para o formulário.',
            },
          ]}
        >
          <Input onChange={(e) => handleInputChange('formularioLink', e.target.value)} />
        </Form.Item>

        {/* Campo de Observações */}
        <TextLabel>Observações:</TextLabel>
        <Form.Item name="observacoes">
          <Input.TextArea onChange={(e) => handleInputChange('observacoes', e.target.value)} />
        </Form.Item>

        {/* Botão de Envio */}
        <ContainerButton>
          <ButtonCustom actived={true} text="Enviar" type="primary" htmlType="submit">
          Enviar
          </ButtonCustom>
        </ContainerButton>
      </Form>
    </>
  );
};


