import React from 'react'
import { CardProject } from '../../components/CardProject/CardProject'
import { Wrapper } from './styles'
import { SearchComponent } from '../../components/Input/InputSearch'


export const Vagas =() => {
  return (
    <>
    <SearchComponent />
    <Wrapper>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
    </Wrapper>
    </>
  )
}
