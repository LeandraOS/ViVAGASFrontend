import { CloseOutlined } from '@ant-design/icons'
import styled, { css } from 'styled-components'


export const OutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.40);

  @media screen and (min-width: 300px) and (max-width: 640px) {
    width: 104vw;
    height: 104vh;
  }

`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  min-height: 380px;
  padding: 2rem 2rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgb(150, 150, 150);


@media (max-width: 450px) {
    width: 80%;
    min-height: 280px;
    padding: 2rem 1.25rem;
  
}
`


export const IconX = styled(CloseOutlined)`
  color: #2878BE;
  align-self: flex-end;
  cursor: pointer;
  font-size: 32px;

  &:hover{
    transition: transform 0.2s ease;
    transform: scale(1.12);
    color: #bf0603;
  }

`

export const TextContainer = styled.div`
  display: flex;
  padding: ${({ padding }) => padding} 0 ${({ padding }) => padding} 0;
  width: ${({ widthText }) => widthText};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    width: 300px;
  }
`

export const Text = styled.p`

  color: #2878BE;
  text-align: ${({ justify }) => (justify ? 'justify' : 'center')};

  ${props =>
    props.textSize &&
    css`
      font-size: ${props.textSize};
    `}
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.36px;
    margin: ${({ margin }) => margin} 0 0;

    @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 11px;
  }
`