import React, { useState } from 'react';
import { TitlePages } from '../../components/TitlePages/TitlePages';
import { CardRegistrations } from '../../components/CardDetails/CardRegistrations';
import { ContainerEmpty, Wrapper } from './styles';
import { IsEmpty } from '../../components/IsEmpty/IsEmpty';
import { BackButton } from '../../components/BackButton/BackButton';

export const Registrations = () => {
  const isTrue = true; // Defina isso com base na sua lógica de condição

  return (
    <>
      <BackButton />
      <TitlePages align="left" title="Minhas Inscrições" margin="4rem" />
      {isTrue ? (
        <Wrapper>
          <CardRegistrations title="VTEX LAB" />
          <CardRegistrations title="NuFuturo" />
          <CardRegistrations title="CodeSQ" />
          <CardRegistrations title="SMARTPos" />
          <CardRegistrations title="LiTT" />
          <CardRegistrations title="IMC" />
          <CardRegistrations title="LAB" />
          <CardRegistrations title="Nature" />
        </Wrapper>
      ) : (
        <ContainerEmpty>
          <IsEmpty />
        </ContainerEmpty>
      )}
    </>
  );
};
