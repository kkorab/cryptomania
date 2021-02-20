import React from 'react';
import styled from 'styled-components';
import { PageHeadline, PageWrapper } from 'components/atoms';
import { SettingsMenu } from 'components/organisms';

const StyledWrapper = styled.div``;

const Settings = () => (
  <PageWrapper>
    <PageHeadline>Settings</PageHeadline>
    <StyledWrapper>
      <SettingsMenu />
    </StyledWrapper>
  </PageWrapper>
);

export default Settings;
