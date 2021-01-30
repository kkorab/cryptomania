import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from 'components/atoms';
import { Redirect } from 'react-router';
import routes from 'routes';

const StyledForm = styled.form`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  margin: 2rem 0;
  width: 300px;
  background: ${({ theme }) => theme.bgColors.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <StyledForm>
      <StyledTextField
        id="form-login"
        label="Your address e-mail"
        variant="filled"
      />
      <StyledTextField
        id="form-password"
        label="Your password"
        variant="filled"
        type="password"
      />
      <Button formBtn type="submit" onClick={handleLogIn}>
        Log in
        {loggedIn && <Redirect to={routes.dashboard} />}
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
