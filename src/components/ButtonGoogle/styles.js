import styled from 'styled-components'

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 55px;
  width: 350px;
  border-radius: 50px;
  background: linear-gradient(119deg, #119DB6 0%, #2878BE 100%);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.02);
  }

  @media screen and (min-width: 300px) and (max-width: 640px) {
    width: 240px;
    height: 40px;
  }

`

export const Text = styled.p`
    color: #FFF;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    letter-spacing: 0.56px;

    @media screen and (min-width: 300px) and (max-width: 640px) {
        font-size: 14px;
  }
`
