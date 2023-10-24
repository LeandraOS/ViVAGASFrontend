import { ArrowLeftOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export const Button = styled.a`
  display: flex;
  color: #2878BE;
  gap: 0.5rem;
  width: 2.5rem;
  margin-left: 16px ;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 2px;
  

  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.02);
  }
  `

export const IconBack = styled(ArrowLeftOutlined)`
  color: #2878BE;
`