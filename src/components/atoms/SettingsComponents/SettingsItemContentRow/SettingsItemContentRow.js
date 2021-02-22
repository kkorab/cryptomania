import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';

const StyledWrapper = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  width: 90%;
  border-bottom: 1px solid ${({ theme }) => theme.fontColors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledContentWrapper = styled.div``;

const StyledHeadline = styled.h3``;

const StyledContent = styled.p`
  padding-top: 6px;
`;

const StyledEditButton = styled.button`
  padding: 0.4rem 1rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.fontColors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  border-radius: ${({ theme }) => theme.borderRadius.xtraSmall};
  cursor: pointer;
  outline: none;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const SettingsItemContentRow = ({ itemData, switchBtn }) => {
  const { headline, content } = itemData;

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledContent>{content}</StyledContent>
      </StyledContentWrapper>
      <StyledEditButton>
        {switchBtn ? <Switch color="primary" /> : 'Edit'}
      </StyledEditButton>
    </StyledWrapper>
  );
};

SettingsItemContentRow.propTypes = {
  itemData: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    content: PropTypes.string,
  }).isRequired,
  switchBtn: PropTypes.bool,
};

SettingsItemContentRow.defaultProps = {
  switchBtn: false,
};

export default SettingsItemContentRow;
