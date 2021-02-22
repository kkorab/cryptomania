import React from 'react';
import styled from 'styled-components';
import data from 'data';
import PropTypes from 'prop-types';
import withSettingsLogic from 'hoc/withSettingsLogic';
import { SettingsItem, SettingsItemContentWrapper } from 'components/atoms';

const StyledP = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.fontColors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const Subscriptions = ({ isHidden, handleClick }) => (
  <>
    <SettingsItem data={data.settings.menu[2]} handleClick={handleClick} />
    <SettingsItemContentWrapper isHidden={isHidden}>
      <StyledP>
        You haven&apos;t set up any subscriptions or 1-tap payments
      </StyledP>
    </SettingsItemContentWrapper>
  </>
);
Subscriptions.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withSettingsLogic(Subscriptions);
