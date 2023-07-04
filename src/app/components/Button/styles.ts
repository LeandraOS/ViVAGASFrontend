
import styled, { css } from 'styled-components'

interface StyledButtonProps {
  marginLeft?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
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
  ${props =>
    props.marginLeft &&
    css`
      margin-left: ${props.marginLeft};
    `}
  
  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.02);
  }

  @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 12px;
    padding: 0.25rem 0.5rem;
    ${props =>
    props.marginLeft &&
      css`
        margin-left: ${props.marginLeft};
      `}
  }
`
