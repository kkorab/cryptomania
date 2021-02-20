import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSettingsWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-height: ${({ isHidden }) => (isHidden ? '0px' : '800px')};
  max-width: 800px;
  border-radius: 20px;
  transition: all 0.5s;
  overflow: hidden;
`;

const StyledContentWrapper = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.fontColors.grey};
  border-radius: 20px;
`;

const StyledHeadline = styled.h2``;

const StyledContent = styled.p``;

const SettingsRowContent = ({ isHidden }) => (
  <StyledSettingsWrapper isHidden={isHidden}>
    <StyledContentWrapper>
      <StyledHeadline>Jan Kowalski</StyledHeadline>
      <StyledContent>92848177</StyledContent>
    </StyledContentWrapper>
  </StyledSettingsWrapper>
);

SettingsRowContent.propTypes = {
  isHidden: PropTypes.bool.isRequired,
};

export default SettingsRowContent;
