import React, { useState } from 'react';
import { TitlePages } from '../../components/TitlePages/TitlePages';
import { CardRegistrations } from '../../components/CardDetails/CardRegistrations';
import { ContainerEmpty, Wrapper } from './styles';
import { IsEmpty } from '../../components/IsEmpty/IsEmpty';

export const Registrations = () => {
  const isTrue = false; // Defina isso com base na sua lógica de condição

  return (
    <>
      <TitlePages align="left" title="Minhas Inscrições" margin="4rem" />
      {isTrue ? (
        <Wrapper>
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="VTEX LAB" />
        </Wrapper>
      ) : (
        <ContainerEmpty>
          <IsEmpty />
        </ContainerEmpty>
      )}
    </>
  );
};
