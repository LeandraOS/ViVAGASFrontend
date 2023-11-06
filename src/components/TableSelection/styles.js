import styled from 'styled-components';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { Button, TableCell, TableContainer, TextField } from '@mui/material';
import { Input, Select } from 'antd';
const { Search } = Input; // Importe o componente de pesquisa do Ant Design



export const StyledDropUp = styled(ArrowDropUpOutlinedIcon)`
  color: #2878BE;
`;

export const StyledDropDown = styled(ArrowDropDownOutlinedIcon)`
  color: #2878BE;

`;

export const StyledSortIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 4px; /* Adicione margem à esquerda para separar o ícone do texto */
`;

export const ContainerInputs = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;


`
export const InputText = styled(TextField)`
  color: #2878BE !important;
  padding: none !important;
`;


export const Container = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
justify-content: center;
gap: 10px;
`

export const StyledSearch = styled(Search)`
  width: 20%;
  input, button {
    border-color: #2878BE !important; /* Define a cor da borda */
    border-width: 1px;
  }
`;

export const StyledCRAInput = styled(Input)`
  width: 20%;
  border-color: #2878BE !important; /* Define a cor da borda */
  border-width: 1px;
`;

export const StyledTableContainer = styled(TableContainer)`

  && {
    color: #2878BE; 
    width: 100%;
    margin-top: 20px;

  }
`;

export const StyledTableCell = styled(TableCell)`
  text-align: center; /* Centraliza o texto horizontalmente */


  && {
    color: #2878BE; 
    text-align: center; /* Centraliza o texto horizontalmente */

  }
`;

export const StyledButton = styled(Button)`
  && {
    color: #2878BE; 
  }
`;


export const ColumnTitle = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  text-align: center; /* Centraliza o texto horizontalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */

  cursor: pointer;

`

export const ContainerButton = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

export const ButtonAproved = styled(Button)`
  background: linear-gradient(119deg, #119DB6 0%, #2878BE 100%);
  color: white; /* Define a cor do texto como branca */

  &:disabled {
    background: gray; /* Cor de fundo cinza para o botão desabilitado */
    color: black; /* Define a cor do texto como preta para o botão desabilitado */
  }
`;

export const StyledButtonCell = styled(StyledTableCell)`
  /* Estilos para as células que contêm botões */
  display: flex;
  align-items: center; /* Centraliza o conteúdo verticalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  padding-bottom: 24px;
`;

export const LinkStyled = styled.a`
  color: #2878BE; 
  font-size: 28px;

  &:hover{
    color: #119DB6; 
    transition: transform 0.2s ease;
    transform: scale(1.1);
  }
`

export const SelectBlue = styled(Select)`
 span {
   color: #2878BE !important;
 }

`