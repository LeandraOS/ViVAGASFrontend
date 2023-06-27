import styled from 'styled-components'

export const Title= styled.h1`
    color: #2878BE;
    font-size: 2.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 1.28px;
    margin-top: 4.5rem;
    margin-bottom: 0px;
    &:hover {
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }

    @media screen and (min-width: 300px) and (max-width: 640px) {
      margin-top: 7rem;
      font-size: 1.5rem;
  }

  @media screen and (max-width: 820px) {
    margin-top: 7rem;
  }
`

