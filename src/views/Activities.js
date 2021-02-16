import React, { useState } from 'react';
import data from 'data';
import styled from 'styled-components';
import {
  ActivityRecord,
  PageHeadline,
  PageWrapper,
  PlainCard,
} from 'components/atoms';

const StyledHeadline = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding-bottom: 1rem;
`;

const StyledActivityWrapper = styled.div``;

const Activities = () => {
  const { activities } = data;
  const [activitiesData] = useState(activities);
  return (
    <PageWrapper>
      <PageHeadline>Activities</PageHeadline>
      <PlainCard fullHeight>
        <StyledHeadline>Latest activity</StyledHeadline>
        <StyledActivityWrapper>
          {activitiesData.map(el => (
            <ActivityRecord key={el.id} data={el} />
          ))}
        </StyledActivityWrapper>
      </PlainCard>
    </PageWrapper>
  );
};

export default Activities;
