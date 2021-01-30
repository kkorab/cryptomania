import React from 'react';
import styled from 'styled-components';
import { Logo, MainWrapper } from 'components/atoms';
import { LoginForm } from 'components/molecules';

const StyledFormWrapper = styled.div`
  padding: 2rem;
  width: 450px;
  height: 500px;
  border-radius: 50px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

const StyledTextWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const StyledHeadline = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  &:first-of-type {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const Home = () => (
  <MainWrapper>
    <StyledFormWrapper>
      <Logo />
      <StyledTextWrapper>
        <StyledHeadline>Let&apos;s sign you in.</StyledHeadline>
        <StyledHeadline>Welcome back.</StyledHeadline>
        <StyledHeadline>You&apos;ve been missed!</StyledHeadline>
      </StyledTextWrapper>
      <LoginForm />
      <p>Don&apos;t have an account? Register now.</p>
    </StyledFormWrapper>
  </MainWrapper>
);

export default Home;
