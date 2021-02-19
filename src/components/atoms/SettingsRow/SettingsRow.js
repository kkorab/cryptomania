import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const StyledRow = styled.div``;

const StyledRowWrapper = styled.div`
  padding: 1.5rem 1rem;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  & svg {
    font-size: 2.5rem;
  }
`;

const StyledRowHeadline = styled.h2`
  width: 90%;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;

const StyledDropdownButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const SettingsRow = ({ data }) => {
  const { headline, icon } = data;
  return (
    <StyledRow>
      <StyledRowWrapper>
        {icon.type.render()}
        <StyledRowHeadline>{headline}</StyledRowHeadline>
        <StyledDropdownButton>
          <KeyboardArrowDownIcon />
        </StyledDropdownButton>
      </StyledRowWrapper>
    </StyledRow>
  );
};

SettingsRow.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default SettingsRow;
