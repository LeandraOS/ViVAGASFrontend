import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  background: linear-gradient(119deg, #119DB6 0%, #2878BE 100%);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  right: 0;
  border-radius: 1.25rem;
  margin-left: 11.5rem;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 10px;
    padding: 0.25rem 0.5rem;
    margin-left: 3.5rem;


  }


  
`