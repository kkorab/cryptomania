import React from 'react';
import styled from 'styled-components';
import { ActivityRecord, PlainCard } from 'components/atoms';

const StyledActivityDate = styled.p`
  padding-bottom: 1rem;
`;

const LatestActivity = () => (
  <PlainCard fullHeight>
    <StyledActivityDate>Jul 2020</StyledActivityDate>
    <ActivityRecord />
    <ActivityRecord />
    <ActivityRecord />
    <ActivityRecord />
    <ActivityRecord />
    <ActivityRecord />
  </PlainCard>
);

export default LatestActivity;
