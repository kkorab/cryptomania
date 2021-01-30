import React from 'react';
import styled from 'styled-components';
import logoImg from 'assets/svgs/logo.png';
import { NavLink } from 'react-router-dom';

const StyledLogoWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const StyledLogo = styled.img`
  width: 25px;
  margin-bottom: 0.5rem;
`;

const StyledLogoHeadline = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.fontColors.primary};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Logo = () => (
  <StyledLogoWrapper to="/dashboard">
    <StyledLogo src={logoImg} />
    <StyledLogoHeadline>Cryptomania</StyledLogoHeadline>
  </StyledLogoWrapper>
);

export default Logo;
