import styled from 'styled-components';
import { InboxOutlined } from '@ant-design/icons'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: 5rem;


`

export const Text = styled.p`
color: #2878BE;
text-align: justify;
font-family: 'Inter', sans-serif;
font-size: 14px;
font-style: normal;
line-height: normal;
letter-spacing: 0.48px;

`

export const Empty = styled(InboxOutlined)`
    font-size: 3rem;
    color: #119DB6 
`

