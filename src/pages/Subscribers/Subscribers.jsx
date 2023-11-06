import React from 'react';
import { useParams } from 'react-router-dom';
import { StudentTable } from '../../components/TableSelection/StudentTable';
import { BackButton } from '../../components/BackButton/BackButton';

export const Subscribers = () => {
  const { idVaga } = useParams(); 
  return (
    <div>
      <BackButton />
      <StudentTable idVaga={idVaga} /> 
    </div>
  );
};
