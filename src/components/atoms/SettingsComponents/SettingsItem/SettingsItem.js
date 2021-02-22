import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const StyledSettingsItemWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 800px;
  border-bottom: 1px solid ${({ theme }) => theme.fontColors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & svg {
    font-size: 2.5rem;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const StyledSettingsItemHeadline = styled.h2`
  width: 90%;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledCircle = styled.div`
  width: 34px;
  height: 34px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingsItem = ({ data, handleClick }) => {
  const { headline, icon } = data;
  return (
    <StyledSettingsItemWrapper onClick={handleClick}>
      <StyledCircle>{icon.type.render()}</StyledCircle>
      <StyledSettingsItemHeadline>{headline}</StyledSettingsItemHeadline>
      <KeyboardArrowDownIcon />
    </StyledSettingsItemWrapper>
  );
};

SettingsItem.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    icon: PropTypes.shape().isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};

SettingsItem.defaultProps = {
  handleClick: null,
};

export default SettingsItem;
