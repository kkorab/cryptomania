import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PageWrapper } from 'components/atoms';

const StyledWalletPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const WalletsGrid = ({ children }) => (
  <PageWrapper>
    <StyledWalletPageGrid>{children}</StyledWalletPageGrid>
  </PageWrapper>
);

WalletsGrid.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WalletsGrid;
