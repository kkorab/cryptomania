import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { showUp } from 'animations';

const StyledCard = styled.div`
  margin: 2rem 0;
  width: ${({ currencyForm }) => (currencyForm ? '45%' : '100%')};
  height: ${({ fullHeight }) => (fullHeight ? '380px' : '200px')};
  background: ${({ theme }) => theme.bgColors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${showUp} 1s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

const StyledWrapper = styled.div`
  height: 90%;
  width: 90%;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: ${({ fullHeight }) =>
    fullHeight ? 'initial' : 'space-between'};
  z-index: 2;
`;

const PlainCard = ({ children, fullHeight, currencyForm }) => (
  <StyledCard currencyForm={currencyForm} fullHeight={fullHeight}>
    <StyledWrapper fullHeight={fullHeight}>{children}</StyledWrapper>
  </StyledCard>
);

PlainCard.propTypes = {
  currencyForm: PropTypes.bool,
  fullHeight: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

PlainCard.defaultProps = {
  currencyForm: false,
  fullHeight: false,
};

export default PlainCard;
