import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  & svg {
    font-size: 2.5rem;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const StyledRowHeadline = styled.h2`
  width: 90%;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledDropdownButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StyledCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingsRow = ({ data, handleClick }) => {
  const { headline, icon } = data;
  return (
    <StyledRow onClick={handleClick}>
      <StyledRowWrapper>
        <StyledCircle>{icon.type.render()}</StyledCircle>
        <StyledRowHeadline>{headline}</StyledRowHeadline>
        <StyledDropdownButton>
          <KeyboardArrowDownIcon />
        </StyledDropdownButton>
      </StyledRowWrapper>
    </StyledRow>
  );
};

SettingsRow.propTypes = {
  handleClick: PropTypes.func.isRequired,
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    icon: PropTypes.shape().isRequired,
  }).isRequired,
};

export default SettingsRow;
