import React from 'react'
import { CardTags, MenuCustom, Title, WrapperTitle } from './styles'
import { Select } from '@mui/material'



export const CardSelect = ({ title }) => {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <CardTags>
      <WrapperTitle>
        <Title>{title}</Title>
      </WrapperTitle>
      <Select   sx={{
        color: '#2086B6',
        fontSize: '12px',
        border: 'solid 1px #2086B6',
        height: '36px',
        '&:hover': {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#2086B6',
          },
        },
        '& svg': {
          color: '#2086B6', // Estilo para o svg dentro do Select
        },
      }}
      value={age}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      >
      
        <MenuCustom value={10}>Ten</MenuCustom>
        <MenuCustom value={20}>Twenty</MenuCustom>
        <MenuCustom value={30}>Thirty</MenuCustom>
      </Select>
    </CardTags>
  )
}