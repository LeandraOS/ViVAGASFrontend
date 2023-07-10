import React from 'react'
import { ContainerSearch } from './styles'

const onSearch = (value: string) => console.log(value)

export const InputSearch = () => {
  return (
    <ContainerSearch placeholder="Pesquisar..." onSearch={onSearch} enterButton />

  )
}

