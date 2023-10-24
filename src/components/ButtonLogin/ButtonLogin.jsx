
import React, { useContext } from 'react';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { StyledButton } from '../Button/styles';

export const ButtonLogin = ({ text, marginLeft, actived }) => {
  const { signed, signInGoogle, signOut } = useContext(AuthGoogleContext);

  const handleButtonClick = () => {
    if (signed) {
      signOut();
    } else {
      signInGoogle();
    }
  };

  return (
    <StyledButton marginLeft={marginLeft} active={actived} onClick={handleButtonClick}>
      {signed ? 'Logout' : text}
    </StyledButton>
  );
};
