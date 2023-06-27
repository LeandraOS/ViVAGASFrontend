import styled from 'styled-components'

export const Logo = styled.svg`
  height: 4rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }

  @media screen and (min-width: 300px) and (max-width: 640px) {
    height: 2rem;

    &:hover {
    transform: none;
  }
  }

    
`

