import React from 'react'
import { CardProject } from '../../components/CardProject/CardProject'
import { Wrapper } from './styles'
import { SearchComponent } from '../../components/Input/InputSearch'
import { SelectFilter } from '../../components/SelectFilter/SelectFilter'


export const Vagas =() => {
  return (
    <>
    <SearchComponent />
    <SelectFilter></SelectFilter>
    <Wrapper>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={true} ></CardProject>
      <CardProject active={false} ></CardProject>
    </Wrapper>
    </>
  )
}
