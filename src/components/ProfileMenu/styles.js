import { Avatar, MenuItem } from '@mui/material'
import styled from 'styled-components'

export const ContainerMenu = styled(MenuItem)`
    color: #2878BE;
    font-size: 16px ;
    display: flex;
    gap: 0.5rem;
    font-family: 'Inter', sans-serif;

    @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 14px;
  }

`

export const Name = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #2878BE;
    padding: 0 8px;

    @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 14px;
  }

`

export const ProfilePict = styled(Avatar)`
    border: solid #2878BE 4px;
    width: 60px;
    height: 60px;

    &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.03);
  }

    @media screen and (min-width: 300px) and (max-width: 640px) {
        border: solid #2878BE 3px;
        width: 30px;
        height: 30px;
  }
`