import React from 'react';
import data from 'data';
import styled from 'styled-components';
import { PageHeadline } from 'components/atoms';
import { AccountCard, LatestActivity, WalletCard } from 'components/molecules';
import { DashboardGrid } from 'templates';

const StyledWallets = styled.div``;

const StyledAccount = styled.div``;

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
        <PageHeadline small>Latest activity</PageHeadline>
        <LatestActivity />
      </StyledAccount>
    </DashboardGrid>
  );
};

export default Dashboard;
