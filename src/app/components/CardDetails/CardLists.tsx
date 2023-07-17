import React from 'react'
import { IconPsy, ItemList } from './styles'
import { CardDetails } from './CardDetails'

interface CardSoftSkillsProps {
  item1: string;
  item2: string;
  item3: string;
  item4?: string;
  item5?: string;
}

export const CardSoftSkills: React.FC<CardSoftSkillsProps> = ({
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