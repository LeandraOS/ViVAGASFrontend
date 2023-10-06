import React, { useState, useEffect } from 'react';
import { Input, Button, Select, Form, Row, Col } from 'antd';
import styled from 'styled-components';
import { DestaqueTextLabel, TextLabel } from '../FormsAluno/TextLabel';
import { ButtonCustom } from '../Button/Button';
import { ContainerButton } from '../FormsAluno/styles';
import { Wrapper } from './styles';

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
        formularioLink: '',
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

  const handleSelectChange = (field, value) => {
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
          <Select mode="multiple" placeholder="Selecione os requisitos formais" onChange={(value) => handleSelectChange('requisitosFormais', value)}>
            {requisitosFormais.map((requirements, index) => (
              <Option key={index} value={requirements}>
                {requirements}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Informações Administrativas para Graduação */}
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

        {/* Informações Administrativas para Pós-Graduação */}
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
          <Input onChange={(e) => handleInputChange('formularioLink', e.target.value)} type='url' />
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
