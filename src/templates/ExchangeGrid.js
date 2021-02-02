import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PageWrapper } from 'components/atoms';

const StyledExchangeGrid = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-gap: 20px;
`;

const ExchangeGrid = ({ children }) => (
  <PageWrapper>
    <StyledExchangeGrid>{children}</StyledExchangeGrid>
  </PageWrapper>
);

ExchangeGrid.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ExchangeGrid;
