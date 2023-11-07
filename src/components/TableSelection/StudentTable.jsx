import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

import PeriodSelect from '../SelectFilter/PeriodSelect';
import { StyledDropUp, StyledDropDown, Container, StyledSearch, StyledCRAInput, StyledTableContainer, StyledButtonCell, ColumnTitle, StyledTableCell, ContainerButton, ButtonAproved, LinkStyled, SelectBlue } from './styles';
import { createGlobalStyle } from 'styled-components';
import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FileDoneOutlined, FilePdfOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Select } from 'antd';
const { Option } = Select;

const status = [
  'Análise de currículo',
  'Entrevista',
  'Aprovado',
  'Lista de espera',
  'Não aprovado'
];

export const StudentTable = ({ idVaga }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [orderBy, setOrderBy] = useState('data');
  const [order, setOrder] = useState('asc');
  const [searchText, setSearchText] = useState('');
  const [filterCRA, setFilterCRA] = useState('');
  const [filterPeriod, setFilterPeriod] = useState([]);
  const [inscritos, setInscritos] = useState([]);
  const [dadosAlunos, setDadosAlunos] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(status[0]);

  const handleStatusChange = (value, aluno) => {
    aluno.selectedStatus = value;
    setDadosAlunos([...dadosAlunos]);
  };

  const filterStudents = (students) => {
    return students.filter((aluno) => {
      const lowerSearchText = searchText.toLowerCase();
      if (
        lowerSearchText.length > 0 &&
        !Object.values(aluno)
          .some((value) => String(value).toLowerCase().includes(lowerSearchText))
      ) {
        return false;
      }
      if (filterCRA !== '') {
        const formattedFilterCRA = filterCRA.replace(',', '.'); // Substitui ',' por '.'
        const formattedAlunoCRA = String(aluno.cra).replace(',', '.'); // Substitui ',' por '.'
        if (parseFloat(formattedFilterCRA) !== parseFloat(formattedAlunoCRA)) {
          return false;
        }
      }
      if (filterPeriod.length > 0 && !filterPeriod.includes(aluno.periodo.toString())) {
        return false;
      }
      if (selectedStatus !== '' && selectedStatus !== aluno.selectedStatus) {
        return false;
      }
      return true;
    });
  };

  const handleFilterChange = () => {
    const filteredStudents = filterStudents(dadosAlunos);
    setFilteredStudents(filteredStudents);
  };

  const fetchInscritos = async () => {
    try {
      const inscricoesRef = collection(db, 'inscricao');
      const q = query(inscricoesRef, where('idVaga', '==', idVaga));
      const querySnapshot = await getDocs(q);

      const alunosInscritos = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        alunosInscritos.push(data.idAluno);
      });

      setInscritos(alunosInscritos);

      fetchDadosAlunos(alunosInscritos);
    } catch (error) {
      console.error('Erro ao buscar inscritos:', error);
    }
  };

  const fetchDadosAlunos = async (alunosInscritos) => {
    try {
      const alunosRef = collection(db, 'aluno');
      const q = query(alunosRef, where('userId', 'in', alunosInscritos));
      const alunosSnapshot = await getDocs(q);

      const dadosAlunos = [];

      alunosSnapshot.forEach((doc) => {
        const data = doc.data();
        data.selectedStatus = status[0];
        dadosAlunos.push(data);
      });

      setDadosAlunos(dadosAlunos);
    } catch (error) {
      console.error('Erro ao buscar dados dos alunos:', error);
    }
  };

  useEffect(() => {
    fetchInscritos();
  }, [idVaga]);

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const handleFilterCRA = (event) => {
    setFilterCRA(event.target.value);
  };

  const handleFilterPeriod = (selectedPeriods) => {
    setFilterPeriod(selectedPeriods);
  };

  return (
    <div>
      <Container>
        <StyledSearch
          style={{
            width: '20%',
          }}
          placeholder="Pesquisar"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleFilterChange();
          }}
        />

        <StyledCRAInput
          style={{
            width: '12%',
          }}
          step="0.01"
          min={0}
          max={10}
          placeholder="Filtrar por CRA"
          value={filterCRA}
          onChange={handleFilterCRA}
          type="number"
        />

        <PeriodSelect
          value={filterPeriod}
          onChange={handleFilterPeriod}
        />
      </Container>

      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Foto</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Histórico</StyledTableCell>
              <StyledTableCell>Currículo</StyledTableCell>
              <StyledTableCell>Github</StyledTableCell>
              <StyledTableCell>LinkedIn</StyledTableCell>
              <StyledTableCell>Cor</StyledTableCell>
              <StyledTableCell>Gênero</StyledTableCell>
              <StyledTableCell>Nível</StyledTableCell>
              <StyledTableCell>Áreas de interesse</StyledTableCell>

              <StyledTableCell
                onClick={() => handleSort('CRA')}
                className={`sortable ${orderBy === 'CRA' ? (order === 'asc' ? 'sorted-asc' : 'sorted-desc') : ''}`}
              >
                <ColumnTitle>
                  CRA
                  {orderBy === 'CRA' ? (
                    order === 'asc' ? (
                      <StyledDropDown />
                    ) : (
                      <StyledDropUp />
                    )
                  ) : (
                    <StyledDropUp />
                  )}
                </ColumnTitle>
              </StyledTableCell>

              <StyledTableCell
                onClick={() => handleSort('periodo')}
                className={`sortable ${orderBy === 'periodo' ? (order === 'asc' ? 'sorted-asc' : 'sorted-desc') : ''}`}
              >
                <ColumnTitle>
                  Período Ingresso
                  {orderBy === 'periodo' ? (
                    order === 'asc' ? (
                      <StyledDropDown />
                    ) : (
                      <StyledDropUp />
                    )
                  ) : (
                    <StyledDropUp />
                  )}
                </ColumnTitle>
              </StyledTableCell>
              <StyledTableCell>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterStudents(dadosAlunos).map((aluno) => (
              <TableRow key={aluno.id}>
                <StyledTableCell style={{ width: '20px' }}><img style={{ borderRadius: '100%', width: '70px' }} src={aluno.photoURL} /></StyledTableCell>
                <StyledTableCell style={{ width: '120px' }}>{aluno.name}</StyledTableCell>
                <StyledTableCell><LinkStyled href={aluno.uploadedHistorico} target="_blank"><FileDoneOutlined /></LinkStyled></StyledTableCell>
                <StyledTableCell><LinkStyled href={aluno.uploadedCertificado} target="_blank"><FilePdfOutlined /></LinkStyled></StyledTableCell>
                <StyledTableCell><LinkStyled href={aluno.github} target="_blank"><GithubOutlined /></LinkStyled></StyledTableCell>
                <StyledTableCell><LinkStyled href={aluno.linkedin} target="_blank"><LinkedinOutlined /></LinkStyled></StyledTableCell>
                <StyledTableCell style={{ width: '60px' }}>{aluno.corRaca}</StyledTableCell>
                <StyledTableCell style={{ width: '60px' }}>{aluno.genero}</StyledTableCell>
                <StyledTableCell style={{ width: '60px' }}>{aluno.tipoAluno}</StyledTableCell>
                <StyledTableCell >
                  {aluno.areasInteresse.map((area, index) => (
                    <span key={index}>
                      {area}
                      {index < aluno.areasInteresse.length - 1 && ', '}
                    </span>
                  ))}
                </StyledTableCell>
                <StyledTableCell>{aluno.cra}</StyledTableCell>
                <StyledTableCell>{aluno.periodo}</StyledTableCell>
                <StyledButtonCell>
                  <SelectBlue
                    style={{ width: 150 }}
                    value={aluno.selectedStatus}
                    onChange={(value) => handleStatusChange(value, aluno)}
                  >
                    {status.map((option, index) => (
                      <Option style={{ color: '#2878BE' }} key={index} value={option}>
                        {option}
                      </Option>
                    ))}
                  </SelectBlue>
                </StyledButtonCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  )
};

