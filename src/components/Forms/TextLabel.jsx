import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block; /* Coloca o rótulo em uma linha separada */
  color: #2878BE; /* Define a cor azul */
  margin-bottom: 5px; /* Adicione algum espaço entre o rótulo e o input */
`;

const TextLabel = ({ children }) => {
  return <Label>{children}</Label>;
};

export default TextLabel;