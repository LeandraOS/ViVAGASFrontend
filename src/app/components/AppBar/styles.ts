import styled from 'styled-components'

export const Container = styled.div`
  height: 5.5rem;
  background: #fff;
  color: #fff;
  display: flex;
  align-items: center;

  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 300px) and (max-width: 640px) {
    gap: 0.8rem;
  }

`

export const LinksContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;

`

export const Links = styled.a`
  position: relative;
  font-size: 20px;
  color: transparent;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  margin-left: 3px;


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