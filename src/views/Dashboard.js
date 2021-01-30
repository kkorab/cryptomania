import { PageWrapper } from 'components/atoms';
import { WalletCard } from 'components/molecules';
import React from 'react';
import styled from 'styled-components';

const StyledDashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
`;

const StyledHeadline = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.fontColors.grey};
`;
const StyledWallets = styled.div``;

const StyledAccount = styled.div``;

const Dashboard = () => (
  <PageWrapper>
    <StyledDashboardGrid>
      <StyledWallets>
        <StyledHeadline>Wallets</StyledHeadline>
        <WalletCard />
      </StyledWallets>
      <StyledAccount>
        <StyledHeadline>Account</StyledHeadline>
      </StyledAccount>
    </StyledDashboardGrid>
  </PageWrapper>
);

export default Dashboard;
