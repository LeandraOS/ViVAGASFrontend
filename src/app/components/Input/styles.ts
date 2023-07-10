import styled from 'styled-components'

import { Input } from 'antd'

const { Search } = Input

export const ContainerSearch = styled(Search)`
    border: 1px solid #2878BE;
    width: 300px;
    border-radius: 6px;
    :where(.css-dev-only-do-not-override-14wwjjs).ant-input-search .ant-input:hover, :where(.css-dev-only-do-not-override-14wwjjs).ant-input-search .ant-input:focus{  
        box-shadow: none;
        border-color: transparent;
        outline: none;
    }
    input{
        border-color: transparent;
    }
    input::placeholder{
        color: #8FC9FC;
    }

button{
    background-color: #fff;
    box-shadow: none;

    :where(.css-dev-only-do-not-override-14wwjjs).ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover{
        background-color: #fff;
    }

    :where(.css-dev-only-do-not-override-14wwjjs).ant-btn-primary{
        box-shadow: none;
    }  
    :where(.css-dev-only-do-not-override-14wwjjs).ant-btn:not(:disabled):focus-visible{
        outline: none;
        outline-offset: 0;
        transition: none;
        box-shadow: none;
    }

    svg{
        color: #2878BE;
        
    }

}

`