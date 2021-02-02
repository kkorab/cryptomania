import React, { useState } from 'react';
import styled from 'styled-components';
import { ActivityRecord, PlainCard } from 'components/atoms';
import data from 'data';

const StyledActivityDate = styled.p`
  padding-bottom: 1rem;
`;

const LatestActivity = () => {
  const [transactionsData] = useState(data.transactions);
  return (
    <PlainCard fullHeight>
      <>
        <StyledActivityDate>Jul 2020</StyledActivityDate>
        {transactionsData.map(transaction => (
          <ActivityRecord
            key={transaction.transactionID}
            transaction={transaction}
          />
        ))}
      </>
    </PlainCard>
  );
};

export default LatestActivity;
