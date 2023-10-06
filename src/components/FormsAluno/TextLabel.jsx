import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  color: ${(props) => props.color || '#2878BE'};
  margin-bottom:  ${(props) => props.margin || '5px'};
`;

const TextLabelD = styled.label`
  display: block; 
  color: #2878BE; 
  margin-bottom: 12px; 
  color: ${(props) => props.color || '#119DB6'};
  font-weight: 600;
  font-size: 16px;


  
`

export const TextLabel = ({ children, color, margin }) => {
  return <Label margin={margin} color={color}>{children}</Label>;
};

export const DestaqueTextLabel = ({children, color}) => {
  return <TextLabelD color={color}>{children}</TextLabelD>
}