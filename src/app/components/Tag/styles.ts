import styled from 'styled-components'

export const Container = styled.div`
    display: inline-flex;
    padding: 0 8px;
    align-items: center;
    border-radius: 2px;
    border: 1px solid #2878BE;
    background: #C6E4FF;
    color: #2878BE;
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    justify-content: center;

    @media screen and (min-width: 300px) and (max-width: 820px) {
        font-size: 9px;
        padding: 0 4px;
    }
`