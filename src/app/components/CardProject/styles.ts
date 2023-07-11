import styled from 'styled-components'

interface LinkDetailsProps {
    active?: boolean;
  }

export const Card = styled.div<LinkDetailsProps>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.75rem;
  width: fit-content;
  min-height: fit-content;
  border-radius: 6px;
  background: ${({ active }) => (active ? '#DCEEFF' : '#fff')};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.02);
  }
`

export const Title = styled.h1`
    color: #2878BE;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0;
`

export const ContainerDescription = styled.div`
    display: flex;
    max-width: 300px;
    flex-direction: column;
    align-self: center;

`

export const Description = styled.p`
    text-align: justify;
    color: #2878BE;
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;

`
export const TitlePoint = styled.p`
    color: #2878BE;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    white-space: nowrap;

    ::after {
  content: ":";
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 24px;
    gap: 0.75rem;
    align-items: center;
`

export const WrapperButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-top: 1rem;
    margin-bottom: 13px;

`

export const LinkDetails = styled.a<LinkDetailsProps>`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  color: ${({ active }) => (active ? '#2086B6' : 'gray')};
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};

  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.02);
  }
`
export const Date = styled.p`
    color: #2878BE;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    line-height: 22px;

`
