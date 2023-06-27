import styled from 'styled-components'


export const Wrapper = styled.a`
    color: #119DB6;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    gap: 1.25rem;
    letter-spacing: 0.56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.03);
  }
  @media screen and (min-width: 300px) and (max-width: 640px) {
        font-size: 14px;
  }

`

export const Container = styled.svg`
    height: 48px;

    @media screen and (min-width: 300px) and (max-width: 640px) {
        height: 38px;

  }

`