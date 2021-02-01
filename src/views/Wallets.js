import React from 'react';
import { PageHeadline } from 'components/atoms';
import { WalletsGrid } from 'templates';

const Wallets = () => (
  <WalletsGrid>
    <PageHeadline style={{ border: '1px solid red' }}>Statistics</PageHeadline>
  </WalletsGrid>
);

export default Wallets;
