import React from 'react';
import { PageWrapper } from 'components/atoms';
import { AccountCard, LatestActivity, WalletCard } from 'components/molecules';
import styled from 'styled-components';
import data from 'data';

const StyledDashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
`;

const StyledHeadline = styled.h1`
  font-size: ${({ theme, small }) =>
    small ? theme.fontSizes.s : theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.fontColors.grey};
`;

const StyledWallets = styled.div``;

const StyledAccount = styled.div``;

const Dashboard = () => {
  const { wallets } = data;
  return (
    <PageWrapper>
      <StyledDashboardGrid>
        <StyledWallets>
          <StyledHeadline>Wallets</StyledHeadline>
          {wallets.map(wallet => (
            <WalletCard key={wallet.currency} data={wallet} />
          ))}
        </StyledWallets>
        <StyledAccount>
          <StyledHeadline>Account</StyledHeadline>
          <AccountCard />
          <StyledHeadline small>Latest activity</StyledHeadline>
          <LatestActivity />
        </StyledAccount>
      </StyledDashboardGrid>
    </PageWrapper>
  );
};

export default Dashboard;
