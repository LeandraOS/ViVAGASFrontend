import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  background: linear-gradient(119deg, #119DB6 0%, #2878BE 100%);
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  right: 0;
  border-radius: 1.25rem;
  margin-left: 182px;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 10px;
    padding: 4px 8px;
    margin-left: 53px;


  }


  
`