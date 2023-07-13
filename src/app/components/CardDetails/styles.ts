import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.75rem;
  width: 300px;
  min-height: 260px;
  border-radius: 6px;
  background: #DCEEFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: linear-gradient(#2878BE, #1C8CBA, #119DB6);
    border-right: solid;
    border-right-width: 6px;
    border-right-color: transparent;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.02);
  }
`

export const WrapperTitle = styled.div`
    display: flex;
    
`
