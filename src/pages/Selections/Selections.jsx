import React, { useState } from 'react';
import { TitlePages } from '../../components/TitlePages/TitlePages';
import { ContainerEmpty, Wrapper } from '../Registrations/styles';
import { IsEmpty } from '../../components/IsEmpty/IsEmpty';
import { CardSelect } from '../../components/CardDetails/CardSelect';

export const Selections = () => {
  const isTrue = true; // Defina isso com base na sua lógica de condição

  return (
    <>
      <TitlePages align="left" title="Minhas Seleções" margin="4rem" />
      {isTrue ? (
        <Wrapper>
            <CardSelect title="Card 1" initialValue="10" />
            <CardSelect title="Card 2" initialValue="20" />
            <CardSelect title="Card 3" initialValue="30" />
        </Wrapper>
      ) : (
        <ContainerEmpty>
            <IsEmpty />
        </ContainerEmpty>
      )}
    </>
  );
};
