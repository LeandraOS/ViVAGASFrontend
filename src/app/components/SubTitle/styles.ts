import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 350px;
    flex-direction: column;
    flex-shrink: 0;

    @media screen and (min-width: 300px) and (max-width: 640px) {
    width: 250px;
  }
`

export const Text = styled.p`
    color: #2878BE;
    text-align: center;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0.56px;
    margin: 0px;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 14px;
  }
`
