import styled from 'styled-components'

export const Container = styled.div`
  height: 5.5rem;
  background: #fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 300px) and (max-width: 640px) {
    gap: 0.8rem;
    padding: 0 10px;
  }

`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`

export const Links = styled.a`
  position: relative;
  font-size: 20px;
  color: transparent;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;

  background: linear-gradient(45deg, #2878BE, #2878BE);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    top: 2rem;
    left: 0;
    background-color: #2878BE;
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.5s ease;

    @media screen and (min-width: 300px) and (max-width: 640px) {
      top: 1.2rem;
      height: 2px;

    }
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 11px;
  }
`