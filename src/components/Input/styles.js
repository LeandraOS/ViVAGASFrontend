import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #2878BE;
  border-radius: 8px;
  padding-left: 14px;
  margin: 64px 64px;
  margin-left: auto;
  width: 280px; 

`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  border-left: 1px solid #2878BE;
  height: 42px;
  width: 42px;
  cursor: pointer;
  
`;

export const SearchIcon = styled(SearchOutlined)`
  color: #2878BE;
  font-size: 1rem;

  &:hover{
    transition: transform 0.2s ease;
    transform: scale(1.2);
  }
`;