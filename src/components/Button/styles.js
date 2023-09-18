
import styled, { css } from 'styled-components'



export const StyledButton = styled.button`
  display: flex;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(119deg, #119DB6 0%, #2878BE 100%)'
      : 'linear-gradient(90deg, #C0C0C0 0%, #A6A6A6 47.74%, #9F9F9F 100%)'};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
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