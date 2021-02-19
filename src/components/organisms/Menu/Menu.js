import React from 'react';
import styled from 'styled-components';
import routes from 'routes';
import { useLocation } from 'react-router';
import { Logo, MenuItem } from 'components/atoms';
import { NavLink } from 'react-router-dom';

import SettingsIcon from '@material-ui/icons/Settings';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

const StyledNavBar = styled.nav`
  padding: 3rem 0rem;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledMenu = styled.ul`
  height: 75%;
  list-style: none;
`;

const StyledSettings = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ theme, opened }) =>
    opened ? theme.bgColors.tertiary : theme.bgColors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s all;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.fontColors.grey};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-decoration: none;
  transition: 0.3s all;

  & svg {
    margin-right: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  &.active {
    background: ${({ theme }) => theme.bgColors.tertiary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    color: ${({ theme }) => theme.btnColors.primary};
  }
`;
const StyledSettingsNavLink = styled(StyledNavLink)`
  display: flex;
  justify-content: center;
  & svg {
    margin: 0 auto;
  }
`;

const settingsIconStyle = {
  fontSize: '2rem',
  color: '#918195',
};

const Menu = () => {
  let { pathname } = useLocation();
  const {
    dashboard,
    payments,
    activities,
    wallets,
    exchange,
    settings,
  } = routes;
  return (
    pathname !== '/' && (
      <StyledNavBar>
        <Logo />
        <StyledMenu>
          <MenuItem>
            <StyledNavLink to={dashboard}>
              <DashboardIcon />
              Dashboard
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to={payments}>
              <PaymentIcon />
              Payments
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to={activities}>
              <SyncAltIcon />
              Activities
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to={wallets}>
              <AccountBalanceWalletIcon />
              Wallets
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to={exchange}>
              <AutorenewIcon />
              Exchange
            </StyledNavLink>
          </MenuItem>
        </StyledMenu>
        <StyledSettings>
          <StyledSettingsNavLink to={settings}>
            <SettingsIcon style={settingsIconStyle} />
          </StyledSettingsNavLink>
        </StyledSettings>
      </StyledNavBar>
    )
  );
};

export default Menu;
