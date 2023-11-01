import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding-left: 14px;
  margin-left: auto;
  margin-top: 5rem;
  margin-right: 2rem;
  width: 280px; 
  height: 2rem;

`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  color: #2878BE;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  border-left: 1px solid #d9d9d9;
  height: 32px;
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