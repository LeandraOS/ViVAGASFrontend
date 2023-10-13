import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

import PeriodSelect from '../SelectFilter/PeriodSelect';
import { StyledDropUp, StyledDropDown, Container, StyledSearch, StyledCRAInput, StyledTableContainer, StyledButtonCell, ColumnTitle, StyledTableCell, ContainerButton, ButtonAproved } from './styles';
import { Input } from 'antd';
import { createGlobalStyle } from 'styled-components';

const studentsData = [
  {
    id: 1,
    data: '02/10/2023',
    foto: 'URL_DA_FOTO',
    nome: 'João',
    email: 'joao@email.com',
    historico: 'Histórico do aluno',
    curriculo: 'Curriculum Vitae',
    CRA: 8.5,
    periodo: 3,
    aprovado: null,
  },
  {
    id: 2,
    data: '01/10/2023',
    foto: 'URL_DA_FOTO',
    nome: 'Maria',
    email: 'maria@email.com',
    historico: 'Histórico do aluno',
    curriculo: 'Curriculum Vitae',
    CRA: 9.5,
    periodo: 8,
    aprovado: null,
  },
  // Adicione mais alunos, se necessário
];

function StudentTable() {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [orderBy, setOrderBy] = useState('data');
  const [order, setOrder] = useState('asc');
  const [searchText, setSearchText] = useState('');
  const [filterCRA, setFilterCRA] = useState('');
  const [filterPeriod, setFilterPeriod] = useState([]);

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const sortedData = [...studentsData].sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return b[orderBy] < a[orderBy] ? -1 : 1;
    }
  });

  const handleFilterCRA = (event) => {
    setFilterCRA(event.target.value);
  };

  const toggleStudentSelection = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((s) => s !== student));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleApprove = () => {
    if (selectedStudents.length > 0) {
      // Envie e-mails de aprovação para cada aluno selecionado
      const names = selectedStudents.map((student) => student.nome).join(', ');
      alert(`Alunos ${names} aprovados!`);
      // Limpe a seleção após a aprovação
      setSelectedStudents([]);
    }
  };

  const handleReject = () => {
    if (selectedStudents.length > 0) {
      // Envie e-mails de reprovação para cada aluno selecionado
      const names = selectedStudents.map((student) => student.nome).join(', ');
      alert(`Alunos ${names} não aprovados!`);
      // Limpe a seleção após a reprovação
      setSelectedStudents([]);
    }
  };

  const filteredData = sortedData.filter((student) => {
    const craMatch = !filterCRA || student.CRA.toString().startsWith(filterCRA);
    const periodMatch =
      filterPeriod.length === 0 || filterPeriod.includes(student.periodo.toString());
    const searchMatch =
      student.nome.toLowerCase().includes(searchText.toLowerCase()) ||
      student.email.toLowerCase().includes(searchText.toLowerCase()) ||
      student.historico.toLowerCase().includes(searchText.toLowerCase()) ||
      student.curriculo.toLowerCase().includes(searchText.toLowerCase());

    return craMatch && periodMatch && searchMatch;
  });

  const GlobalStyle = createGlobalStyle`

`;

  return (
    <div>
      <GlobalStyle /> {/* Aplica o estilo global de cor do texto */}
      <Container>
        <StyledSearch
          style={{
            width: '20%',
          }}
          placeholder="Pesquisar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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
          type='number'
        />

        <PeriodSelect
          value={filterPeriod}
          onChange={setFilterPeriod}
        />
      </Container>

      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell
                onClick={() => handleSort('data')}
                className={`sortable ${orderBy === 'data' ? (order === 'asc' ? 'sorted-asc' : 'sorted-desc') : ''}`}
              >
                <ColumnTitle>
                Data
                  {orderBy === 'data' ? (
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

              <StyledTableCell>Foto</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Histórico</StyledTableCell>
              <StyledTableCell>Curriculum</StyledTableCell>
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
                  Período
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
            {filteredData.map((student) => (
              <TableRow key={student.id}>
                <StyledTableCell>{student.data}</StyledTableCell>
                <StyledTableCell>{student.foto}</StyledTableCell>
                <StyledTableCell>{student.nome}</StyledTableCell>
                <StyledTableCell>{student.email}</StyledTableCell>
                <StyledTableCell>{student.historico}</StyledTableCell>
                <StyledTableCell>{student.curriculo}</StyledTableCell>
                <StyledTableCell>{student.CRA}</StyledTableCell>
                <StyledTableCell>{student.periodo}</StyledTableCell>
                <StyledButtonCell>
                  <Button
                    variant="outlined"
                    color={
                      selectedStudents.includes(student) ? 'secondary' : 'primary'
                    }
                    onClick={() => toggleStudentSelection(student)}
                  >
                    {selectedStudents.includes(student) ? 'Desmarcar' : 'marcar'}
                  </Button>
                </StyledButtonCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <ContainerButton>
        <ButtonAproved
          variant="contained"
          onClick={handleApprove}
          disabled={selectedStudents.length === 0}
        >
          Aprovar
        </ButtonAproved>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReject}
          disabled={selectedStudents.length === 0}
        >
          Não Aprovar
        </Button>
      </ContainerButton>
    </div>

  );
}

export default StudentTable;
