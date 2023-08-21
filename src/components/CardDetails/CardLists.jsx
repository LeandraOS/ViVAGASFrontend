import React from 'react'
import { IconPsy, ItemList } from './styles'
import { CardDetails } from './CardDetails'


export const CardSoftSkills = ({
  item1,
  item2,
  item3,
  item4,
  item5,
}) => (
  <CardDetails icon={IconPsy} title='Requisitos de soft skills'>
    
    <ItemList>{item1}</ItemList>
    <ItemList>{item2}</ItemList>
    <ItemList>{item3}</ItemList>
    <ItemList>{item4}</ItemList>
    <ItemList>{item5}</ItemList>
    
  </CardDetails>
)