import React from 'react';
import data from 'data';
import styled from 'styled-components';
import { PageHeadline } from 'components/atoms';
import { AccountCard, LatestActivity, WalletCard } from 'components/molecules';
import { DashboardGrid } from 'templates';
import { Link } from 'react-router-dom';
import routes from 'routes';

const StyledWallets = styled.div``;

const StyledAccount = styled.div``;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.fontColors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
  padding-left: 1rem;
`;

const Dashboard = () => {
  const { wallets } = data;
  return (
    <DashboardGrid>
      <StyledWallets>
        <PageHeadline>Wallets</PageHeadline>
        {wallets.map(wallet => (
          <WalletCard key={wallet.currency} data={wallet} />
        ))}
      </StyledWallets>
      <StyledAccount>
        <PageHeadline>Account</PageHeadline>
        <AccountCard />
        <PageHeadline small>
          Latest transactions
          <StyledLink to={routes.payments}>See more</StyledLink>
        </PageHeadline>
        <LatestActivity />
      </StyledAccount>
    </DashboardGrid>
  );
};

export default Dashboard;
