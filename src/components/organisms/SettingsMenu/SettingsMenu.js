import React from 'react';
import styled from 'styled-components';
import {
  AccountSettings,
  MarketingPref,
  PersonalDetails,
  ReferralsProgram,
  Security,
  Subscriptions,
  Verification,
} from 'components/molecules';

const StyledSettingsWrapper = styled.div`
  margin-top: 20px;
`;

const SettingsMenu = () => (
  <StyledSettingsWrapper>
    <PersonalDetails />
    <AccountSettings />
    <Subscriptions />
    <MarketingPref />
    <ReferralsProgram />
    <Security />
    <Verification />
  </StyledSettingsWrapper>
);

export default SettingsMenu;
