import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItemContentWrapper = styled.div`
  margin: 0 auto;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  max-height: ${({ isHidden }) => (isHidden ? '0px' : '800px')};
  transition: 0.5s all;
  overflow: hidden;
`;

const StyledItemContent = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.fontColors.grey};
  border-radius: 20px;
`;

const SettingsItemContentWrapper = ({ isHidden, children }) => (
  <StyledItemContentWrapper isHidden={isHidden}>
    <StyledItemContent>{children}</StyledItemContent>
  </StyledItemContentWrapper>
);

SettingsItemContentWrapper.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default SettingsItemContentWrapper;
