import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PageWrapper } from 'components/atoms';

const StyledDashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
`;

const DashboardGrid = ({ children }) => (
  <PageWrapper>
    <StyledDashboardGrid>{children}</StyledDashboardGrid>
  </PageWrapper>
);

DashboardGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DashboardGrid;
